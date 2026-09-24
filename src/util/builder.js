// Utilidades para construir modelos low-poly a partir de primitivas.
// Cada pieza se transforma, se pinta con color por vértice y todo se fusiona
// en una sola geometría (una llamada de dibujo por modelo).

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _c = new THREE.Color();

export const MAT = {};

export function initMaterials() {
  MAT.solid = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  MAT.glow = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
  MAT.glass = new THREE.MeshLambertMaterial({
    vertexColors: true,
    flatShading: true,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  });
  return MAT;
}

function prep(geo) {
  let g = geo.index ? geo.toNonIndexed() : geo;
  if (g === geo) g = geo.clone();
  for (const k of Object.keys(g.attributes)) {
    if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
  }
  if (!g.attributes.normal) g.computeVertexNormals();
  return g;
}

function paint(g, color) {
  _c.set(color);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = _c.r;
    arr[i * 3 + 1] = _c.g;
    arr[i * 3 + 2] = _c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
}

export class ModelBuilder {
  constructor() {
    this.parts = { solid: [], glow: [], glass: [] };
  }
  // opts: { p:[x,y,z], r:[x,y,z], s:number|[x,y,z], layer:'solid'|'glow'|'glass', q:Quaternion }
  add(geo, color, opts = {}) {
    const g = prep(geo);
    const p = opts.p || [0, 0, 0];
    _p.set(p[0], p[1], p[2]);
    if (opts.q) _q.copy(opts.q);
    else {
      const r = opts.r || [0, 0, 0];
      _e.set(r[0], r[1], r[2], opts.order || 'XYZ');
      _q.setFromEuler(_e);
    }
    const s = opts.s === undefined ? 1 : opts.s;
    if (typeof s === 'number') _s.set(s, s, s);
    else _s.set(s[0], s[1], s[2]);
    _m.compose(_p, _q, _s);
    g.applyMatrix4(_m);
    paint(g, color);
    this.parts[opts.layer || 'solid'].push(g);
    return this;
  }
  box(w, h, d, color, opts) {
    return this.add(new THREE.BoxGeometry(w, h, d), color, opts);
  }
  cyl(rt, rb, h, seg, color, opts) {
    return this.add(new THREE.CylinderGeometry(rt, rb, h, seg), color, opts);
  }
  sphere(r, detail, color, opts) {
    return this.add(new THREE.IcosahedronGeometry(r, detail), color, opts);
  }
  cone(r, h, seg, color, opts) {
    return this.add(new THREE.ConeGeometry(r, h, seg), color, opts);
  }
  // Prisma triangular (techo a dos aguas) de largo l (eje X), ancho w (Z), alto h.
  roof(l, w, h, color, opts = {}) {
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2, 0);
    shape.lineTo(w / 2, 0);
    shape.lineTo(0, h);
    shape.closePath();
    const g = new THREE.ExtrudeGeometry(shape, { depth: l, bevelEnabled: false });
    g.translate(0, 0, -l / 2);
    g.rotateY(Math.PI / 2);
    return this.add(g, color, opts);
  }
  merge(other, opts = {}) {
    // Fusiona otro builder con una transformación.
    const p = opts.p || [0, 0, 0];
    const r = opts.r || [0, 0, 0];
    const s = opts.s === undefined ? 1 : opts.s;
    _p.set(p[0], p[1], p[2]);
    _q.setFromEuler(_e.set(r[0], r[1], r[2]));
    if (typeof s === 'number') _s.set(s, s, s);
    else _s.set(s[0], s[1], s[2]);
    _m.compose(_p, _q, _s);
    for (const layer of Object.keys(this.parts)) {
      for (const g of other.parts[layer]) {
        const c = g.clone();
        c.applyMatrix4(_m);
        this.parts[layer].push(c);
      }
    }
    return this;
  }
  geometry(layer = 'solid') {
    const list = this.parts[layer];
    if (!list.length) return null;
    const g = mergeGeometries(list, false);
    return g;
  }
  // Devuelve un Group con hasta 3 mallas (sólida, brillante, vidrio).
  build({ castShadow = true, receiveShadow = false } = {}) {
    const group = new THREE.Group();
    const solid = this.geometry('solid');
    if (solid) {
      const m = new THREE.Mesh(solid, MAT.solid);
      m.castShadow = castShadow;
      m.receiveShadow = receiveShadow;
      group.add(m);
    }
    const glow = this.geometry('glow');
    if (glow) group.add(new THREE.Mesh(glow, MAT.glow));
    const glass = this.geometry('glass');
    if (glass) {
      const m = new THREE.Mesh(glass, MAT.glass);
      m.renderOrder = 2;
      group.add(m);
    }
    return group;
  }
}

// Fusiona varios grupos (con sus transformaciones) en una malla por material.
export function mergeGroups(groups, { castShadow = true, receiveShadow = true } = {}) {
  const buckets = new Map();
  for (const g of groups) {
    g.updateMatrixWorld(true);
    g.traverse((o) => {
      if (!o.isMesh || o.isInstancedMesh) return;
      const geo = o.geometry.clone();
      geo.applyMatrix4(o.matrixWorld);
      if (!buckets.has(o.material)) buckets.set(o.material, []);
      buckets.get(o.material).push(geo);
    });
  }
  const out = new THREE.Group();
  for (const [mat, list] of buckets) {
    const m = new THREE.Mesh(mergeGeometries(list, false), mat);
    m.castShadow = castShadow && mat === MAT.solid;
    m.receiveShadow = receiveShadow;
    if (mat === MAT.glass) m.renderOrder = 2;
    out.add(m);
    list.forEach((g) => g.dispose());
  }
  return out;
}

export function colorOf(hex) {
  return new THREE.Color(hex);
}

export function shade(hex, f) {
  // Aclara (f>0) u oscurece (f<0) un color en espacio sRGB.
  const c = new THREE.Color(hex);
  const hsl = {};
  c.getHSL(hsl);
  c.setHSL(hsl.h, hsl.s, THREE.MathUtils.clamp(hsl.l + f, 0, 1));
  return '#' + c.getHexString();
}
