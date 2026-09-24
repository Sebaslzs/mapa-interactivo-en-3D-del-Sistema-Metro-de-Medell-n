// Ciudad low-poly: edificios instanciados (centro, El Poblado, barrios de
// ladera en ladrillo y colores), árboles, luces nocturnas, nubes y cielo.

import * as THREE from 'three';
import { urbanFactor, project, riverDistance, unproject } from '../geo.js';
import { mulberry32, smoothstep, clamp } from '../util/rand.js';
import { greenZone } from './terrain.js';
import { ModelBuilder, MAT } from '../util/builder.js';

const COMUNA_BRICK = ['#b5623a', '#c47148', '#a9552f', '#cc7a4f', '#d08a5c', '#b86d45'];
const COMUNA_PAINT = ['#f2c14e', '#f28c8c', '#7cc0e0', '#8fd18a', '#f3efe4', '#e7a1d0', '#f59e42', '#a78bfa'];
const VALLEY = ['#ece6d8', '#d8cbb4', '#c98e6a', '#e0d6c2', '#bfb3a1', '#dcdcd6', '#c4704a', '#f0e9dc'];
const TOWERS = ['#f4f1ea', '#e6e8ea', '#ddd6cb', '#cdd7df', '#f6efe1', '#bcc7cf', '#e9dfcf'];
const INDUS = ['#b8bcc0', '#a3abb1', '#c9ccc4', '#9aa6ad'];

export function buildCity(terrain, network, landmarks, { density = 1 } = {}) {
  const rnd = mulberry32(424242);
  const center = project(6.2502, -75.5684);
  const clearL = landmarks.map((l) => ({ x: l.pos.x, z: l.pos.z, r: l.def.clear || 6 }));
  const nearLandmark = (x, z) => clearL.some((c) => (x - c.x) ** 2 + (z - c.z) ** 2 < c.r * c.r);

  const flat = []; // [x, y, z, w, h, d, rotY, color]
  const houses = [];
  const lights = [];
  const x0 = terrain.x0 + 8;
  const z0 = terrain.z0 + 8;
  const x1 = terrain.x0 + terrain.nx * terrain.cell - 8;
  const z1 = terrain.z0 + terrain.nz * terrain.cell - 8;
  const step = 6.6 / Math.sqrt(density);
  const FP = 1.12; // bloques más grandes para compensar la menor densidad
  for (let z = z0; z < z1; z += step) {
    for (let x = x0; x < x1; x += step) {
      const jx = x + (rnd() - 0.5) * step * 0.7;
      const jz = z + (rnd() - 0.5) * step * 0.7;
      const e = terrain.elevationAt(jx, jz);
      const u = urbanFactor(jx, jz, e) * (1 - greenZone(jx, jz));
      if (u < 0.05 || rnd() > u * 1.05) continue;
      if (network.distToNetwork(jx, jz) < 3.4) continue;
      if (Math.abs(riverDistance(jx, jz)) < 55) continue;
      if (nearLandmark(jx, jz)) continue;
      const y = terrain.heightAt(jx, jz);
      const { lat } = unproject(jx, jz);
      const dC = Math.hypot(jx - center.x, jz - center.z);
      const east = riverDistance(jx, jz) > 0;
      const rot = (rnd() - 0.5) * 0.25 + (rnd() < 0.5 ? 0 : Math.PI / 2);
      const slope = Math.abs(terrain.heightAt(jx + 1.5, jz) - terrain.heightAt(jx - 1.5, jz)) + Math.abs(terrain.heightAt(jx, jz + 1.5) - terrain.heightAt(jx, jz - 1.5));
      let w;
      let d;
      let h;
      let col;
      let kind = 'flat';
      if (dC < 115 && rnd() < 0.8) {
        w = 2.2 + rnd() * 1.2;
        d = 2.2 + rnd() * 1.2;
        h = 1.6 + rnd() * rnd() * 7.5;
        col = rnd() < 0.3 ? VALLEY[Math.floor(rnd() * VALLEY.length)] : TOWERS[Math.floor(rnd() * TOWERS.length)];
      } else if (east && lat > 6.188 && lat < 6.222 && e < 1860 && e > 1512) {
        // El Poblado: torres residenciales altas y claras
        w = 2.0 + rnd() * 1.0;
        d = 2.0 + rnd() * 1.0;
        h = rnd() < 0.55 ? 3.5 + rnd() * 8 : 1.2 + rnd() * 2.5;
        col = TOWERS[Math.floor(rnd() * TOWERS.length)];
      } else if (e < 1548) {
        if (!east && lat > 6.19 && lat < 6.225 && rnd() < 0.5) {
          // Zona industrial (Guayabal)
          w = 3.2 + rnd() * 2;
          d = 2.6 + rnd() * 1.6;
          h = 0.8 + rnd() * 1.2;
          col = INDUS[Math.floor(rnd() * INDUS.length)];
        } else {
          w = 2.0 + rnd() * 1.1;
          d = 2.0 + rnd() * 1.1;
          h = 0.8 + rnd() * rnd() * 3.2;
          col = VALLEY[Math.floor(rnd() * VALLEY.length)];
          if (h < 1.6 && rnd() < 0.45) kind = 'house';
        }
      } else {
        // Barrios de ladera: casas de ladrillo y fachadas de colores
        w = 1.5 + rnd() * 0.9;
        d = 1.5 + rnd() * 0.9;
        h = 0.6 + rnd() * 0.9 + (e < 1700 ? rnd() * 0.6 : 0);
        col = rnd() < 0.62 ? COMUNA_BRICK[Math.floor(rnd() * COMUNA_BRICK.length)] : COMUNA_PAINT[Math.floor(rnd() * COMUNA_PAINT.length)];
        if (rnd() < 0.18) kind = 'house';
      }
      h *= 1.15;
      w *= FP;
      d *= FP;
      const base = y - 0.6 - slope * 0.6;
      const tot = h + (y - base);
      if (kind === 'house') houses.push([jx, base, jz, w, tot, d, rot, col]);
      else flat.push([jx, base, jz, w, tot, d, rot, col]);
      if (rnd() < 0.55) lights.push(jx + (rnd() - 0.5) * w, y + Math.min(h, 2 + rnd() * h) * 0.9, jz + (rnd() - 0.5) * d);
    }
  }

  const group = new THREE.Group();
  group.name = 'city';
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  boxGeo.translate(0, 0.5, 0);
  const mat = new THREE.MeshLambertMaterial({ flatShading: true });
  const makeInst = (list, geo, colorOverride) => {
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3();
    const p = new THREE.Vector3();
    const c = new THREE.Color();
    const up = new THREE.Vector3(0, 1, 0);
    list.forEach((b, i) => {
      p.set(b[0], b[1], b[2]);
      q.setFromAxisAngle(up, b[6]);
      s.set(b[3], b[4], b[5]);
      m.compose(p, q, s);
      im.setMatrixAt(i, m);
      im.setColorAt(i, c.set(colorOverride || b[7]));
    });
    im.castShadow = false;
    im.receiveShadow = true;
    im.instanceMatrix.needsUpdate = true;
    return im;
  };
  if (flat.length) group.add(makeInst(flat, boxGeo));
  if (houses.length) {
    group.add(makeInst(houses, boxGeo));
    // Techos a dos aguas de teja de barro
    const roofShape = new THREE.Shape();
    roofShape.moveTo(-0.55, 0);
    roofShape.lineTo(0.55, 0);
    roofShape.lineTo(0, 0.45);
    roofShape.closePath();
    const rg = new THREE.ExtrudeGeometry(roofShape, { depth: 1.08, bevelEnabled: false });
    rg.translate(0, 0, -0.54);
    const roofs = houses.map((h) => [h[0], h[1] + h[4], h[2], h[3], Math.min(h[3], h[5]) * 0.9, h[5], h[6], '#a8452d']);
    const roofMesh = new THREE.InstancedMesh(rg, mat, roofs.length);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const c = new THREE.Color();
    roofs.forEach((r, i) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r[6]);
      m.compose(new THREE.Vector3(r[0], r[1], r[2]), q, new THREE.Vector3(r[3], r[4], r[5]));
      roofMesh.setMatrixAt(i, m);
      roofMesh.setColorAt(i, c.set(i % 5 === 0 ? '#8f3a26' : '#b24f32'));
    });
    roofMesh.castShadow = false;
    roofMesh.receiveShadow = true;
    group.add(roofMesh);
  }

  // ---------- Árboles ----------
  const round = [];
  const pines = [];
  const tstep = 9.5;
  for (let z = z0; z < z1; z += tstep) {
    for (let x = x0; x < x1; x += tstep) {
      const jx = x + (rnd() - 0.5) * tstep;
      const jz = z + (rnd() - 0.5) * tstep;
      const e = terrain.elevationAt(jx, jz);
      const u = urbanFactor(jx, jz, e) * (1 - greenZone(jx, jz));
      const gz = greenZone(jx, jz);
      const dr = Math.abs(riverDistance(jx, jz));
      let prob = (1 - u) * (0.12 + 0.6 * smoothstep(1650, 2150, e)) + gz * 0.55 + (dr > 35 && dr < 130 ? 0.4 : 0) + u * 0.04;
      if (e > 2750) prob *= 0.4;
      if (rnd() > prob) continue;
      if (network.distToNetwork(jx, jz) < 1.2) continue;
      if (dr < 30) continue;
      if (nearLandmark(jx, jz)) continue;
      const y = terrain.heightAt(jx, jz);
      const s = 1.6 + rnd() * 1.8;
      if (e > 2050 || (e > 1850 && rnd() < 0.5)) pines.push([jx, y - 0.1, jz, s * 1.2]);
      else round.push([jx, y - 0.1, jz, s]);
    }
  }
  const trees = buildTrees(round, pines);
  group.add(trees);

  // ---------- Luces nocturnas ----------
  const lg = new THREE.BufferGeometry();
  lg.setAttribute('position', new THREE.Float32BufferAttribute(lights, 3));
  const lc = [];
  const warm = [new THREE.Color('#ffd27a'), new THREE.Color('#fff1c9'), new THREE.Color('#ffb85c'), new THREE.Color('#cfe6ff')];
  for (let i = 0; i < lights.length / 3; i++) {
    const c = warm[Math.floor(rnd() * warm.length)];
    lc.push(c.r, c.g, c.b);
  }
  lg.setAttribute('color', new THREE.Float32BufferAttribute(lc, 3));
  const lightPts = new THREE.Points(
    lg,
    new THREE.PointsMaterial({ size: 1.6, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }),
  );
  lightPts.visible = false;
  lightPts.name = 'cityLights';
  group.add(lightPts);

  return { group, lightPts, count: flat.length + houses.length, trees: round.length + pines.length };
}

function buildTrees(round, pines) {
  const g = new THREE.Group();
  const up = new THREE.Vector3(0, 1, 0);
  const mk = (list, geo, colors) => {
    const im = new THREE.InstancedMesh(geo, MAT.solid, list.length);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const c = new THREE.Color();
    const rnd = mulberry32(list.length + 7);
    list.forEach((t, i) => {
      q.setFromAxisAngle(up, rnd() * Math.PI * 2);
      m.compose(new THREE.Vector3(t[0], t[1], t[2]), q, new THREE.Vector3(t[3], t[3] * (0.85 + rnd() * 0.4), t[3]));
      im.setMatrixAt(i, m);
      im.setColorAt(i, c.set(colors[Math.floor(rnd() * colors.length)]));
    });
    im.castShadow = false;
    im.receiveShadow = true;
    return im;
  };
  const rb = new ModelBuilder();
  rb.add(new THREE.CylinderGeometry(0.07, 0.1, 0.6, 3, 1, true), '#7a5a3a', { p: [0, 0.3, 0] });
  rb.sphere(0.55, 0, '#ffffff', { p: [0, 1.0, 0] });
  const pb = new ModelBuilder();
  pb.add(new THREE.CylinderGeometry(0.07, 0.09, 0.5, 3, 1, true), '#7a5a3a', { p: [0, 0.25, 0] });
  pb.cone(0.5, 1.5, 5, '#ffffff', { p: [0, 1.15, 0] });
  if (round.length) g.add(mk(round, rb.geometry(), ['#5dae45', '#4f9d3a', '#6bbd4f', '#3f8a33', '#7cc35a', '#e07bb0', '#f2c14e']));
  if (pines.length) g.add(mk(pines, pb.geometry(), ['#2f6b35', '#3a7d3c', '#285e2f', '#35743a']));
  return g;
}

// ---------- Cielo con degradado (día / noche) ----------
export function buildSky() {
  const geo = new THREE.SphereGeometry(9000, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new THREE.Color('#3f9be0') },
      horizon: { value: new THREE.Color('#d6eefc') },
      bottom: { value: new THREE.Color('#e9f5ee') },
    },
    vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      #include <logdepthbuf_vertex>
    }`.replace('#include <logdepthbuf_vertex>', ''),
    fragmentShader: `uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(clamp(h*1.6,0.0,1.0), 0.7)) : mix(horizon, bottom, clamp(-h*3.0,0.0,1.0));
      gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(geo, mat);
  sky.frustumCulled = false;
  sky.renderOrder = -10;
  // Estrellas
  const sp = [];
  const r = mulberry32(99);
  for (let i = 0; i < 1500; i++) {
    const th = r() * Math.PI * 2;
    const ph = Math.acos(r() * 0.95);
    sp.push(Math.sin(ph) * Math.cos(th) * 8000, Math.cos(ph) * 8000, Math.sin(ph) * Math.sin(th) * 8000);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: '#ffffff', size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false, fog: false }));
  stars.frustumCulled = false;
  return { sky, stars };
}

// ---------- Nubes ----------
export function buildClouds(bounds) {
  const g = new THREE.Group();
  const rnd = mulberry32(555);
  const clouds = [];
  const mat = new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true, transparent: true, opacity: 0.92 });
  for (let i = 0; i < 16; i++) {
    const b = new ModelBuilder();
    const n = 4 + Math.floor(rnd() * 4);
    for (let k = 0; k < n; k++) {
      b.sphere(10 + rnd() * 12, 0, '#ffffff', { p: [k * 12 - n * 6, rnd() * 5, (rnd() - 0.5) * 14], s: [1.3, 0.7, 1] });
    }
    const m = new THREE.Mesh(b.geometry(), mat);
    m.castShadow = true;
    m.position.set(bounds.x0 + rnd() * (bounds.x1 - bounds.x0), 290 + rnd() * 70, bounds.z0 + rnd() * (bounds.z1 - bounds.z0));
    m.userData.v = 3 + rnd() * 4;
    g.add(m);
    clouds.push(m);
  }
  const update = (dt) => {
    for (const c of clouds) {
      c.position.x += c.userData.v * dt;
      if (c.position.x > bounds.x1 + 200) c.position.x = bounds.x0 - 200;
    }
  };
  return { group: g, update, mat };
}

export { clamp };
