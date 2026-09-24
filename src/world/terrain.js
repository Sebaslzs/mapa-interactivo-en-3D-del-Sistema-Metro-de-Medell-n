// Malla de relieve low-poly (una cara = un color) del Valle de Aburrá.
// Se construye un núcleo detallado y un anillo lejano de montañas.

import * as THREE from 'three';
import { elevation, elevToY, urbanFactor, riverDistance, noiseAt, project } from '../geo.js';
import { smoothstep, clamp } from '../util/rand.js';

const C = (h) => new THREE.Color(h);
const PAL = {
  city: C('#d9cdb8'),
  city2: C('#cbbfa9'),
  brick: C('#c98a5e'),
  brick2: C('#b9744b'),
  grass: C('#93c65a'),
  grass2: C('#7fb84e'),
  forest: C('#4f9a3c'),
  forest2: C('#3f8435'),
  high: C('#6f9a48'),
  paramo: C('#9aa56a'),
  rock: C('#9b8f7c'),
  sand: C('#e3d6b0'),
  park: C('#71b84a'),
};

// Zonas verdes urbanas (sin construcciones)
const GREEN_ZONES = [
  [6.265, -75.581, 42], [6.2362, -75.5795, 26], [6.2712, -75.5634, 16], [6.2738, -75.5672, 10],
  [6.2567, -75.5903, 16], [6.256, -75.526, 55], [6.298, -75.593, 38], [6.2345, -75.615, 30],
  [6.233, -75.562, 26], [6.229, -75.544, 32], [6.2197, -75.5905, 14],
].map(([la, lo, r]) => ({ ...project(la, lo), r }));

export function greenZone(x, z) {
  let g = 0;
  for (const zn of GREEN_ZONES) {
    const d = Math.hypot(x - zn.x, z - zn.z);
    g = Math.max(g, 1 - smoothstep(zn.r * 0.7, zn.r, d));
  }
  return g;
}

function faceColor(x, z, e, slope, out) {
  const u = urbanFactor(x, z, e) * (1 - greenZone(x, z));
  const n = noiseAt(x, z, 9);
  const n2 = noiseAt(x + 500, z, 25);
  // Vegetación por altitud
  // Transiciones continuas (evita saltos de color entre mallas de distinta resolución)
  const low = PAL.grass.clone().lerp(PAL.grass2, clamp(0.5 + n, 0, 1));
  const mid = PAL.forest.clone().lerp(PAL.forest2, clamp(0.5 + n2 * 1.5, 0, 1));
  const veg = low.lerp(mid, smoothstep(1580, 1950, e));
  veg.lerp(PAL.high, smoothstep(2250, 2750, e) * 0.8);
  veg.lerp(PAL.paramo, smoothstep(2750, 3050, e));
  if (slope > 1.6) veg.lerp(PAL.rock, smoothstep(1.6, 2.6, slope) * 0.6);
  // Ciudad: fondo del valle claro, laderas en tonos ladrillo
  const hill = smoothstep(1540, 1640, e);
  const city = PAL.city.clone().lerp(PAL.city2, clamp(0.5 + n, 0, 1));
  const brick = PAL.brick.clone().lerp(PAL.brick2, clamp(0.5 + n, 0, 1));
  city.lerp(brick, hill);
  const ug = clamp(u * 1.25 - 0.1 + n * 0.25, 0, 1);
  out.copy(veg).lerp(city, ug);
  // Borde del río con arena
  const dr = Math.abs(riverDistance(x, z));
  if (dr < 90) out.lerp(PAL.sand, (1 - dr / 90) * 0.6);
  return out;
}

export class Terrain {
  constructor() {
    this.group = new THREE.Group();
  }

  buildCore(bounds, cell) {
    const { x0, x1, z0, z1 } = bounds;
    const nx = Math.ceil((x1 - x0) / cell);
    const nz = Math.ceil((z1 - z0) / cell);
    this.x0 = x0;
    this.z0 = z0;
    this.cell = cell;
    this.nx = nx;
    this.nz = nz;
    const H = new Float32Array((nx + 1) * (nz + 1));
    const E = new Float32Array((nx + 1) * (nz + 1));
    for (let j = 0; j <= nz; j++) {
      for (let i = 0; i <= nx; i++) {
        const x = x0 + i * cell;
        const z = z0 + j * cell;
        const e = elevation(x, z);
        E[j * (nx + 1) + i] = e;
        H[j * (nx + 1) + i] = elevToY(e);
      }
    }
    this.H = H;
    this.E = E;
    const mesh = this._mesh(nx, nz, cell, x0, z0, (i, j) => H[j * (nx + 1) + i], (i, j) => E[j * (nx + 1) + i]);
    mesh.receiveShadow = true;
    this.core = mesh;
    this.group.add(mesh);
    return mesh;
  }

  buildRing(outer, cell) {
    const { x0, x1, z0, z1 } = outer;
    const nx = Math.ceil((x1 - x0) / cell);
    const nz = Math.ceil((z1 - z0) / cell);
    const cx0 = this.x0 + cell * 0.5;
    const cz0 = this.z0 + cell * 0.5;
    const cx1 = this.x0 + this.nx * this.cell - cell * 0.5;
    const cz1 = this.z0 + this.nz * this.cell - cell * 0.5;
    const H = new Float32Array((nx + 1) * (nz + 1));
    const E = new Float32Array((nx + 1) * (nz + 1));
    for (let j = 0; j <= nz; j++) {
      for (let i = 0; i <= nx; i++) {
        const x = x0 + i * cell;
        const z = z0 + j * cell;
        const e = elevation(x, z);
        const inside = x > this.x0 && x < this.x0 + this.nx * this.cell && z > this.z0 && z < this.z0 + this.nz * this.cell;
        E[j * (nx + 1) + i] = e;
        H[j * (nx + 1) + i] = elevToY(e) - (inside ? 6 : 0);
      }
    }
    const skip = (i, j) => {
      const xa = x0 + i * cell;
      const za = z0 + j * cell;
      return xa >= cx0 && xa + cell <= cx1 && za >= cz0 && za + cell <= cz1;
    };
    const mesh = this._mesh(nx, nz, cell, x0, z0, (i, j) => H[j * (nx + 1) + i], (i, j) => E[j * (nx + 1) + i], skip);
    mesh.receiveShadow = false;
    this.group.add(mesh);
    return mesh;
  }

  _mesh(nx, nz, cell, x0, z0, hAt, eAt, skip) {
    const pos = [];
    const col = [];
    const tmp = new THREE.Color();
    const pushTri = (ax, ay, az, bx, by, bz, cx, cy, cz, e) => {
      pos.push(ax, ay, az, bx, by, bz, cx, cy, cz);
      const mx = (ax + bx + cx) / 3;
      const mz = (az + bz + cz) / 3;
      // pendiente aproximada (en unidades de escena)
      const hmax = Math.max(ay, by, cy);
      const hmin = Math.min(ay, by, cy);
      const slope = (hmax - hmin) / cell;
      faceColor(mx, mz, e, slope, tmp);
      for (let k = 0; k < 3; k++) col.push(tmp.r, tmp.g, tmp.b);
    };
    for (let j = 0; j < nz; j++) {
      for (let i = 0; i < nx; i++) {
        if (skip && skip(i, j)) continue;
        const xa = x0 + i * cell;
        const xb = xa + cell;
        const za = z0 + j * cell;
        const zc = za + cell;
        const ha = hAt(i, j);
        const hb = hAt(i + 1, j);
        const hc = hAt(i, j + 1);
        const hd = hAt(i + 1, j + 1);
        const ea = (eAt(i, j) + eAt(i + 1, j) + eAt(i, j + 1) + eAt(i + 1, j + 1)) / 4;
        if (((i + j) & 1) === 0) {
          pushTri(xa, ha, za, xa, hc, zc, xb, hb, za, ea);
          pushTri(xb, hb, za, xa, hc, zc, xb, hd, zc, ea);
        } else {
          pushTri(xa, ha, za, xb, hd, zc, xb, hb, za, ea);
          pushTri(xa, ha, za, xa, hc, zc, xb, hd, zc, ea);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.computeVertexNormals();
    const m = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
    return new THREE.Mesh(g, m);
  }

  // Altura exacta de la malla (interpolación en el mismo triángulo renderizado).
  heightAt(x, z) {
    const fxAll = (x - this.x0) / this.cell;
    const fzAll = (z - this.z0) / this.cell;
    let i = Math.floor(fxAll);
    let j = Math.floor(fzAll);
    if (i < 0 || j < 0 || i >= this.nx || j >= this.nz) return elevToY(elevation(x, z));
    const fx = fxAll - i;
    const fz = fzAll - j;
    const W = this.nx + 1;
    const H = this.H;
    const ha = H[j * W + i];
    const hb = H[j * W + i + 1];
    const hc = H[(j + 1) * W + i];
    const hd = H[(j + 1) * W + i + 1];
    if (((i + j) & 1) === 0) {
      if (fx + fz <= 1) return ha + (hb - ha) * fx + (hc - ha) * fz;
      return hd + (hc - hd) * (1 - fx) + (hb - hd) * (1 - fz);
    }
    if (fx >= fz) return ha + (hb - ha) * fx + (hd - hb) * fz;
    return ha + (hc - ha) * fz + (hd - hc) * fx;
  }

  elevationAt(x, z) {
    const fx = (x - this.x0) / this.cell;
    const fz = (z - this.z0) / this.cell;
    const i = clamp(Math.round(fx), 0, this.nx);
    const j = clamp(Math.round(fz), 0, this.nz);
    return this.E[j * (this.nx + 1) + i];
  }

  inBounds(x, z, margin = 0) {
    return (
      x > this.x0 + margin && x < this.x0 + this.nx * this.cell - margin &&
      z > this.z0 + margin && z < this.z0 + this.nz * this.cell - margin
    );
  }
}
