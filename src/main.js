// Metro de Medellín 3D: punto de entrada de la aplicación.

import * as THREE from 'three';
import { MapControls } from 'three/addons/controls/MapControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

import { initMaterials, MAT, ModelBuilder, mergeGroups } from './util/builder.js';
import { Terrain } from './world/terrain.js';
import { Network } from './world/network.js';
import { buildLineInfra, buildFeederInfra, buildRiver, buildMapLine, MAP_UNIFORMS } from './world/infra.js';
import { buildCity, buildSky, buildClouds } from './world/city.js';
import { metroStation, tramStop, busStation, paradero, lrtStop, cableStation } from './models/stations.js';
import { buildLandmark } from './models/landmarks.js';
import { makePerson, animatePerson, randomStyle, AVATARS } from './models/people.js';
import { makePlane } from './models/vehicles.js';
import { LANDMARKS } from './data/landmarks.js';
import { poiInfo, POI_CATS } from './data/pois.js';
import { LINE_BY_ID } from './data/lines.js';
import { Traffic } from './sim/traffic.js';
import { Particles } from './sim/particles.js';
import { CameraDirector } from './sim/camera.js';
import { Router } from './sim/router.js';
import { Journey } from './sim/journey.js';
import { UI } from './ui/ui.js';
import { Map2D } from './world/map2d.js';
import { project } from './geo.js';
import { mulberry32 } from './util/rand.js';
import { SHADOW_SIZE } from './config.js';

const nextFrame = () => new Promise((r) => setTimeout(r, 16));

const DAY = {
  hemiSky: new THREE.Color('#d2ebff'), hemiGround: new THREE.Color('#7d9a55'), hemi: 1.25,
  sun: 2.7, sunColor: new THREE.Color('#fff0d6'),
  top: new THREE.Color('#3f9be0'), horizon: new THREE.Color('#d6eefc'), bottom: new THREE.Color('#eaf5ee'),
  cloud: new THREE.Color('#ffffff'), exposure: 1.0,
};
const NIGHT = {
  hemiSky: new THREE.Color('#44569a'), hemiGround: new THREE.Color('#1b2233'), hemi: 0.42,
  sun: 0.45, sunColor: new THREE.Color('#a9b9ff'),
  top: new THREE.Color('#070b24'), horizon: new THREE.Color('#2b2d5c'), bottom: new THREE.Color('#15172b'),
  cloud: new THREE.Color('#6a7299'), exposure: 1.15,
};

class App {
  constructor() {
    this.loadingEl = document.getElementById('loading');
    this.stepEl = document.getElementById('load-step');
    this.barEl = document.getElementById('load-bar');
    this.visibleLines = new Set(Object.keys(LINE_BY_ID));
    this.layers = { feeders: true, landmarks: true, labels: true, people: true };
    this.night = false;
    this.nightT = 0;
    this.stationGroups = {};
    this.labels = [];
    this.pickables = [];
    this.people = [];
    this.anims = [];
    this.poiPins = [];
  }

  progress(text, pct) {
    if (this.stepEl) this.stepEl.textContent = text;
    if (this.barEl) this.barEl.style.width = pct + '%';
  }

  async init() {
    this.progress('Preparando el motor 3D…', 4);
    await nextFrame();
    const host = document.getElementById('scene');
    const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    const W0 = window.innerWidth || 1280;
    const H0 = window.innerHeight || 720;
    renderer.setSize(W0, H0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    host.appendChild(renderer.domElement);
    this.renderer = renderer;

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(W0, H0);
    labelRenderer.domElement.className = 'labels-layer';
    host.appendChild(labelRenderer.domElement);
    this.labelRenderer = labelRenderer;

    const scene = new THREE.Scene();
    this.scene = scene;
    const camera = new THREE.PerspectiveCamera(45, W0 / H0, 0.3, 20000);
    this.camera = camera;
    initMaterials();

    // Luces
    this.hemi = new THREE.HemisphereLight(DAY.hemiSky, DAY.hemiGround, DAY.hemi);
    scene.add(this.hemi);
    const sun = new THREE.DirectionalLight(DAY.sunColor, DAY.sun);
    sun.castShadow = true;
    sun.shadow.mapSize.set(SHADOW_SIZE, SHADOW_SIZE);
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.25;
    sun.shadow.camera.near = 10;
    sun.shadow.camera.far = 3000;
    scene.add(sun, sun.target);
    this.sun = sun;
    this.sunOffset = new THREE.Vector3(420, 700, 260);

    const { sky, stars } = buildSky();
    scene.add(sky, stars);
    this.sky = sky;
    this.stars = stars;
    scene.fog = new THREE.Fog(DAY.horizon.clone(), 1600, 6500);

    // Relieve
    this.progress('Modelando el relieve del Valle de Aburrá…', 10);
    await nextFrame();
    const terrain = new Terrain();
    terrain.buildCore({ x0: -1010, x1: 1160, z0: -1260, z1: 1260 }, 8);
    this.progress('Levantando las montañas lejanas…', 22);
    await nextFrame();
    terrain.buildRing({ x0: -4300, x1: 4500, z0: -4700, z1: 4700 }, 60);
    scene.add(terrain.group);
    this.terrain = terrain;

    // Red
    this.progress('Trazando las 13 líneas del sistema…', 30);
    await nextFrame();
    const network = new Network(terrain).build();
    this.network = network;
    this.router = new Router(network);

    this.progress('Construyendo viaductos, rieles y cables…', 38);
    await nextFrame();
    this.infra = {};
    for (const rt of Object.values(network.lines)) {
      const g = buildLineInfra(rt, terrain);
      const wm = rt.mode === 'metro' ? 1.25 : rt.mode === 'bus' ? 0.7 : rt.mode === 'cable' ? 0.85 : 0.9;
      g.add(buildMapLine(rt, wm, rt.def.construction ? 6 : 0));
      scene.add(g);
      this.infra[rt.id] = g;
    }
    this.feederGroup = new THREE.Group();
    for (const f of network.feeders) this.feederGroup.add(buildFeederInfra(f, terrain));
    scene.add(this.feederGroup);
    const river = buildRiver(terrain);
    scene.add(river.mesh);
    this.riverPath = river.path;

    this.progress('Levantando estaciones…', 46);
    await nextFrame();
    this.buildStations();

    this.progress('Ubicando lugares emblemáticos…', 52);
    await nextFrame();
    this.landmarks = LANDMARKS.map((def) => {
      const lm = buildLandmark(def, terrain);
      lm.def = def;
      scene.add(lm.group);
      if (lm.anim) this.anims.push(lm.anim);
      return lm;
    });

    this.progress('Construyendo la ciudad…', 58);
    await nextFrame();
    const city = buildCity(terrain, network, this.landmarks, { density: 1 });
    scene.add(city.group);
    this.city = city;

    this.progress('Sembrando nubes…', 74);
    await nextFrame();
    this.clouds = buildClouds({ x0: -1600, x1: 1800, z0: -1800, z1: 1800 });
    scene.add(this.clouds.group);

    this.progress('Poniendo a rodar trenes, tranvías, buses y telecabinas…', 80);
    await nextFrame();
    this.particles = new Particles(5000);
    scene.add(this.particles.points);
    this.traffic = new Traffic(scene, network, this.particles);
    this.traffic.build();
    this.buildPlane();

    // Controles y cámara
    const controls = new MapControls(camera, labelRenderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = 1.42;
    controls.minDistance = 3;
    controls.maxDistance = 4200;
    controls.zoomToCursor = true;
    controls.zoomSpeed = 1.2;
    this.controls = controls;
    this.director = new CameraDirector(camera, controls);
    this.journey = new Journey(this);
    this.map2d = new Map2D(this);

    this.progress('Invitando a los usuarios del Metro…', 88);
    await nextFrame();
    this.ui = new UI(this);
    this.buildLabels();
    this.buildPeople();
    this.buildPins();
    this.progress('Retratando a los viajeros…', 94);
    await nextFrame();
    this.ui.setPortraits(this.renderPortraits());

    this.bindEvents();
    // Vista inicial: vuelo de entrada al valle
    controls.target.set(40, 20, 60);
    camera.position.set(-900, 3200, 3600);
    this.progress('¡Listo!', 100);
    await nextFrame();
    this.loadingEl.classList.add('done');
    setTimeout(() => this.loadingEl.remove(), 900);
    // Reloj simple (THREE.Clock está obsoleto en r186)
    this.clock = {
      last: performance.now(),
      elapsedTime: 0,
      getDelta() {
        const now = performance.now();
        const d = (now - this.last) / 1000;
        this.last = now;
        this.elapsedTime += d;
        return d;
      },
    };
    renderer.setAnimationLoop(() => this.loop());
    this.overview(3.2);
    window.__app = this;
  }

  // ------------------------------------------------------------ estaciones
  buildStations() {
    const net = this.network;
    const T = this.terrain;
    const proxyMat = new THREE.MeshBasicMaterial({ visible: false });
    const proxyGeo = new THREE.SphereGeometry(1, 8, 6);
    for (const rt of Object.values(net.lines)) {
      const list = [];
      rt.stops.forEach((stop, i) => {
        const cx = net.complexes[stop.key];
        let g;
        if (rt.mode === 'metro') {
          const others = cx.lines.filter((l) => l !== rt.id).map((l) => LINE_BY_ID[l].color);
          g = metroStation(rt, stop, T, others);
        } else if (rt.mode === 'tram') g = tramStop(rt, stop);
        else if (rt.mode === 'bus') g = rt.id === 'O' ? paradero(rt, stop) : busStation(rt, stop);
        else if (rt.mode === 'lrt') g = lrtStop(rt, stop, ['caribe', 'aguacatala'].includes(stop.key));
        else if (rt.mode === 'cable') g = cableStation(rt, stop, i, rt.stops.length, T);
        if (!g) return;
        list.push(g);
        // Proxy de selección (más grande que el modelo para facilitar el clic)
        const pr = new THREE.Mesh(proxyGeo, proxyMat);
        const r = rt.mode === 'metro' ? 6 : rt.mode === 'cable' ? 4.5 : 3.2;
        pr.scale.setScalar(r);
        pr.position.copy(stop.pos);
        pr.position.y += rt.mode === 'metro' ? 0.8 : rt.mode === 'cable' ? -0.4 : 0.8;
        pr.userData = { type: 'station', key: stop.key, line: rt.id };
        this.scene.add(pr);
        this.pickables.push(pr);
      });
      const merged = mergeGroups(list);
      merged.name = 'stations-' + rt.id;
      this.scene.add(merged);
      this.stationGroups[rt.id] = [merged];
    }
  }

  buildLabels() {
    for (const cx of Object.values(this.network.complexes)) {
      const el = this.ui.makeStationLabel(cx);
      const obj = new CSS2DObject(el);
      obj.position.copy(cx.pos);
      obj.position.y += cx.primaryMode === 'metro' ? 3.4 : cx.primaryMode === 'cable' ? 2.2 : 2.4;
      obj.center.set(0.5, 1);
      this.scene.add(obj);
      const tier = cx.lines.length > 1 || cx.primaryMode === 'metro' ? 1 : cx.primaryMode === 'cable' ? 2 : 3;
      this.labels.push({ obj, el, cx, tier, kind: 'station' });
    }
    for (const lm of this.landmarks) {
      const el = this.ui.makeLandmarkLabel(lm.def);
      const obj = new CSS2DObject(el);
      obj.position.copy(lm.pos);
      obj.position.y += lm.top + 1.5;
      obj.center.set(0.5, 1);
      this.scene.add(obj);
      this.labels.push({ obj, el, lm, tier: 0, kind: 'landmark' });
      const pr = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
      const r = Math.max(6, Math.min(24, (lm.def.clear || 8) * 0.9));
      pr.scale.setScalar(r);
      pr.position.copy(lm.pos);
      pr.position.y += lm.top * 0.4;
      pr.userData = { type: 'landmark', id: lm.def.id };
      this.scene.add(pr);
      this.pickables.push(pr);
      lm.proxy = pr;
    }
  }

  buildPeople() {
    const rnd = mulberry32(2024);
    const net = this.network;
    const T = this.terrain;
    const spots = [];
    for (const cx of Object.values(net.complexes)) {
      if (cx.construction) continue;
      const n = cx.lines.length > 1 ? 5 : cx.primaryMode === 'metro' ? 3 : cx.primaryMode === 'cable' ? 2 : 1;
      for (let i = 0; i < n; i++) spots.push(cx.pos);
    }
    for (const lm of this.landmarks) for (let i = 0; i < 5; i++) spots.push(lm.pos);
    for (const base of spots) {
      const p = makePerson(randomStyle(Math.floor(rnd() * 1e9)));
      const a = rnd() * Math.PI * 2;
      const r = 4 + rnd() * 5;
      const x = base.x + Math.cos(a) * r;
      const z = base.z + Math.sin(a) * r;
      p.position.set(x, T.heightAt(x, z), z);
      p.rotation.y = rnd() * Math.PI * 2;
      const walker = rnd() < 0.5;
      const b = walker ? { x: x + (rnd() - 0.5) * 8, z: z + (rnd() - 0.5) * 8 } : null;
      this.scene.add(p);
      this.people.push({ p, walker, a: { x, z }, b, t: rnd() * 10, home: base });
    }
  }

  buildPins() {
    const mk = (color, letter) => {
      const b = new ModelBuilder();
      b.cone(0.9, 2.2, 10, color, { p: [0, 1.1, 0], r: [Math.PI, 0, 0] });
      b.sphere(1.25, 1, color, { p: [0, 2.9, 0] });
      b.sphere(0.55, 1, '#ffffff', { p: [0, 2.95, 0.72], layer: 'glow' });
      const g = b.build();
      g.visible = false;
      g.scale.setScalar(0.75);
      this.scene.add(g);
      const el = document.createElement('div');
      el.className = 'pin-label';
      el.style.background = color;
      el.textContent = letter;
      const o = new CSS2DObject(el);
      o.position.set(0, 4.6, 0);
      g.add(o);
      return g;
    };
    this.pinFrom = mk('#6DB843', 'Origen');
    this.pinTo = mk('#E6007E', 'Destino');
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(5, 0.35, 6, 32),
      new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.85, toneMapped: false }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.visible = false;
    this.scene.add(ring);
    this.ring = ring;
  }

  setEndpoints(from, to) {
    const place = (pin, key) => {
      if (!key) return (pin.visible = false);
      const cx = this.network.complexes[key];
      pin.visible = true;
      pin.position.copy(cx.pos);
      pin.position.y += cx.primaryMode === 'cable' ? 2 : 3.5;
      pin.userData.baseY = pin.position.y;
      pin.children.forEach((c) => c.isCSS2DObject && (c.visible = true));
    };
    place(this.pinFrom, from);
    place(this.pinTo, to);
    [this.pinFrom, this.pinTo].forEach((p) => p.traverse((o) => o.isCSS2DObject && (o.visible = p.visible)));
  }

  highlight(key) {
    if (!key) return (this.ring.visible = false);
    const cx = this.network.complexes[key];
    this.ring.visible = true;
    this.ring.position.copy(cx.pos);
    this.ring.position.y = this.terrain.heightAt(cx.pos.x, cx.pos.z) + 0.4;
    this.ring.userData.t = 0;
  }

  setRouteFocus(route) {
    const keys = route ? new Set(route.legs.flatMap((l) => l.all.map((i) => this.network.lines[l.line].stops[i].key))) : null;
    this.routeKeys = keys;
    for (const L of this.labels.concat(this.map2d.labels)) {
      if (L.kind !== 'station') continue;
      L.el.classList.toggle('on-route', !!keys && keys.has(L.cx.key));
    }
  }

  // ------------------------------------------------------------ modo mapa 2D
  activeScene() {
    return this.map2d && this.map2d.active ? this.map2d.scene : this.scene;
  }
  // Proyecta un punto del mundo 3D a la vista activa (en 2D queda sobre el plano)
  toView(v, lift = 1.5) {
    if (this.map2d && this.map2d.active) v.y = lift;
    return v;
  }

  async setMap2D(on) {
    if (!!on === !!this.map2d.active) return this.map2d.active;
    if (on && !this.map2d.built) {
      this.ui.toast('Dibujando el mapa 2D…', 1500);
      await nextFrame();
      this.map2d.build();
      for (const id of Object.keys(LINE_BY_ID)) this.map2d.setLineVisible(id, this.visibleLines.has(id));
      this.map2d.feederGroup.visible = this.layers.feeders;
    }
    this.ui.closeCard();
    this.clearPoiPins();
    // Ocultar las etiquetas HTML de la escena que deja de dibujarse
    const old = on ? this.scene : this.map2d.scene;
    old.traverse((o) => o.isCSS2DObject && (o.element.style.display = 'none'));
    this.map2d.active = on;
    this.director.flatY = on ? 0 : null;
    const tg = this.controls.target;
    const cam = this.camera;
    const off = cam.position.clone().sub(tg);
    const newY = on ? 0 : this.terrain.heightAt(tg.x, tg.z);
    tg.y = newY;
    cam.position.copy(tg).add(off);
    this.controls.maxPolarAngle = on ? 1.18 : 1.42;
    if (!this.journey.active || this.journey.finished) {
      const d = Math.min(off.length(), 1600);
      await this.director.flyTo(tg.clone(), this.director.viewOf(tg, d, on ? 0.95 : 0.75), 1.1, { lift: 0 });
    }
    return on;
  }

  // ------------------------------------------------------------ sitios de interés
  poiLocation(name) {
    const info = poiInfo(name);
    if (info.lm) {
      const lm = this.landmarks.find((l) => l.def.id === info.lm);
      if (lm) return { kind: 'lm', pos: lm.pos.clone().setY(lm.pos.y + lm.top), lm };
    }
    if (info.lat) {
      const p = project(info.lat, info.lon);
      return { kind: 'coord', pos: new THREE.Vector3(p.x, this.terrain.heightAt(p.x, p.z), p.z) };
    }
    return null;
  }

  clearPoiPins() {
    for (const pin of this.poiPins) {
      pin.group.parent?.remove(pin.group);
      pin.label.element.remove();
      const i = this.pickables.indexOf(pin.proxy);
      if (i >= 0) this.pickables.splice(i, 1);
    }
    this.poiPins = [];
    this.poiPinStation = null;
  }

  // Pines de los sitios de interés de una estación (solo los que no tienen modelo 3D propio)
  showPoiPins(key) {
    if (this.poiPinStation === key) return;
    this.clearPoiPins();
    const cx = this.network.complexes[key];
    if (!cx) return;
    this.poiPinStation = key;
    for (const name of cx.info.pois || []) {
      const loc = this.poiLocation(name);
      if (!loc || loc.kind !== 'coord') continue;
      const color = POI_CATS[poiInfo(name).cat].color;
      const b = new ModelBuilder();
      b.cyl(0.08, 0.08, 2.2, 5, '#ffffff', { p: [0, 1.1, 0] });
      b.cone(0.55, 1.1, 8, color, { p: [0, 2.6, 0], r: [Math.PI, 0, 0] });
      b.sphere(0.7, 1, color, { p: [0, 3.35, 0] });
      b.sphere(0.3, 0, '#ffffff', { p: [0, 3.4, 0.45], layer: 'glow' });
      const group = b.build();
      group.position.copy(this.toView(loc.pos.clone(), 0));
      if (this.map2d.active) group.scale.setScalar(2.2);
      this.activeScene().add(group);
      const el = document.createElement('div');
      el.className = 'poi-label';
      el.innerHTML = `<i style="background:${color}"></i>${name}`;
      el.addEventListener('click', () => this.focusPoi(name, key));
      const label = new CSS2DObject(el);
      label.position.set(0, 4.6, 0);
      label.center.set(0.5, 1);
      group.add(label);
      const proxy = new THREE.Mesh(new THREE.SphereGeometry(2, 6, 4), new THREE.MeshBasicMaterial({ visible: false }));
      proxy.userData = { type: 'poi', name, station: key };
      proxy.position.set(0, 2.5, 0);
      group.add(proxy);
      this.pickables.push(proxy);
      this.poiPins.push({ name, group, label, proxy, base: group.position.y });
    }
  }

  selectPoiPin(name) {
    for (const pin of this.poiPins) {
      const on = pin.name === name;
      pin.group.scale.setScalar((on ? 1.5 : 1) * (this.map2d.active ? 2.2 : 1));
      pin.label.element.classList.toggle('on', on);
    }
  }

  async focusPoi(name, stationKey) {
    const cx = this.network.complexes[stationKey];
    if (!cx) return;
    this.showPoiPins(stationKey);
    const loc = this.poiLocation(name);
    this.ui.showPoi(name, stationKey, loc);
    if (this.journey.active && !this.journey.finished) return;
    let tgt;
    let dist;
    if (loc && loc.kind === 'lm') {
      tgt = loc.lm.pos.clone();
      tgt.y += loc.lm.top * 0.35;
      dist = Math.max(45, (loc.lm.def.clear || 8) * 3.2 + loc.lm.top * 2);
    } else if (loc) {
      // Encuadra el sitio y su estación juntos
      tgt = loc.pos.clone().lerp(cx.pos, 0.35);
      dist = Math.min(900, Math.max(60, loc.pos.distanceTo(cx.pos) * 1.4));
    } else {
      tgt = cx.pos.clone();
      dist = 55;
    }
    await this.director.flyTo(tgt, this.director.viewOf(tgt, dist, 0.62), 1.6);
  }

  landmarksNear(pos, r) {
    return this.landmarks.filter((l) => Math.hypot(l.pos.x - pos.x, l.pos.z - pos.z) < r);
  }

  buildPlane() {
    const plane = makePlane();
    const c = project(6.2197, -75.5905);
    const gy = this.terrain.heightAt(c.x, c.z);
    this.scene.add(plane);
    plane.traverse((o) => (o.castShadow = true));
    this.anims.push((t) => {
      const a = t * 0.12;
      const R = 170;
      plane.position.set(c.x + Math.cos(a) * R, gy + 95 + Math.sin(t * 0.3) * 12, c.z + Math.sin(a) * R * 1.3);
      const dx = -Math.sin(a) * R;
      const dz = Math.cos(a) * R * 1.3;
      plane.rotation.set(0, Math.atan2(-dz, dx), 0);
      plane.rotateX(-0.28);
    });
  }

  // ------------------------------------------------------------ retratos
  renderPortraits() {
    const out = {};
    try {
      const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
      r.setSize(128, 128);
      r.setPixelRatio(1);
      r.outputColorSpace = THREE.SRGBColorSpace;
      const sc = new THREE.Scene();
      sc.add(new THREE.HemisphereLight('#ffffff', '#888888', 2.2));
      const dl = new THREE.DirectionalLight('#ffffff', 2);
      dl.position.set(3, 4, 5);
      sc.add(dl);
      const cam = new THREE.PerspectiveCamera(30, 1, 0.01, 50);
      for (const [k, st] of Object.entries(AVATARS)) {
        const p = makePerson(st);
        p.scale.setScalar(1);
        p.rotation.y = -Math.PI / 2 + 0.5;
        sc.add(p);
        cam.position.set(0.9, 1.55, 3.0);
        cam.lookAt(0, 1.25, 0);
        r.render(sc, cam);
        out[k] = r.domElement.toDataURL('image/png');
        sc.remove(p);
      }
      r.dispose();
      r.forceContextLoss();
    } catch (e) {
      console.warn('No se pudieron generar retratos', e);
    }
    return out;
  }

  // ------------------------------------------------------------ interacción
  bindEvents() {
    const dom = this.labelRenderer.domElement;
    const ray = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    let down = null;
    const pick = (e) => {
      const rect = dom.getBoundingClientRect();
      ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
      ray.setFromCamera(ndc, this.camera);
      const src = this.map2d.active ? this.map2d.pickables.concat(this.poiPins.map((q) => q.proxy)) : this.pickables;
      const list = src.filter((p) => this.isPickable(p));
      const hits = ray.intersectObjects(list, false);
      return hits[0]?.object;
    };
    dom.addEventListener('pointerdown', (e) => (down = { x: e.clientX, y: e.clientY, t: performance.now() }));
    dom.addEventListener('pointerup', (e) => {
      if (!down) return;
      const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
      const dt = performance.now() - down.t;
      down = null;
      if (moved > 6 || dt > 600 || e.button !== 0) return;
      const o = pick(e);
      if (!o) return this.ui.closeCard();
      if (o.userData.type === 'station') this.focusStation(o.userData.key);
      else if (o.userData.type === 'landmark') this.focusLandmark(o.userData.id);
      else if (o.userData.type === 'poi') this.focusPoi(o.userData.name, o.userData.station);
    });
    let hoverT = 0;
    dom.addEventListener('pointermove', (e) => {
      const now = performance.now();
      if (now - hoverT < 50 || e.buttons) return;
      hoverT = now;
      const o = pick(e);
      if (!o) {
        dom.style.cursor = '';
        return this.ui.tooltip(null);
      }
      dom.style.cursor = 'pointer';
      if (o.userData.type === 'station') {
        const cx = this.network.complexes[o.userData.key];
        this.ui.tooltip(`<b>${cx.name}</b><span>${cx.lines.map((l) => LINE_BY_ID[l].name).join(' · ')}</span>`, e.clientX, e.clientY);
      } else if (o.userData.type === 'poi') {
        this.ui.tooltip(`<b>${o.userData.name}</b><span>${POI_CATS[poiInfo(o.userData.name).cat].label}</span>`, e.clientX, e.clientY);
      } else {
        const lm = this.landmarks.find((l) => l.def.id === o.userData.id);
        this.ui.tooltip(`<b>★ ${lm.def.name}</b><span>${lm.def.category}</span>`, e.clientX, e.clientY);
      }
    });
    dom.addEventListener('pointerleave', () => this.ui.tooltip(null));
    window.addEventListener('resize', () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (!w || !h) return;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
      this.labelRenderer.setSize(w, h);
    });
  }

  isPickable(p) {
    const u = p.userData;
    if (u.type === 'poi') return true;
    if (u.type === 'landmark') return this.layers.landmarks;
    const cx = this.network.complexes[u.key];
    if (!u.line) return cx.lines.some((l) => this.visibleLines.has(l));
    return cx.lines.some((l) => this.visibleLines.has(l)) && this.visibleLines.has(u.line);
  }

  async focusStation(key) {
    const cx = this.network.complexes[key];
    if (!cx) return;
    this.ui.closeCard();
    if (this.journey.active && !this.journey.finished) {
      this.ui.showStation(key);
      return;
    }
    const tgt = cx.pos.clone();
    const view = this.director.viewOf(tgt, cx.primaryMode === 'metro' ? 55 : 42, 0.62);
    this.ui.showStation(key);
    await this.director.flyTo(tgt, view, 1.6);
  }

  async focusLandmark(id) {
    const lm = this.landmarks.find((l) => l.def.id === id);
    if (!lm) return;
    const tgt = lm.pos.clone();
    tgt.y += lm.top * 0.35;
    const dist = Math.max(45, (lm.def.clear || 8) * 3.2 + lm.top * 2);
    this.ui.showLandmark(id);
    if (this.journey.active && !this.journey.finished) return;
    await this.director.flyTo(tgt, this.director.viewOf(tgt, dist, 0.5), 1.8);
  }

  overview(dur = 2.2) {
    this.ui?.closeCard();
    const tgt = new THREE.Vector3(40, 20, 60);
    const pos = new THREE.Vector3(-360, 1750, 1500);
    return this.director.flyTo(tgt, pos, dur, { lift: 0 });
  }

  faceNorth() {
    const tgt = this.controls.target.clone();
    const off = this.camera.position.clone().sub(tgt);
    const d = off.length();
    const pitch = Math.asin(off.y / d);
    this.director.flyTo(tgt, this.director.viewOf(tgt, d, pitch, 0), 1, { lift: 0 });
  }

  startJourney(route, avatar) {
    this.ui.closeModal();
    this.director.cinematic = true;
    document.getElementById('hud-cam')?.classList.add('on');
    this.journey.start(route, avatar);
  }
  endJourney() {
    this.journey.finish();
    this.ui.journeyEnded(true);
  }

  // ------------------------------------------------------------ visibilidad
  setLineVisible(id, v) {
    if (v) this.visibleLines.add(id);
    else this.visibleLines.delete(id);
    if (this.infra[id]) this.infra[id].visible = v;
    for (const g of this.stationGroups[id] || []) g.visible = v;
    this.traffic.setLineVisible(id, v);
    if (this.map2d.built) this.map2d.setLineVisible(id, v);
  }
  setLayer(name, v) {
    this.layers[name] = v;
    if (name === 'feeders') {
      this.feederGroup.visible = v;
      this.traffic.setFeedersVisible(v);
      if (this.map2d.built) this.map2d.feederGroup.visible = v;
    } else if (name === 'landmarks') {
      for (const lm of this.landmarks) lm.group.visible = v;
    } else if (name === 'people') {
      for (const o of this.people) o.p.visible = v;
    }
  }

  toggleNight() {
    this.night = !this.night;
    return this.night;
  }

  applyNight(t) {
    const L = (a, b) => a.clone().lerp(b, t);
    this.hemi.color.copy(L(DAY.hemiSky, NIGHT.hemiSky));
    this.hemi.groundColor.copy(L(DAY.hemiGround, NIGHT.hemiGround));
    this.hemi.intensity = DAY.hemi + (NIGHT.hemi - DAY.hemi) * t;
    this.sun.intensity = DAY.sun + (NIGHT.sun - DAY.sun) * t;
    this.sun.color.copy(L(DAY.sunColor, NIGHT.sunColor));
    const u = this.sky.material.uniforms;
    u.top.value.copy(L(DAY.top, NIGHT.top));
    u.horizon.value.copy(L(DAY.horizon, NIGHT.horizon));
    u.bottom.value.copy(L(DAY.bottom, NIGHT.bottom));
    this.scene.fog.color.copy(u.horizon.value);
    this.clouds.mat.color.copy(L(DAY.cloud, NIGHT.cloud));
    this.renderer.toneMappingExposure = DAY.exposure + (NIGHT.exposure - DAY.exposure) * t;
    this.stars.material.opacity = Math.max(0, t * 1.2 - 0.2);
    this.city.lightPts.visible = t > 0.15;
    this.city.lightPts.material.opacity = Math.min(1, t * 1.3);
    document.body.classList.toggle('night', t > 0.5);
  }

  // ------------------------------------------------------------ ciclo
  loop() {
    const rawDt = this.clock.getDelta();
    const dt = Math.min(0.05, rawDt);
    const t = this.clock.elapsedTime;
    this.fps = (this.fps || 30) * 0.95 + (1 / Math.max(rawDt, 1e-3)) * 0.05;
    const in2D = this.map2d.active;
    this.journey.update(dt);
    if (!in2D) {
      this.traffic.update(dt, t);
      for (const a of this.anims) a(t);
      this.clouds.update(dt);
      this.particles.update(dt);
    }
    this.controls.enabled = !this.director.fly;
    this.director.update(dt);
    this.controls.update(dt);

    // Límites de navegación
    const tg = this.controls.target;
    tg.x = Math.max(-1000, Math.min(1150, tg.x));
    tg.z = Math.max(-1250, Math.min(1250, tg.z));
    const cam = this.camera;
    const gy = in2D ? 0 : this.terrain.heightAt(cam.position.x, cam.position.z);
    if (cam.position.y < gy + 1.5) cam.position.y = gy + 1.5;

    // Día / noche
    const target = this.night ? 1 : 0;
    if (Math.abs(this.nightT - target) > 0.001) {
      this.nightT += Math.sign(target - this.nightT) * Math.min(Math.abs(target - this.nightT), dt * 0.7);
      this.applyNight(this.nightT);
    }

    // Sombra y niebla según la distancia de la cámara
    const dist = cam.position.distanceTo(tg);
    const half = Math.max(45, Math.min(520, dist * 0.75));
    const sc = this.sun.shadow.camera;
    if (Math.abs(sc.right - half) > half * 0.08) {
      sc.left = -half;
      sc.right = half;
      sc.top = half;
      sc.bottom = -half;
      sc.updateProjectionMatrix();
    }
    const snap = half / 256;
    this.sun.target.position.set(Math.round(tg.x / snap) * snap, tg.y, Math.round(tg.z / snap) * snap);
    this.sun.position.copy(this.sun.target.position).add(this.sunOffset);
    MAP_UNIFORMS.uWidth.value = Math.max(1.2, Math.min(9, dist * 0.0045));
    MAP_UNIFORMS.uOpacity.value = Math.max(0, Math.min(0.92, (dist - 260) / 600));
    this.scene.fog.near = dist * 0.9 + 500;
    this.scene.fog.far = dist * 3 + 3500;

    // Anillo de selección
    if (this.ring.visible) {
      this.ring.userData.t = (this.ring.userData.t || 0) + dt;
      const k = (this.ring.userData.t % 1.4) / 1.4;
      this.ring.scale.setScalar(0.6 + k * 1.2);
      this.ring.material.opacity = 0.9 * (1 - k);
    }
    for (const pin of [this.pinFrom, this.pinTo]) {
      if (pin.visible) pin.position.y = pin.userData.baseY + Math.sin(t * 3) * 0.3;
    }

    for (const pin of this.poiPins) pin.group.position.y = pin.base + Math.abs(Math.sin(t * 2.2 + pin.base)) * 0.35;

    // Personas (solo cerca de la cámara)
    const camP = cam.position;
    for (const o of this.people) {
      const near = !in2D && this.layers.people && Math.abs(o.home.x - camP.x) < 260 && Math.abs(o.home.z - camP.z) < 260 && dist < 400;
      o.p.visible = near;
      if (!near) continue;
      o.t += dt;
      if (o.walker) {
        const k = (Math.sin(o.t * 0.35) + 1) / 2;
        const x = o.a.x + (o.b.x - o.a.x) * k;
        const z = o.a.z + (o.b.z - o.a.z) * k;
        const dir = Math.cos(o.t * 0.35) >= 0 ? 1 : -1;
        o.p.position.set(x, this.terrain.heightAt(x, z), z);
        o.p.rotation.y = Math.atan2(-(o.b.z - o.a.z) * dir, (o.b.x - o.a.x) * dir);
        animatePerson(o.p, o.t, true, 0.8);
      } else animatePerson(o.p, o.t, false);
    }

    // Etiquetas por nivel de zoom
    this._lf = (this._lf || 0) + 1;
    if (this._lf % 4 === 0) this.updateLabels(in2D ? this.map2d.labels : this.labels);
    if (in2D) this.map2d.update(dt, t, dist);

    this.ui.updateCard();
    const inJ = this.journey.active && !this.journey.finished;
    if (inJ) {
      this.pinFrom.visible = false;
      this.pinTo.visible = false;
    } else if (this._pinsHidden) this.setEndpoints(this.ui.from, this.ui.to);
    this._pinsHidden = inJ;

    // Brújula
    const off = cam.position.clone().sub(tg);
    this.ui.setCompass(Math.atan2(off.x, off.z));

    const drawScene = in2D ? this.map2d.scene : this.scene;
    this.renderer.render(drawScene, cam);
    this.labelRenderer.render(drawScene, cam);
  }

  updateLabels(list = this.labels) {
    const cam = this.camera.position;
    const tgt = this.controls.target;
    const camDist = cam.distanceTo(tgt);
    for (const L of list) {
      let vis;
      if (L.kind === 'landmark') {
        const d = cam.distanceTo(L.obj.position);
        vis = this.layers.landmarks && d < 3600;
        L.el.classList.toggle('compact', d > 900);
      } else {
        const cx = L.cx;
        const anyLine = cx.lines.some((l) => this.visibleLines.has(l));
        const d = cam.distanceTo(L.obj.position);
        const lim = L.tier === 1 ? 900 : L.tier === 2 ? 520 : 260;
        const onRoute = this.routeKeys && this.routeKeys.has(cx.key);
        vis = this.layers.labels && anyLine && (d < lim || (onRoute && d < 3000));
        if (camDist > 1300 && L.tier > 1 && !onRoute) vis = false;
      }
      L.obj.visible = vis;
    }
  }
}

const app = new App();
app.init().catch((e) => {
  console.error(e);
  const el = document.getElementById('load-step');
  if (el) el.textContent = 'Error al iniciar: ' + e.message;
});

export { MAT };
