// Modelos low-poly de los vehículos del sistema. Se modelan en metros
// (+X hacia adelante, +Y arriba, +Z costado derecho) y luego se escalan.

import * as THREE from 'three';
import { ModelBuilder, shade } from '../util/builder.js';
import { BRAND } from '../config.js';

export const VSCALE = 0.25; // 1 m de vehículo = 0.25 u (≈2.5x su tamaño real en el mapa)
export const GSCALE = 0.4; // telecabinas un poco más grandes para que se lean

const WHITE = '#f3f5f6';
const GLASS = '#253240';
const DARK = '#2b2e33';
const TIRE = '#1c1d20';

function wheels(b, xs, zOff, r = 0.45, y = 0.45) {
  for (const x of xs) {
    for (const z of [-zOff, zOff]) b.cyl(r, r, 0.3, 8, TIRE, { p: [x, y, z], r: [Math.PI / 2, 0, 0] });
  }
}

function lights(b, x, y, z, color = '#fff3c0') {
  for (const s of [-1, 1]) b.box(0.12, 0.25, 0.45, color, { p: [x, y, z * s], layer: 'glow' });
}

// ---------------- Tren del Metro (3 coches) ----------------
function trainCar(color, kind) {
  const b = new ModelBuilder();
  const L = 21.6;
  const W = 3.1;
  b.box(L - 1.2, 0.55, W - 0.4, '#3b3f45', { p: [0, 0.78, 0] });
  for (const bx of [-L / 2 + 3.4, L / 2 - 3.4]) {
    b.box(3.0, 0.5, W - 0.5, DARK, { p: [bx, 0.45, 0] });
    wheels(b, [bx - 0.9, bx + 0.9], 1.0, 0.42, 0.42);
  }
  b.box(L, 1.35, W, WHITE, { p: [0, 1.72, 0] });
  b.box(L - 1.2, 1.05, W + 0.02, GLASS, { p: [0, 2.9, 0] });
  for (let x = -L / 2 + 1.6; x < L / 2 - 1; x += 2.5) b.box(0.3, 1.06, W + 0.04, WHITE, { p: [x, 2.9, 0] });
  b.box(L, 0.6, W, WHITE, { p: [0, 3.72, 0] });
  b.box(L - 0.6, 0.32, W - 0.5, '#d4d8dc', { p: [0, 4.15, 0] });
  b.box(L + 0.03, 0.3, W + 0.05, color, { p: [0, 1.5, 0] });
  b.box(L + 0.03, 0.12, W + 0.05, BRAND.green, { p: [0, 1.2, 0] });
  for (const dx of [-7.3, -2.45, 2.45, 7.3]) {
    b.box(1.45, 2.35, W + 0.06, '#c3cad1', { p: [dx, 2.15, 0] });
    b.box(1.0, 0.8, W + 0.08, GLASS, { p: [dx, 2.85, 0] });
  }
  for (const ax of [-5, 0, 5]) b.box(2.2, 0.35, 1.6, '#c5c9ce', { p: [ax, 4.45, 0] });
  // fuelles entre coches
  for (const s of [-1, 1]) b.box(0.5, 2.6, 2.3, '#3a3a3e', { p: [s * (L / 2 + 0.2), 2.3, 0] });
  if (kind === 'mid') {
    // pantógrafo
    b.box(0.2, 0.9, 0.12, '#55595f', { p: [-1, 4.9, 0], r: [0, 0, 0.6] });
    b.box(0.2, 0.9, 0.12, '#55595f', { p: [-0.4, 5.2, 0], r: [0, 0, -0.6] });
    b.box(0.2, 0.08, 2.0, '#55595f', { p: [0.1, 5.55, 0] });
  }
  if (kind === 'head') {
    b.box(1.6, 3.0, W, WHITE, { p: [L / 2 + 0.55, 2.2, 0] });
    b.box(0.35, 1.3, W - 0.35, GLASS, { p: [L / 2 + 1.25, 3.0, 0], r: [0, 0, -0.28] });
    b.box(0.3, 0.9, W - 0.2, color, { p: [L / 2 + 1.3, 1.55, 0] });
    lights(b, L / 2 + 1.42, 1.9, 1.05);
    b.box(0.2, 0.35, 1.8, '#1e2126', { p: [L / 2 + 1.25, 3.85, 0], layer: 'glow' });
  }
  return b;
}

export function makeTrain(color) {
  const scale = VSCALE;
  const head = trainCar(color, 'head').build();
  const mid = trainCar(color, 'mid').build();
  const tailB = new ModelBuilder().merge(trainCar(color, 'head'), { r: [0, Math.PI, 0] });
  const tail = tailB.build();
  const cars = [head, mid, tail];
  for (const c of cars) c.scale.setScalar(scale);
  return { cars, lengths: [22.6 * scale, 22 * scale, 22.6 * scale], gap: 0.6 * scale, kind: 'train' };
}

// ---------------- Tranvía de Ayacucho ----------------
function tramModule(color, kind) {
  const b = new ModelBuilder();
  const L = kind === 'mid' ? 8.5 : 11;
  const W = 2.3;
  b.box(L, 0.5, W - 0.2, DARK, { p: [0, 0.4, 0] });
  b.box(L, 1.2, W, WHITE, { p: [0, 1.25, 0] });
  b.box(L - 0.6, 1.25, W + 0.02, GLASS, { p: [0, 2.45, 0] });
  for (let x = -L / 2 + 1.2; x < L / 2 - 0.6; x += 2.2) b.box(0.25, 1.26, W + 0.04, WHITE, { p: [x, 2.45, 0] });
  b.box(L, 0.45, W, WHITE, { p: [0, 3.25, 0] });
  b.box(L - 0.8, 0.3, W - 0.5, '#d9dde0', { p: [0, 3.6, 0] });
  b.box(L + 0.02, 0.45, W + 0.05, color, { p: [0, 0.85, 0] });
  b.box(L + 0.02, 0.1, W + 0.05, shade(color, 0.2), { p: [0, 1.75, 0] });
  wheels(b, [-L / 2 + 1.8], 0.85, 0.38, 0.38);
  if (kind === 'mid') {
    b.box(0.2, 0.8, 0.1, '#55595f', { p: [-0.6, 4.1, 0], r: [0, 0, 0.6] });
    b.box(0.2, 0.8, 0.1, '#55595f', { p: [-0.1, 4.35, 0], r: [0, 0, -0.6] });
    b.box(0.2, 0.06, 1.6, '#55595f', { p: [0.3, 4.72, 0] });
  }
  for (const s of [-1, 1]) b.box(0.4, 2.4, 1.9, '#3c3c40', { p: [s * (L / 2 + 0.15), 1.9, 0] });
  if (kind === 'head') {
    b.cyl(W / 2, W / 2, 3.0, 8, WHITE, { p: [L / 2 + 0.2, 1.95, 0], s: [0.9, 1, 1] });
    b.box(0.5, 1.5, W - 0.3, GLASS, { p: [L / 2 + 1.0, 2.65, 0], r: [0, 0, -0.25] });
    b.box(0.4, 0.5, W - 0.4, color, { p: [L / 2 + 1.05, 0.9, 0] });
    lights(b, L / 2 + 1.12, 1.35, 0.72);
  }
  return { b, L };
}

export function makeTram(color) {
  const s = VSCALE;
  const h = tramModule(color, 'head');
  const m = tramModule(color, 'mid');
  const t = tramModule(color, 'head');
  const tail = new ModelBuilder().merge(t.b, { r: [0, Math.PI, 0] }).build();
  const cars = [h.b.build(), m.b.build(), tail];
  for (const c of cars) c.scale.setScalar(s);
  return { cars, lengths: [(h.L + 1.2) * s, m.L * s, (t.L + 1.2) * s], gap: 0.5 * s, kind: 'tram' };
}

// ---------------- Telecabina del Metrocable ----------------
// Origen en la pinza (sobre el cable); la cabina cuelga hacia abajo.
export function gondolaGeometry(color) {
  const b = new ModelBuilder();
  b.box(1.0, 0.4, 0.45, '#4a4e55', { p: [0, 0.05, 0] });
  b.box(0.18, 1.9, 0.18, '#8b9097', { p: [0, -0.95, 0] });
  b.box(0.18, 0.18, 1.0, '#8b9097', { p: [0, -1.9, 0] });
  b.box(0.12, 0.35, 0.12, '#8b9097', { p: [0, -2.05, 0.45] });
  b.box(0.12, 0.35, 0.12, '#8b9097', { p: [0, -2.05, -0.45] });
  const r8 = Math.PI / 8;
  b.cyl(0.95, 1.3, 0.35, 8, WHITE, { p: [0, -2.35, 0], r: [0, r8, 0] });
  b.cyl(1.3, 1.3, 1.0, 8, '#3f5f7a', { p: [0, -3.05, 0], r: [0, r8, 0] });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    b.box(0.14, 1.0, 0.14, WHITE, { p: [Math.cos(a) * 1.22, -3.05, Math.sin(a) * 1.22] });
  }
  b.cyl(1.3, 1.1, 1.05, 8, color, { p: [0, -4.07, 0], r: [0, r8, 0] });
  b.cyl(1.1, 0.8, 0.25, 8, shade(color, -0.15), { p: [0, -4.72, 0], r: [0, r8, 0] });
  b.box(0.05, 0.6, 1.3, '#ffffff', { p: [1.26, -4.0, 0] });
  const g = b.geometry();
  g.scale(GSCALE, GSCALE, GSCALE);
  return g;
}

// ---------------- Buses ----------------
function busBody(b, L, W, color, livery, opts = {}) {
  const H = opts.H || 3.1;
  b.box(L, 0.9, W, livery, { p: [0, 0.95, 0] });
  b.box(L, H - 1.4 - 0.5, W, livery, { p: [0, 1.4 + (H - 1.9) / 2 + 0.35, 0] });
  b.box(L - 0.4, 1.15, W + 0.02, GLASS, { p: [0, 2.1, 0] });
  for (let x = -L / 2 + 1.2; x < L / 2 - 0.5; x += 1.9) b.box(0.18, 1.16, W + 0.04, livery, { p: [x, 2.1, 0] });
  b.box(L, 0.4, W, livery, { p: [0, H - 0.2, 0] });
  b.box(L - 0.6, 0.12, W + 0.04, color, { p: [0, 1.55, 0] });
  b.box(L + 0.02, 0.35, W + 0.03, color, { p: [0, 0.7, 0] });
}

function busFront(b, L, W, color) {
  b.box(0.25, 1.4, W - 0.2, GLASS, { p: [L / 2 + 0.05, 2.05, 0] });
  b.box(0.2, 0.5, W - 0.6, '#1e2126', { p: [L / 2 + 0.06, 2.95, 0], layer: 'glow' });
  lights(b, L / 2 + 0.08, 0.95, 0.9);
  b.box(0.15, 0.3, W - 0.3, color, { p: [L / 2 + 0.05, 0.65, 0] });
}

export function makeArticulated(color) {
  const s = VSCALE;
  const W = 2.55;
  const f = new ModelBuilder();
  busBody(f, 11.5, W, color, WHITE);
  busFront(f, 11.5, W, color);
  wheels(f, [3.6, -2.6], 1.15, 0.5, 0.5);
  f.box(3.0, 0.35, 1.2, '#cfd3d6', { p: [-1, 3.25, 0] });
  const r = new ModelBuilder();
  busBody(r, 6.5, W, color, WHITE);
  wheels(r, [-1.8], 1.15, 0.5, 0.5);
  r.box(0.8, 2.6, 2.3, '#2f3033', { p: [3.4, 1.7, 0] });
  const cars = [f.build(), r.build()];
  for (const c of cars) c.scale.setScalar(s);
  return { cars, lengths: [11.6 * s, 7.2 * s], gap: 0.1 * s, kind: 'bus' };
}

export function makePadron(color) {
  const s = VSCALE;
  const W = 2.5;
  const b = new ModelBuilder();
  busBody(b, 12, W, color, WHITE);
  busFront(b, 12, W, color);
  wheels(b, [3.9, -3.3], 1.12, 0.5, 0.5);
  b.box(4, 0.35, 1.6, '#9fd3a8', { p: [-1, 3.25, 0] }); // baterías (bus eléctrico)
  const car = b.build();
  car.scale.setScalar(s);
  return { cars: [car], lengths: [12.2 * s], gap: 0, kind: 'bus' };
}

export function makeFeeder(color) {
  const s = VSCALE;
  const W = 2.4;
  const b = new ModelBuilder();
  busBody(b, 9.5, W, WHITE, color, { H: 3.0 });
  busFront(b, 9.5, W, WHITE);
  wheels(b, [3.0, -2.6], 1.1, 0.48, 0.48);
  b.box(9.2, 0.14, W + 0.02, '#ffffff', { p: [0, 2.95, 0] });
  const car = b.build();
  car.scale.setScalar(s);
  return { cars: [car], lengths: [9.7 * s], gap: 0, kind: 'feeder' };
}

// ---------------- Metro ligero de la 80 ----------------
function lrtModule(color, kind) {
  const b = new ModelBuilder();
  const L = kind === 'mid' ? 9 : 12;
  const W = 2.65;
  b.box(L, 0.55, W - 0.2, DARK, { p: [0, 0.45, 0] });
  b.box(L, 1.25, W, WHITE, { p: [0, 1.35, 0] });
  b.box(L - 0.6, 1.3, W + 0.02, GLASS, { p: [0, 2.6, 0] });
  for (let x = -L / 2 + 1.1; x < L / 2 - 0.6; x += 2.4) b.box(0.22, 1.31, W + 0.04, WHITE, { p: [x, 2.6, 0] });
  b.box(L, 0.5, W, WHITE, { p: [0, 3.5, 0] });
  b.box(L + 0.02, 0.4, W + 0.05, color, { p: [0, 1.15, 0] });
  b.box(L + 0.02, 0.18, W + 0.05, color, { p: [0, 3.35, 0] });
  wheels(b, [-L / 2 + 2], 1.0, 0.4, 0.4);
  for (const s of [-1, 1]) b.box(0.4, 2.6, 2.1, '#3c3c40', { p: [s * (L / 2 + 0.15), 2, 0] });
  if (kind === 'mid') {
    b.box(0.2, 0.8, 0.1, '#55595f', { p: [-0.6, 4.2, 0], r: [0, 0, 0.6] });
    b.box(0.2, 0.06, 1.6, '#55595f', { p: [0, 4.6, 0] });
  }
  if (kind === 'head') {
    b.box(1.4, 3.1, W, color, { p: [L / 2 + 0.6, 1.95, 0] });
    b.box(0.4, 1.6, W - 0.3, GLASS, { p: [L / 2 + 1.25, 2.7, 0], r: [0, 0, -0.3] });
    lights(b, L / 2 + 1.35, 1.2, 0.9);
  }
  return { b, L };
}

export function makeLRT(color) {
  const s = VSCALE;
  const h = lrtModule(color, 'head');
  const m = lrtModule(color, 'mid');
  const t = lrtModule(color, 'head');
  const tail = new ModelBuilder().merge(t.b, { r: [0, Math.PI, 0] }).build();
  const cars = [h.b.build(), m.b.build(), tail];
  for (const c of cars) c.scale.setScalar(s);
  return { cars, lengths: [(h.L + 1.3) * s, m.L * s, (t.L + 1.3) * s], gap: 0.4 * s, kind: 'lrt' };
}

export function makeVehicle(line) {
  switch (line.def.vehicle) {
    case 'train': return makeTrain(line.color);
    case 'tram': return makeTram(line.color);
    case 'articulated': return makeArticulated(line.color);
    case 'padron': return makePadron(line.color);
    case 'lrt': return makeLRT(line.color);
    default: return makePadron(line.color);
  }
}

// Avión (aeropuerto Olaya Herrera)
export function makePlane() {
  const b = new ModelBuilder();
  b.cyl(1.1, 1.1, 14, 8, '#f4f4f4', { r: [0, 0, Math.PI / 2] });
  b.cone(1.1, 2.5, 8, '#f4f4f4', { p: [8.2, 0, 0], r: [0, 0, -Math.PI / 2] });
  b.cone(1.1, 3, 8, '#f4f4f4', { p: [-8.5, 0.3, 0], r: [0, 0, Math.PI / 2] });
  b.box(3.2, 0.25, 16, '#dfe3e6', { p: [0.5, -0.3, 0] });
  b.box(2, 0.2, 6, '#dfe3e6', { p: [-8.5, 0.6, 0] });
  b.box(2.2, 3, 0.25, BRAND.green, { p: [-8.8, 2, 0] });
  b.box(13, 0.35, 2.25, BRAND.green, { p: [0, -0.2, 0] });
  b.box(9, 0.45, 2.24, GLASS, { p: [0.5, 0.45, 0] });
  for (const z of [-4, 4]) b.cyl(0.5, 0.5, 2, 8, '#9aa0a6', { p: [1.2, -0.9, z], r: [0, 0, Math.PI / 2] });
  const g = b.build();
  g.scale.setScalar(0.3);
  return g;
}
