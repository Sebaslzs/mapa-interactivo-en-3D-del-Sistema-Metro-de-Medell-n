// Modo "Mapa 2D": escena aparte con un mapa plano estilo cartografía (manzanas,
// calles, avenidas, río, parques y líneas del sistema) visto con cámara
// inclinada. El viaje del pasajero se proyecta encima con un vehículo 3D, el
// avatar caminando y una estela roja del trayecto recorrido.

import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { urbanFactor, riverDistance } from '../geo.js';
import { greenZone } from './terrain.js';
import { Noise2D, smoothstep, clamp } from '../util/rand.js';
import { ModelBuilder } from '../util/builder.js';
import { gondolaGeometry } from '../models/vehicles.js';
import { makePerson, animatePerson, AVATARS } from '../models/people.js';
import { MAT } from '../util/builder.js';
import { LINE_BY_ID } from '../data/lines.js';

const PAL = {
  bg: '#e9e6df',
  urban: '#e6e2d9',
  urbanHill: '#e2dccf',
  green1: '#d9edcf',
  green2: '#c7e4ba',
  green3: '#b9dcab',
  park: '#c4e6b2',
  water: '#a8d4f2',
  street: '#ffffff',
  highway: '#fde68a',
  highwayEdge: '#ecc85a',
  trail: '#e3262b',
};

// Material de cinta plana con ancho dependiente de la cámara (uniforme uWidth)
const RIB_VS = `
attribute vec3 aLat;
uniform float uWidth;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){
  vec3 p = position + aLat * uWidth;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  #include <logdepthbuf_vertex>
}`;
const RIB_FS = `
uniform vec3 uColor; uniform float uOpacity;
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  gl_FragColor = vec4(uColor, uOpacity);
  #include <colorspace_fragment>
}`;

function ribbonMaterial(color, width, opacity = 1, order = 5) {
  const m = new THREE.ShaderMaterial({
    uniforms: { uWidth: width, uColor: { value: new THREE.Color(color) }, uOpacity: { value: opacity } },
    vertexShader: RIB_VS,
    fragmentShader: RIB_FS,
    transparent: opacity < 1,
    depthTest: false,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  m.userData.order = order;
  return m;
}

// Construye la geometría de una polilínea plana (y fijo) con atributo lateral.
function ribbonGeometry(points, y, mul = 1, dash = 0) {
  const pos = [];
  const lat = [];
  let acc = 0;
  const n = points.length;
  const side = (i) => {
    const a = points[Math.max(0, i - 1)];
    const b = points[Math.min(n - 1, i + 1)];
    let dx = b.x - a.x;
    let dz = b.z - a.z;
    const l = Math.hypot(dx, dz) || 1;
    dx /= l;
    dz /= l;
    return [-dz * mul, dx * mul];
  };
  for (let i = 0; i < n - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    acc += Math.hypot(b.x - a.x, b.z - a.z);
    if (dash && Math.floor(acc / dash) % 2 === 1) continue;
    const [ax, az] = side(i);
    const [bx, bz] = side(i + 1);
    pos.push(a.x, y, a.z, a.x, y, a.z, b.x, y, b.z, a.x, y, a.z, b.x, y, b.z, b.x, y, b.z);
    lat.push(-ax, 0, -az, ax, 0, az, bx, 0, bz, -ax, 0, -az, bx, 0, bz, -bx, 0, -bz);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aLat', new THREE.Float32BufferAttribute(lat, 3));
  return g;
}

// Cuadriláteros de ancho fijo en unidades del mundo (calles).
function streetsGeometry(segs, width, y) {
  const pos = [];
  const h = width / 2;
  for (const [ax, az, bx, bz] of segs) {
    let dx = bx - ax;
    let dz = bz - az;
    const l = Math.hypot(dx, dz) || 1;
    const px = (-dz / l) * h;
    const pz = (dx / l) * h;
    // extender un poco para cerrar las uniones
    const ex = (dx / l) * h;
    const ez = (dz / l) * h;
    const A = [ax - ex - px, az - ez - pz];
    const B = [ax - ex + px, az - ez + pz];
    const C = [bx + ex + px, bz + ez + pz];
    const D = [bx + ex - px, bz + ez - pz];
    pos.push(A[0], y, A[1], B[0], y, B[1], C[0], y, C[1], A[0], y, A[1], C[0], y, C[1], D[0], y, D[1]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  return g;
}

const flatMat = (color, order) => {
  const m = new THREE.MeshBasicMaterial({ color, depthTest: false, depthWrite: false, side: THREE.DoubleSide });
  m.userData.order = order;
  return m;
};

export class Map2D {
  constructor(app) {
    this.app = app;
    this.active = false;
    this.built = false;
    this.labels = [];
    this.pickables = [];
    this.lineMeshes = {};
    this.stationMarks = [];
    this.width = { value: 2 };
    this.markScale = 1;
  }

  build() {
    const app = this.app;
    const T = app.terrain;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(PAL.bg);
    scene.fog = new THREE.Fog(PAL.bg, 1500, 6000);
    scene.add(new THREE.HemisphereLight('#ffffff', '#b7b2a6', 2.2));
    const sun = new THREE.DirectionalLight('#ffffff', 1.6);
    sun.position.set(300, 600, 200);
    scene.add(sun);
    this.scene = scene;
    const add = (mesh) => {
      mesh.renderOrder = mesh.material.userData.order ?? 0;
      mesh.frustumCulled = false;
      scene.add(mesh);
      return mesh;
    };

    // ---- Fondo lejano y relieve "pintado" (sin altura)
    const far = new THREE.Mesh(new THREE.PlaneGeometry(20000, 20000).rotateX(-Math.PI / 2), flatMat(PAL.green1, 0));
    add(far);
    const src = T.core.geometry.attributes.position.array;
    const pos = new Float32Array(src.length);
    const col = new Float32Array(src.length);
    const c = new THREE.Color();
    const cu = new THREE.Color(PAL.urban);
    const cuh = new THREE.Color(PAL.urbanHill);
    const g1 = new THREE.Color(PAL.green1);
    const g2 = new THREE.Color(PAL.green2);
    const g3 = new THREE.Color(PAL.green3);
    const gp = new THREE.Color(PAL.park);
    for (let i = 0; i < src.length; i += 9) {
      const mx = (src[i] + src[i + 3] + src[i + 6]) / 3;
      const mz = (src[i + 2] + src[i + 5] + src[i + 8]) / 3;
      const e = T.elevationAt(mx, mz);
      const gz = greenZone(mx, mz);
      const u = urbanFactor(mx, mz, e) * (1 - gz);
      c.copy(g1).lerp(g2, smoothstep(1650, 2100, e)).lerp(g3, smoothstep(2200, 2700, e));
      if (gz > 0.3) c.lerp(gp, gz);
      c.lerp(cu.clone().lerp(cuh, smoothstep(1560, 1800, e)), clamp(u * 1.4 - 0.15, 0, 1));
      for (let k = 0; k < 3; k++) {
        pos[i + k * 3] = src[i + k * 3];
        pos[i + k * 3 + 1] = 0;
        pos[i + k * 3 + 2] = src[i + k * 3 + 2];
        col[i + k * 3] = c.r;
        col[i + k * 3 + 1] = c.g;
        col[i + k * 3 + 2] = c.b;
      }
    }
    const bg = new THREE.BufferGeometry();
    bg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    bg.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const baseMat = new THREE.MeshBasicMaterial({ vertexColors: true, depthTest: false, depthWrite: false, side: THREE.DoubleSide });
    baseMat.userData.order = 1;
    add(new THREE.Mesh(bg, baseMat));

    // ---- Calles: retícula con leve ondulación (más sinuosa en ladera)
    const noise = new Noise2D(4242);
    const S = 11;
    const x0 = T.x0 + 10;
    const z0 = T.z0 + 10;
    const nx = Math.floor((T.nx * T.cell - 20) / S);
    const nz = Math.floor((T.nz * T.cell - 20) / S);
    const P = new Float32Array((nx + 1) * (nz + 1) * 3);
    for (let j = 0; j <= nz; j++) {
      for (let i = 0; i <= nx; i++) {
        const x = x0 + i * S;
        const z = z0 + j * S;
        const e = T.elevationAt(x, z);
        const ok = urbanFactor(x, z, e) * (1 - greenZone(x, z)) > 0.42 && Math.abs(riverDistance(x, z)) > 70;
        const w = 1.2 + 3.2 * smoothstep(1560, 1850, e);
        const k = (j * (nx + 1) + i) * 3;
        P[k] = x + noise.noise(x / 60, z / 60) * w;
        P[k + 1] = z + noise.noise(x / 60 + 40, z / 60 - 17) * w;
        P[k + 2] = ok ? 1 : 0;
      }
    }
    const segs = [];
    const at = (i, j) => (j * (nx + 1) + i) * 3;
    for (let j = 0; j <= nz; j++) {
      for (let i = 0; i <= nx; i++) {
        const a = at(i, j);
        if (!P[a + 2]) continue;
        if (i < nx && P[at(i + 1, j) + 2]) segs.push([P[a], P[a + 1], P[at(i + 1, j)], P[at(i + 1, j) + 1]]);
        if (j < nz && P[at(i, j + 1) + 2]) segs.push([P[a], P[a + 1], P[at(i, j + 1)], P[at(i, j + 1) + 1]]);
      }
    }
    add(new THREE.Mesh(streetsGeometry(segs, 1.35, 0.02), flatMat('#d3cec4', 2)));
    add(new THREE.Mesh(streetsGeometry(segs, 0.95, 0.03), flatMat(PAL.street, 3)));

    // ---- Río y autopistas paralelas (Regional y Autopista Sur/Norte)
    const rp = app.riverPath.points;
    const off = (pts, d) =>
      pts.map((p, i) => {
        const a = pts[Math.max(0, i - 1)];
        const b = pts[Math.min(pts.length - 1, i + 1)];
        const t = new THREE.Vector3(b.x - a.x, 0, b.z - a.z).normalize();
        return new THREE.Vector3(p.x - t.z * d, 0, p.z + t.x * d);
      });
    add(new THREE.Mesh(ribbonGeometry(rp, 0.05, 1), ribbonMaterial(PAL.water, { value: 3.2 }, 1, 4)));
    const hwW = { value: 1.2 };
    this.hwW = hwW;
    this.hwEdge = { value: 1.6 };
    for (const d of [-6.5, 6.5]) {
      const hp = off(rp, d);
      add(new THREE.Mesh(ribbonGeometry(hp, 0.06, 1), ribbonMaterial(PAL.highwayEdge, this.hwEdge, 1, 5)));
      add(new THREE.Mesh(ribbonGeometry(hp, 0.07, 1), ribbonMaterial(PAL.highway, hwW, 1, 6)));
    }

    // ---- Rutas alimentadoras (verde punteado)
    this.feederGroup = new THREE.Group();
    for (const f of app.network.feeders) {
      const m = new THREE.Mesh(ribbonGeometry(f.path.points, 0.1, 0.45, 2.2), ribbonMaterial(f.color, this.width, 0.9, 7));
      m.renderOrder = 7;
      m.frustumCulled = false;
      this.feederGroup.add(m);
    }
    scene.add(this.feederGroup);

    // ---- Líneas del sistema con su color oficial
    for (const rt of Object.values(app.network.lines)) {
      const g = new THREE.Group();
      const mul = rt.mode === 'metro' ? 1 : rt.mode === 'cable' ? 0.6 : 0.72;
      const pts = rt.path.points.filter((_, i) => i % 2 === 0);
      const edge = new THREE.Mesh(ribbonGeometry(pts, 0.2, mul * 1.45, rt.def.construction ? 5 : 0), ribbonMaterial('#ffffff', this.width, 1, 8));
      const core = new THREE.Mesh(ribbonGeometry(pts, 0.25, mul, rt.def.construction ? 5 : 0), ribbonMaterial(rt.color, this.width, 1, 9));
      for (const m of [edge, core]) {
        m.renderOrder = m.material.userData.order;
        m.frustumCulled = false;
        g.add(m);
      }
      scene.add(g);
      this.lineMeshes[rt.id] = g;
    }

    // ---- Estaciones (círculo blanco con aro de color, como el mapa oficial)
    const disc = new THREE.CircleGeometry(1, 20).rotateX(-Math.PI / 2);
    const ring = new THREE.RingGeometry(0.62, 1, 20).rotateX(-Math.PI / 2);
    for (const cx of Object.values(app.network.complexes)) {
      const grp = new THREE.Group();
      grp.position.set(cx.pos.x, 0.3, cx.pos.z);
      const transfer = cx.lines.length > 1;
      const color = transfer ? '#1d1d1b' : LINE_BY_ID[cx.lines[0]].color;
      const w = new THREE.Mesh(disc, flatMat('#ffffff', 10));
      const r = new THREE.Mesh(ring, flatMat(color, 11));
      w.renderOrder = 10;
      r.renderOrder = 11;
      w.userData = { type: 'station', key: cx.key };
      grp.add(w, r);
      scene.add(grp);
      this.pickables.push(w);
      this.stationMarks.push({ grp, cx, big: transfer || cx.primaryMode === 'metro' });
      // etiqueta
      const el = app.ui.makeStationLabel(cx);
      const obj = new CSS2DObject(el);
      obj.position.set(cx.pos.x, 1.5, cx.pos.z);
      obj.center.set(0.5, 1.25);
      scene.add(obj);
      const tier = cx.lines.length > 1 || cx.primaryMode === 'metro' ? 1 : cx.primaryMode === 'cable' ? 2 : 3;
      this.labels.push({ obj, el, cx, tier, kind: 'station' });
    }
    // ---- Lugares turísticos (íconos)
    for (const lm of app.landmarks) {
      const el = app.ui.makeLandmarkLabel(lm.def);
      const obj = new CSS2DObject(el);
      obj.position.set(lm.pos.x, 1.5, lm.pos.z);
      obj.center.set(0.5, 1);
      scene.add(obj);
      this.labels.push({ obj, el, lm, tier: 0, kind: 'landmark' });
    }

    // ---- Capa del viaje: ruta planeada, estela, vehículo y avatar
    this.journeyLayer = new THREE.Group();
    scene.add(this.journeyLayer);
    this._buildTrail();
    this.heroes = {};
    this.shadow = new THREE.Mesh(
      new THREE.CircleGeometry(1, 20).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.18, depthTest: false, depthWrite: false }),
    );
    this.shadow.renderOrder = 12;
    this.shadow.visible = false;
    scene.add(this.shadow);
    this.pinFrom = this._pin('#6DB843');
    this.pinTo = this._pin(PAL.trail);
    this.built = true;
  }

  _pin(color) {
    const b = new ModelBuilder();
    b.cone(0.9, 2.2, 12, color, { p: [0, 1.1, 0], r: [Math.PI, 0, 0] });
    b.sphere(1.3, 1, color, { p: [0, 2.9, 0] });
    b.sphere(0.55, 1, '#ffffff', { p: [0, 2.95, 0.75], layer: 'glow' });
    const g = b.build({ castShadow: false });
    g.visible = false;
    g.renderOrder = 20;
    this.scene.add(g);
    return g;
  }

  _buildTrail() {
    const MAX = 12000;
    this.trailMax = MAX;
    this.trailPos = new Float32Array(MAX * 18);
    this.trailLat = new Float32Array(MAX * 18);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.trailPos, 3));
    g.setAttribute('aLat', new THREE.BufferAttribute(this.trailLat, 3));
    g.setDrawRange(0, 0);
    this.trailW = { value: 1.5 };
    this.trailEdgeW = { value: 2 };
    const edge = new THREE.Mesh(g, ribbonMaterial('#ffffff', this.trailEdgeW, 1, 13));
    const core = new THREE.Mesh(g, ribbonMaterial(PAL.trail, this.trailW, 1, 14));
    for (const m of [edge, core]) {
      m.renderOrder = m.material.userData.order;
      m.frustumCulled = false;
      this.journeyLayer.add(m);
    }
    this.trailGeo = g;
    this.trailN = 0;
    this.trailLast = null;
    this.trailPrevDir = null;
    // Puntos amarillos que marcan el recorrido (como "migas de pan")
    const dotGeo = new THREE.CircleGeometry(1, 14).rotateX(-Math.PI / 2);
    this.dots = new THREE.InstancedMesh(dotGeo, flatMat('#ffc20e', 15), 400);
    this.dots.count = 0;
    this.dots.renderOrder = 15;
    this.dots.frustumCulled = false;
    this.journeyLayer.add(this.dots);
    this.dotAcc = 0;
  }

  _resetJourney() {
    this.trailN = 0;
    this.trailLast = null;
    this.trailGeo.setDrawRange(0, 0);
    this.dots.count = 0;
    this.dotAcc = 0;
    if (this.routeGroup) {
      this.journeyLayer.remove(this.routeGroup);
      this.routeGroup.traverse((o) => o.geometry && o.geometry.dispose());
      this.routeGroup = null;
    }
    for (const h of Object.values(this.heroes)) h.visible = false;
    this.shadow.visible = false;
  }

  _buildRoute(route) {
    const g = new THREE.Group();
    for (const leg of route.legs) {
      const rt = this.app.network.lines[leg.line];
      const a = rt.stops[leg.from].s;
      const b = rt.stops[leg.to].s;
      const n = Math.max(3, Math.ceil(Math.abs(b - a) / 2));
      const pts = [];
      for (let i = 0; i <= n; i++) pts.push(rt.path.pointAt(a + ((b - a) * i) / n));
      const m = new THREE.Mesh(ribbonGeometry(pts, 0.32, 0.32, 2.2), ribbonMaterial('#ffffff', this.width, 0.95, 12));
      m.renderOrder = 12;
      m.frustumCulled = false;
      g.add(m);
    }
    this.routeGroup = g;
    this.journeyLayer.add(g);
  }

  _appendTrail(p) {
    if (this.trailLast && Math.hypot(p.x - this.trailLast.x, p.z - this.trailLast.z) < 0.6) return;
    if (this.trailLast && this.trailN < this.trailMax) {
      const a = this.trailLast;
      let dx = p.x - a.x;
      let dz = p.z - a.z;
      const l = Math.hypot(dx, dz);
      if (l > 60) {
        // salto (p. ej. al cambiar de vehículo): no unir con una recta larga
        this.trailLast = { x: p.x, z: p.z };
        return;
      }
      dx /= l;
      dz /= l;
      const sx = -dz;
      const sz = dx;
      const pa = this.trailPrevDir || [sx, sz];
      const k = this.trailN * 18;
      const y = 0.4;
      const P = this.trailPos;
      const L = this.trailLat;
      P.set([a.x, y, a.z, a.x, y, a.z, p.x, y, p.z, a.x, y, a.z, p.x, y, p.z, p.x, y, p.z], k);
      L.set([-pa[0], 0, -pa[1], pa[0], 0, pa[1], sx, 0, sz, -pa[0], 0, -pa[1], sx, 0, sz, -sx, 0, -sz], k);
      this.trailPrevDir = [sx, sz];
      this.trailN++;
      this.trailGeo.setDrawRange(0, this.trailN * 6);
      this.trailGeo.attributes.position.needsUpdate = true;
      this.trailGeo.attributes.aLat.needsUpdate = true;
      this.dotAcc += l;
      if (this.dotAcc > 7 && this.dots.count < 400) {
        this.dotAcc = 0;
        const m = new THREE.Matrix4().compose(new THREE.Vector3(p.x, 0.45, p.z), new THREE.Quaternion(), new THREE.Vector3(1, 1, 1).multiplyScalar(this.trailW.value * 1.1));
        this.dots.setMatrixAt(this.dots.count, m);
        this.dots.count++;
        this.dots.instanceMatrix.needsUpdate = true;
      }
    }
    this.trailLast = { x: p.x, z: p.z };
  }

  // Modelo 3D "héroe" que representa al vehículo del viaje sobre el mapa
  _hero(key, make) {
    if (!this.heroes[key]) {
      const h = make();
      const size = new THREE.Box3().setFromObject(h).getSize(new THREE.Vector3());
      h.userData.len = Math.max(size.x, size.z, 0.1);
      h.userData.tall = size.y;
      h.visible = false;
      h.renderOrder = 20;
      h.traverse((o) => (o.renderOrder = 20));
      this.scene.add(h);
      this.heroes[key] = h;
    }
    return this.heroes[key];
  }

  _vehicleHero(rt) {
    return this._hero('v-' + rt.id, () => {
      const g = new THREE.Group();
      if (rt.mode === 'cable') {
        const m = new THREE.Mesh(gondolaGeometry(rt.color), MAT.solid);
        m.position.y = 4;
        m.scale.setScalar(3);
        g.add(m);
      } else {
        const car = this.app.traffic.template(rt).cars[0].clone();
        car.scale.multiplyScalar(2.6);
        g.add(car);
      }
      return g;
    });
  }

  _avatarHero(key) {
    return this._hero('a-' + key, () => {
      const g = new THREE.Group();
      const p = makePerson(AVATARS[key]);
      p.scale.multiplyScalar(6);
      g.add(p);
      g.userData.person = p;
      return g;
    });
  }

  _marker() {
    if (this.youMarker) return this.youMarker;
    const el = document.createElement('div');
    el.className = 'you-marker';
    this.youMarker = new CSS2DObject(el);
    this.youMarker.center.set(0.5, 1.1); // se apoya encima del vehículo, sin taparlo
    this.scene.add(this.youMarker);
    return this.youMarker;
  }

  update(dt, t, camDist) {
    const app = this.app;
    // Anchos que se adaptan a la distancia de la cámara
    this.width.value = clamp(camDist * 0.0042, 0.55, 9);
    this.hwW.value = clamp(camDist * 0.0026, 0.9, 5);
    this.hwEdge.value = this.hwW.value * 1.35;
    this.trailW.value = clamp(camDist * 0.006, 0.75, 10);
    this.trailEdgeW.value = this.trailW.value * 1.4;
    const ms = clamp(camDist * 0.0065, 1.1, 11);
    for (const s of this.stationMarks) s.grp.scale.setScalar(s.big ? ms : ms * 0.72);
    // Pines de origen/destino
    for (const [pin2, pin3] of [[this.pinFrom, app.pinFrom], [this.pinTo, app.pinTo]]) {
      pin2.visible = pin3.visible || (pin2 === this.pinTo && app.journey.active && !!app.journey.route);
      if (pin3.visible) pin2.position.set(pin3.position.x, 0, pin3.position.z);
      else if (pin2.visible && app.journey.route) {
        const cx = app.network.complexes[app.journey.route.to];
        pin2.position.set(cx.pos.x, 0, cx.pos.z);
      }
      pin2.scale.setScalar(clamp(camDist * 0.008, 0.8, 12));
      pin2.position.y = Math.abs(Math.sin(t * 3)) * 0.3 * pin2.scale.x;
    }

    // ---- Viaje
    const j = app.journey;
    if (!j.active || !j.route) {
      if (this.routeRef) {
        this._resetJourney();
        this.routeRef = null;
      }
      if (this.youMarker) this.youMarker.visible = false;
      return;
    }
    if (this.routeRef !== j.route) {
      this._resetJourney();
      this._buildRoute(j.route);
      this.routeRef = j.route;
    }
    for (const h of Object.values(this.heroes)) h.visible = false;
    let focus = null;
    // Escala para que el modelo ocupe una fracción fija de la vista: no crece
    // sin control al alejar la cámara ni se hace diminuto al acercarla.
    const fit = (h, frac, size) => Math.max(1, (camDist * frac) / size);
    let hs = 1;
    // Vehículo
    const v = j.vehicle;
    if (v) {
      const rt = v.rt;
      if (rt) {
        const h = this._vehicleHero(rt);
        const src = new THREE.Vector3();
        const q = new THREE.Quaternion();
        if (v.kind === 'gondola') {
          v.mesh.matrix.decompose(src, q, new THREE.Vector3());
        } else {
          src.copy(v.rig.cars[0].position);
          q.copy(v.rig.cars[0].quaternion);
        }
        const f = new THREE.Vector3(1, 0, 0).applyQuaternion(q);
        h.position.set(src.x, 0.5, src.z);
        h.rotation.set(0, Math.atan2(-f.z, f.x), 0);
        const s = fit(h, 0.075, h.userData.len);
        h.scale.setScalar(s);
        h.visible = true;
        if (!j.avatar || !j.avatar.visible) {
          focus = h.position;
          hs = s;
          this._focusHero = h;
        }
      }
    }
    // Avatar caminando
    if (j.avatar && j.avatar.visible) {
      const h = this._avatarHero(j.avatarKey);
      const f = new THREE.Vector3(1, 0, 0).applyQuaternion(j.avatar.quaternion);
      h.position.set(j.avatar.position.x, 0.5, j.avatar.position.z);
      h.rotation.set(0, Math.atan2(-f.z, f.x), 0);
      hs = fit(h, 0.035, h.userData.tall);
      h.scale.setScalar(hs);
      h.visible = true;
      this._focusHero = h;
      animatePerson(h.userData.person, j.time, j.walking, 1);
      focus = h.position;
    }
    if (focus) {
      this._appendTrail(focus);
      this.shadow.visible = true;
      this.shadow.position.set(focus.x, 0.35, focus.z);
      const fh = this._focusHero;
      this.shadow.scale.setScalar(hs * Math.max(fh.userData.len * 0.32, 0.8));
      const mk = this._marker();
      mk.visible = true;
      if (!mk.element.innerHTML) {
        const src = app.ui.portraits?.[j.avatarKey];
        mk.element.innerHTML = `${src ? `<img src="${src}" alt="">` : ''}<span>Tú</span>`;
      }
      mk.position.set(focus.x, hs * fh.userData.tall + 1, focus.z);
    }
  }

  setLineVisible(id, v) {
    if (this.lineMeshes[id]) this.lineMeshes[id].visible = v;
  }
}
