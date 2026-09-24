// Infraestructura visible de cada línea: viaductos y rieles del metro,
// calles del tranvía con catenaria, carriles de Metroplús, obra de la
// Línea E, pilonas y cables del Metrocable, vías alimentadoras y el río.

import * as THREE from 'three';
import { ModelBuilder, MAT, shade } from '../util/builder.js';
import { RIVER } from '../geo.js';
import { Path, resample } from '../util/path.js';
import { smoothArray, MODE_GEOM } from './network.js';

const UP = new THREE.Vector3(0, 1, 0);

// Acumulador de triángulos con color por vértice.
class Tris {
  constructor() {
    this.pos = [];
    this.col = [];
    this._c = new THREE.Color();
  }
  quad(a, b, c, d, color) {
    // a-b-c-d en sentido antihorario visto desde la cara
    this._c.set(color);
    const { r, g, b: bl } = this._c;
    this.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z, a.x, a.y, a.z, c.x, c.y, c.z, d.x, d.y, d.z);
    for (let i = 0; i < 6; i++) this.col.push(r, g, bl);
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.computeVertexNormals();
    return g;
  }
}

function frame(points, i) {
  const a = points[Math.max(0, i - 1)];
  const b = points[Math.min(points.length - 1, i + 1)];
  const t = new THREE.Vector3(b.x - a.x, 0, b.z - a.z).normalize();
  const r = new THREE.Vector3().crossVectors(t, UP).normalize();
  return { t, r };
}

// Cinta con costados que bajan hasta el terreno (o viga si está elevada).
function bed(tris, points, terrain, opt) {
  const { half, top, side, stripe, beamT = 0.55, offset = 0, lift = 0, bandEvery = 0, band2 } = opt;
  const n = points.length;
  const L = [];
  const R = [];
  for (let i = 0; i < n; i++) {
    const { r } = frame(points, i);
    const p = points[i];
    const cx = p.x + r.x * offset;
    const cz = p.z + r.z * offset;
    const y = p.y + lift;
    const l = new THREE.Vector3(cx - r.x * half, y, cz - r.z * half);
    const rr = new THREE.Vector3(cx + r.x * half, y, cz + r.z * half);
    const gl = terrain.heightAt(l.x, l.z);
    const gr = terrain.heightAt(rr.x, rr.z);
    const elevated = y - Math.min(gl, gr) > 1.3;
    L.push({ top: l, bot: new THREE.Vector3(l.x, elevated ? y - beamT : gl - 0.4, l.z), elevated });
    R.push({ top: rr, bot: new THREE.Vector3(rr.x, elevated ? y - beamT : gr - 0.4, rr.z), elevated });
  }
  let acc = 0;
  for (let i = 0; i < n - 1; i++) {
    const a = L[i];
    const b = L[i + 1];
    const c = R[i];
    const d = R[i + 1];
    acc += points[i].distanceTo(points[i + 1]);
    let topColor = top;
    if (bandEvery && band2 && Math.floor(acc / bandEvery) % 2 === 1) topColor = band2;
    tris.quad(a.top, c.top, d.top, b.top, topColor);
    tris.quad(b.top, b.bot, a.bot, a.top, side); // izquierda
    tris.quad(c.top, c.bot, d.bot, d.top, side); // derecha
    if (a.elevated || b.elevated) tris.quad(a.bot, b.bot, d.bot, c.bot, side);
    if (stripe) {
      const o = 0.02;
      const s0 = 0.14;
      const s1 = 0.34;
      const off = (p, sgn, dy) => {
        const { r } = frame(points, p === a || p === c ? i : i + 1);
        return new THREE.Vector3(p.top.x + r.x * o * sgn, p.top.y - dy, p.top.z + r.z * o * sgn);
      };
      tris.quad(off(b, -1, s0), off(b, -1, s1), off(a, -1, s1), off(a, -1, s0), stripe);
      tris.quad(off(c, 1, s0), off(c, 1, s1), off(d, 1, s1), off(d, 1, s0), stripe);
    }
  }
}

// Franja delgada sobre la vía (rieles, bordes de color, líneas).
function strip(tris, points, offset, half, dy, color, dash = 0) {
  let acc = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const segL = points[i].distanceTo(points[i + 1]);
    acc += segL;
    if (dash && Math.floor(acc / dash) % 2 === 1) continue;
    const f0 = frame(points, i);
    const f1 = frame(points, i + 1);
    const p0 = points[i];
    const p1 = points[i + 1];
    const a = new THREE.Vector3(p0.x + f0.r.x * (offset - half), p0.y + dy, p0.z + f0.r.z * (offset - half));
    const b = new THREE.Vector3(p0.x + f0.r.x * (offset + half), p0.y + dy, p0.z + f0.r.z * (offset + half));
    const c = new THREE.Vector3(p1.x + f1.r.x * (offset + half), p1.y + dy, p1.z + f1.r.z * (offset + half));
    const d = new THREE.Vector3(p1.x + f1.r.x * (offset - half), p1.y + dy, p1.z + f1.r.z * (offset - half));
    tris.quad(a, b, c, d, color);
  }
}

export function buildLineInfra(rt, terrain) {
  const group = new THREE.Group();
  group.name = 'infra-' + rt.id;
  const tris = new Tris();
  const mb = new ModelBuilder();
  const P = rt.path.points;
  const g = MODE_GEOM[rt.mode];

  if (rt.mode === 'metro') {
    // Tablero del color oficial de la línea (se lee como el mapa esquemático)
    bed(tris, P, terrain, { half: g.half, top: shade(rt.color, 0.08), side: '#dcd8cf', stripe: rt.color });
    for (const lane of [-g.lane, g.lane]) {
      strip(tris, P, lane, 0.3, 0.03, '#7d776d');
      strip(tris, P, lane - 0.2, 0.045, 0.07, '#3f4146');
      strip(tris, P, lane + 0.2, 0.045, 0.07, '#3f4146');
    }
    // Pilares bajo el viaducto
    for (let s = 3; s < rt.path.length; s += 7) {
      const p = rt.path.pointAt(s);
      const gy = terrain.heightAt(p.x, p.z);
      const h = p.y - 0.55 - gy;
      if (h < 0.8) continue;
      const t = rt.path.tangentAt(s);
      const yaw = Math.atan2(-t.z, t.x);
      mb.cyl(0.32, 0.4, h + 0.4, 6, '#d6d1c7', { p: [p.x, gy - 0.2 + (h + 0.4) / 2, p.z] });
      mb.box(0.5, 0.3, 2.6, '#cfcac0', { p: [p.x, p.y - 0.7, p.z], r: [0, yaw, 0] });
    }
  } else if (rt.mode === 'tram') {
    bed(tris, P, terrain, { half: g.half, top: '#77736d', side: '#8d877e' });
    strip(tris, P, -g.half + 0.14, 0.14, 0.02, rt.color);
    strip(tris, P, g.half - 0.14, 0.14, 0.02, rt.color);
    for (const lane of [-g.lane, g.lane]) {
      strip(tris, P, lane - 0.17, 0.035, 0.03, '#3e3e42');
      strip(tris, P, lane + 0.17, 0.035, 0.03, '#3e3e42');
    }
    strip(tris, P, 0, 0.05, 0.025, '#e8e3d6', 1.5);
    // Catenaria: postes y cable aéreo
    let prev = null;
    for (let s = 2; s < rt.path.length; s += 8) {
      const p = rt.path.pointAt(s);
      const r = rt.path.rightAt(s);
      const t = rt.path.tangentAt(s);
      const yaw = Math.atan2(-t.z, t.x);
      const side = Math.floor(s / 8) % 2 ? 1 : -1;
      const px = p.x + r.x * (g.half + 0.15) * side;
      const pz = p.z + r.z * (g.half + 0.15) * side;
      mb.box(0.09, 1.7, 0.09, '#5a5f66', { p: [px, p.y + 0.85, pz] });
      mb.box(0.05, 0.05, g.half * 2 + 0.3, '#5a5f66', { p: [p.x, p.y + 1.6, p.z], r: [0, yaw, 0] });
      const wires = [-g.lane, g.lane].map((ln) => new THREE.Vector3(p.x + r.x * ln, p.y + 1.5, p.z + r.z * ln));
      if (prev) {
        for (let k = 0; k < 2; k++) {
          const a = prev[k];
          const b = wires[k];
          const mid = a.clone().add(b).multiplyScalar(0.5);
          const len = a.distanceTo(b);
          const dir = b.clone().sub(a).normalize();
          const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir);
          mb.box(len, 0.025, 0.025, '#2d2f33', { p: [mid.x, mid.y, mid.z], q });
        }
      }
      prev = wires;
    }
  } else if (rt.mode === 'bus') {
    bed(tris, P, terrain, { half: g.half, top: '#5c6066', side: '#7a7b7c' });
    strip(tris, P, -g.half + 0.2, 0.2, 0.02, rt.color);
    strip(tris, P, g.half - 0.2, 0.2, 0.02, rt.color);
    strip(tris, P, 0, 0.04, 0.02, '#f1efe6', 1.2);
  } else if (rt.mode === 'lrt') {
    // Obra en construcción: franjas rosadas y blancas (como el trazo rayado del mapa oficial)
    bed(tris, P, terrain, { half: g.half, top: rt.color, band2: '#f6f1ee', bandEvery: 2.2, side: '#b8aa9c' });
    for (const lane of [-g.lane, g.lane]) {
      strip(tris, P, lane - 0.17, 0.035, 0.03, '#6c6468');
      strip(tris, P, lane + 0.17, 0.035, 0.03, '#6c6468');
    }
    // Conos y barreras de obra
    for (let s = 5; s < rt.path.length; s += 11) {
      const p = rt.path.pointAt(s);
      const r = rt.path.rightAt(s);
      const t = rt.path.tangentAt(s);
      const yaw = Math.atan2(-t.z, t.x);
      for (const sd of [-1, 1]) {
        const x = p.x + r.x * (g.half + 0.35) * sd;
        const z = p.z + r.z * (g.half + 0.35) * sd;
        const y = terrain.heightAt(x, z);
        if ((Math.floor(s / 11) + (sd > 0 ? 1 : 0)) % 2) {
          mb.cone(0.14, 0.4, 6, '#ff7a1a', { p: [x, y + 0.2, z] });
          mb.cyl(0.1, 0.12, 0.08, 6, '#ffffff', { p: [x, y + 0.22, z] });
        } else {
          mb.box(1.6, 0.35, 0.08, '#f4f4f4', { p: [x, y + 0.45, z], r: [0, yaw, 0] });
          mb.box(1.6, 0.1, 0.09, '#ff5a1f', { p: [x, y + 0.5, z], r: [0, yaw, 0] });
          mb.box(0.08, 0.45, 0.08, '#555555', { p: [x, y + 0.2, z], r: [0, yaw, 0] });
        }
      }
    }
  } else if (rt.mode === 'cable') {
    buildCableInfra(rt, terrain, mb);
  }

  if (tris.pos.length) {
    const mesh = new THREE.Mesh(tris.geometry(), MAT.solid);
    mesh.receiveShadow = true;
    mesh.castShadow = rt.mode === 'metro';
    group.add(mesh);
  }
  const extra = mb.build({ castShadow: true });
  group.add(extra);
  return group;
}

function buildCableInfra(rt, terrain, mb) {
  const lane = rt.lane;
  const sup = rt.supports;
  const dirAt = (i) => {
    const a = sup[Math.max(0, i - 1)];
    const b = sup[Math.min(sup.length - 1, i + 1)];
    return new THREE.Vector3(b.x - a.x, 0, b.z - a.z).normalize();
  };
  for (let i = 0; i < sup.length; i++) {
    const s = sup[i];
    if (s.type !== 'tower') continue;
    const d = dirAt(i);
    const yaw = Math.atan2(-d.z, d.x);
    const h = s.height;
    // Fuste troncocónico (4 caras), cruceta, poleas y remate del color de la línea
    mb.cyl(0.22, 0.5, h - 0.25, 4, '#e8e6e1', { p: [s.x, s.ground + (h - 0.25) / 2, s.z], r: [0, yaw + Math.PI / 4, 0] });
    mb.box(0.9, 0.35, 0.9, '#bcb6ab', { p: [s.x, s.ground + 0.15, s.z], r: [0, yaw, 0] });
    mb.box(0.35, 0.28, lane * 2 + 0.7, rt.color, { p: [s.x, s.y + 0.02, s.z], r: [0, yaw, 0] });
    for (const sd of [-1, 1]) {
      const ox = Math.sin(yaw) * lane * sd;
      const oz = Math.cos(yaw) * lane * sd;
      mb.box(0.9, 0.12, 0.16, '#3a3d42', { p: [s.x + ox, s.y - 0.06, s.z + oz], r: [0, yaw, 0] });
    }
  }
  // Cables (ida y regreso) con catenaria leve
  const tmpA = new THREE.Vector3();
  const tmpB = new THREE.Vector3();
  for (const off of [-lane, lane]) {
    const step = 3;
    for (let s = 0; s < rt.path.length - 0.01; s += step) {
      const s1 = Math.min(rt.path.length, s + step);
      rt.path.laneAt(s, off, tmpA);
      rt.path.laneAt(s1, off, tmpB);
      const mid = tmpA.clone().add(tmpB).multiplyScalar(0.5);
      const len = tmpA.distanceTo(tmpB);
      const dir = tmpB.clone().sub(tmpA).normalize();
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir);
      mb.box(len + 0.02, 0.08, 0.08, shade(rt.color, -0.12), { p: [mid.x, mid.y + 0.02, mid.z], q });
    }
  }
}

// Vía de ruta alimentadora (calle angosta con trazos verdes)
export function buildFeederInfra(f, terrain) {
  const tris = new Tris();
  const P = f.path.points;
  bed(tris, P, terrain, { half: MODE_GEOM.feeder.half, top: '#8a857d', side: '#9b958b' });
  strip(tris, P, 0, 0.1, 0.02, f.color, 1.4);
  const mesh = new THREE.Mesh(tris.geometry(), MAT.solid);
  mesh.receiveShadow = true;
  return mesh;
}

// Río Medellín
export function buildRiver(terrain) {
  const pts = RIVER.map((p) => new THREE.Vector3(p.x, 0, p.z));
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  const len = curve.getLength();
  const sp = curve.getSpacedPoints(Math.ceil(len / 2));
  const inside = sp.filter((p) => terrain.inBounds(p.x, p.z, 2));
  const half = 2.8;
  const ys = inside.map((p, i) => {
    const { r } = frame(inside, i);
    return Math.max(
      terrain.heightAt(p.x, p.z),
      terrain.heightAt(p.x + r.x * half, p.z + r.z * half),
      terrain.heightAt(p.x - r.x * half, p.z - r.z * half),
    );
  });
  const sm = smoothArray(Float32Array.from(ys), 3);
  inside.forEach((p, i) => (p.y = Math.max(sm[i], ys[i]) + 0.22));
  const tris = new Tris();
  bed(tris, inside, terrain, { half, top: '#3f9fd6', side: '#6c9a6a' });
  strip(tris, inside, 0, 0.9, 0.01, '#5ab4e6', 0);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.25, metalness: 0.1 });
  const mesh = new THREE.Mesh(tris.geometry(), mat);
  mesh.receiveShadow = true;
  mesh.name = 'rio';
  return { mesh, path: new Path(inside) };
}

// Línea "de mapa" que se superpone al alejarse: ancho y opacidad dependen de
// la distancia de la cámara (uniformes compartidos por todas las líneas).
export const MAP_UNIFORMS = { uWidth: { value: 3 }, uOpacity: { value: 0 } };
const MAP_VS = `
attribute vec3 aLat;
uniform float uWidth;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){
  vec3 p = position + aLat * uWidth;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  #include <logdepthbuf_vertex>
}`;
const MAP_FS = `
uniform vec3 uColor; uniform float uOpacity;
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  gl_FragColor = vec4(uColor, uOpacity);
  #include <colorspace_fragment>
}`;

export function buildMapLine(rt, widthMul = 1, dash = 0) {
  const P = rt.mode === 'cable' ? rt.path.points : rt.path.points.filter((_, i) => i % 2 === 0);
  const pos = [];
  const lat = [];
  let acc = 0;
  const lift = rt.mode === 'cable' ? 0.2 : 2.2;
  for (let i = 0; i < P.length - 1; i++) {
    const a = P[i];
    const b = P[i + 1];
    acc += a.distanceTo(b);
    if (dash && Math.floor(acc / dash) % 2 === 1) continue;
    const fa = frame(P, i).r.multiplyScalar(widthMul);
    const fb = frame(P, i + 1).r.multiplyScalar(widthMul);
    // dos triángulos: a-left, a-right, b-right, a-left, b-right, b-left
    const A = [a.x, a.y + lift, a.z];
    const B = [b.x, b.y + lift, b.z];
    pos.push(...A, ...A, ...B, ...A, ...B, ...B);
    lat.push(-fa.x, 0, -fa.z, fa.x, 0, fa.z, fb.x, 0, fb.z, -fa.x, 0, -fa.z, fb.x, 0, fb.z, -fb.x, 0, -fb.z);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aLat', new THREE.Float32BufferAttribute(lat, 3));
  const mat = new THREE.ShaderMaterial({
    uniforms: { ...MAP_UNIFORMS, uColor: { value: new THREE.Color(rt.color) } },
    vertexShader: MAP_VS,
    fragmentShader: MAP_FS,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const m = new THREE.Mesh(g, mat);
  m.renderOrder = 3;
  m.frustumCulled = false;
  m.name = 'mapline-' + rt.id;
  return m;
}

export { resample };
