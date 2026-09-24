// Modelos de estaciones por modo: estación de metro (elevada o a nivel),
// estación de Metrocable con rueda motriz, parada de tranvía, estación
// BRT de Metroplús, paradero, y parada/obra del Metro de la 80.
// Todas se modelan en unidades de escena con +X a lo largo de la vía.

import * as THREE from 'three';
import { ModelBuilder, shade } from '../util/builder.js';
import { BRAND } from '../config.js';
import { MODE_GEOM } from '../world/network.js';

const CONCRETE = '#e4dfd5';
const ROOF = '#f7f6f2';
const GLOWC = '#fff1c2';

function yawOf(dir) {
  return Math.atan2(-dir.z, dir.x);
}

export function metroStation(rt, stop, terrain, extraColors = []) {
  const b = new ModelBuilder();
  const g = MODE_GEOM.metro;
  const L = 18;
  const pz = g.lane + 1.0;
  const h = stop.pos.y - stop.ground; // altura de la vía sobre el terreno
  // Andenes laterales
  for (const s of [-1, 1]) {
    b.box(L, 0.35, 0.95, '#d6d0c4', { p: [0, 0.12, s * pz] });
    b.box(L, 0.04, 0.12, '#f2c94c', { p: [0, 0.31, s * (pz - 0.42)] });
    const baseH = Math.max(0.3, h + 0.1);
    b.box(L, baseH, 0.95, CONCRETE, { p: [0, -baseH / 2 - 0.05, s * pz] });
  }
  // Cubierta con banda del color de la línea
  b.box(L + 1, 0.14, pz * 2 + 1.5, ROOF, { p: [0, 2.15, 0] });
  b.box(L + 1.4, 0.18, pz * 2 + 1.1, shade(ROOF, -0.06), { p: [0, 2.3, 0] });
  for (const s of [-1, 1]) b.box(L + 1, 0.3, 0.08, rt.color, { p: [0, 2.02, s * (pz + 0.75)] });
  extraColors.forEach((c, i) => {
    for (const s of [-1, 1]) b.box(L * 0.3, 0.3, 0.09, c, { p: [-L / 2 + 2 + i * 1.6, 1.72, s * (pz + 0.76)] });
  });
  for (let x = -L / 2 + 1; x <= L / 2 - 1; x += 4) {
    for (const s of [-1, 1]) b.box(0.14, 1.9, 0.14, '#cfd2d6', { p: [x, 1.2, s * (pz + 0.35)] });
  }
  for (const s of [-1, 1]) b.box(L - 1, 0.05, 0.12, GLOWC, { p: [0, 2.06, s * pz], layer: 'glow' });
  // Letrero de estación (color de la línea)
  for (const x of [-L / 2 + 2, L / 2 - 2]) {
    for (const s of [-1, 1]) b.box(1.6, 0.35, 0.05, rt.color, { p: [x, 1.55, s * (pz + 0.43)] });
  }
  if (h > 1.3) {
    // Edificio de acceso bajo el viaducto
    const bh = h - 0.7;
    b.box(7, bh, pz * 2 + 1.2, CONCRETE, { p: [0, -h + bh / 2, 0] });
    b.box(7.02, bh * 0.35, pz * 2 + 1.22, '#6a8aa6', { p: [0, -h + bh * 0.6, 0], layer: 'glass' });
    b.box(7.1, 0.25, pz * 2 + 1.3, rt.color, { p: [0, -h + bh + 0.05, 0] });
    for (const s of [-1, 1]) {
      b.box(4.5, 0.2, 1.1, '#bdb6aa', { p: [s * 5.5, -h / 2 - 0.2, pz + 1.4], r: [0.0, 0, s * -Math.atan2(h, 4.5) * 0.9] });
    }
  } else {
    // A nivel: pasarela peatonal sobre las vías
    b.box(1.4, 0.2, pz * 2 + 3, CONCRETE, { p: [L / 2 - 2, 3.1, 0] });
    for (const s of [-1, 1]) {
      b.box(1.4, 3.2, 1.2, CONCRETE, { p: [L / 2 - 2, 1.5, s * (pz + 1.6)] });
      b.box(1.42, 0.6, 1.22, '#6a8aa6', { p: [L / 2 - 2, 2.5, s * (pz + 1.6)], layer: 'glass' });
    }
    b.box(1.45, 0.25, pz * 2 + 3.05, rt.color, { p: [L / 2 - 2, 3.3, 0] });
  }
  return place(b, stop, rt);
}

export function tramStop(rt, stop) {
  const b = new ModelBuilder();
  const g = MODE_GEOM.tram;
  const L = 9;
  const pz = g.lane + 0.75;
  for (const s of [-1, 1]) {
    b.box(L, 0.28, 0.75, '#d9d3c7', { p: [0, 0.05, s * pz] });
    b.box(L, 0.03, 0.1, '#f2c94c', { p: [0, 0.2, s * (pz - 0.32)] });
    b.box(4.2, 0.08, 0.95, rt.color, { p: [0, 1.55, s * pz] });
    b.box(4.2, 0.04, 0.9, ROOF, { p: [0, 1.61, s * pz] });
    for (const x of [-1.9, 1.9]) b.box(0.08, 1.4, 0.08, '#5a5f66', { p: [x, 0.85, s * (pz + 0.3)] });
    b.box(4, 1.0, 0.04, '#9ec9e0', { p: [0, 0.8, s * (pz + 0.34)], layer: 'glass' });
    b.box(3.9, 0.04, 0.6, GLOWC, { p: [0, 1.5, s * pz], layer: 'glow' });
  }
  return place(b, stop, rt);
}

export function busStation(rt, stop, both) {
  // Estación en separador central (puertas a la izquierda del bus)
  const b = new ModelBuilder();
  const L = 9;
  const w = 1.1;
  const c2 = both ? both.color : rt.color;
  b.box(L, 0.3, w, '#d4cec3', { p: [0, 0.1, 0] });
  b.box(L, 1.2, w - 0.1, '#8fc6dc', { p: [0, 0.85, 0], layer: 'glass' });
  for (let x = -L / 2 + 0.3; x <= L / 2; x += 2.1) b.box(0.08, 1.25, w, '#e9ecef', { p: [x, 0.85, 0] });
  b.box(L + 0.6, 0.12, w + 0.5, ROOF, { p: [0, 1.52, 0] });
  b.box(L + 0.62, 0.22, w + 0.1, rt.color, { p: [0, 1.4, 0] });
  if (both) b.box(L * 0.5, 0.23, w + 0.12, c2, { p: [L * 0.2, 1.4, 0] });
  b.box(L - 0.4, 0.04, w - 0.3, GLOWC, { p: [0, 1.44, 0], layer: 'glow' });
  b.box(1.2, 0.4, 0.06, BRAND.green, { p: [-L / 2 + 0.8, 1.8, 0] });
  return place(b, stop, rt, true);
}

export function paradero(rt, stop) {
  const b = new ModelBuilder();
  const g = MODE_GEOM.bus;
  for (const s of [-1, 1]) {
    const z = s * (g.half + 0.55);
    b.box(3.2, 0.2, 0.9, '#d4cec3', { p: [0, 0.05, z] });
    b.box(3, 0.07, 0.9, rt.color, { p: [0, 1.25, z] });
    b.box(2.8, 0.9, 0.04, '#9ec9e0', { p: [0, 0.7, z + s * 0.4], layer: 'glass' });
    for (const x of [-1.3, 1.3]) b.box(0.07, 1.15, 0.07, '#5a5f66', { p: [x, 0.65, z + s * 0.38] });
  }
  return place(b, stop, rt);
}

export function lrtStop(rt, stop, big) {
  const b = new ModelBuilder();
  const g = MODE_GEOM.lrt;
  const L = big ? 14 : 10;
  const pz = g.lane + 0.8;
  for (const s of [-1, 1]) {
    b.box(L, 0.28, 0.8, '#e6d8d5', { p: [0, 0.05, s * pz] });
    b.box(L * 0.55, 0.08, 1.0, rt.color, { p: [0, 1.6, s * pz] });
    for (const x of [-L * 0.25, L * 0.25]) b.box(0.08, 1.5, 0.08, '#6b6b6b', { p: [x, 0.85, s * (pz + 0.3)] });
    // Vallas de obra
    b.box(L, 0.5, 0.05, '#f4f4f4', { p: [0, 0.45, s * (pz + 0.9)] });
    b.box(L, 0.12, 0.06, '#ff5a1f', { p: [0, 0.55, s * (pz + 0.9)] });
  }
  if (big) addCrane(b, -L / 2 - 3, pz + 3, rt.color);
  if (stop.underground) {
    b.box(4, 1.2, 3, '#cfc8bd', { p: [0, 0.6, 0] });
    b.box(3, 0.9, 2, '#2d2f33', { p: [0.6, 0.8, 0] });
    addCrane(b, 4, -pz - 4, rt.color);
  }
  return place(b, stop, rt);
}

function addCrane(b, x, z, accent) {
  const H = 9;
  b.box(0.45, H, 0.45, '#f2b705', { p: [x, H / 2, z] });
  for (let y = 1; y < H; y += 1.2) b.box(0.5, 0.08, 0.5, '#d49d00', { p: [x, y, z] });
  b.box(9, 0.35, 0.35, '#f2b705', { p: [x + 3, H + 0.2, z] });
  b.box(3, 0.35, 0.35, '#f2b705', { p: [x - 2.2, H + 0.2, z] });
  b.box(1, 0.8, 0.8, '#7d7d7d', { p: [x - 3.2, H - 0.1, z] });
  b.box(0.8, 0.8, 0.7, accent, { p: [x + 0.2, H - 0.5, z + 0.55] });
  b.box(0.04, 3, 0.04, '#333333', { p: [x + 6, H - 1.3, z] });
  b.box(0.5, 0.3, 0.5, '#555555', { p: [x + 6, H - 2.9, z] });
  b.box(0.1, 0.1, 0.1, '#ff3b30', { p: [x + 7.4, H + 0.45, z], layer: 'glow' });
}

export function cableStation(rt, stop, index, count, terrain) {
  const b = new ModelBuilder();
  const terminal = index === 0 || index === count - 1;
  const lane = MODE_GEOM.cable.lane;
  const h = stop.cableY - stop.ground; // altura del cable sobre el terreno
  const L = terminal ? 7.5 : 8.5;
  const W = lane * 2 + 2.6;
  const floor = h - MODE_GEOM.cable.floor; // nivel de embarque (piso de la cabina)
  // Plinto y muros
  b.box(L, floor, W, CONCRETE, { p: [0, -h + floor / 2, 0] });
  b.box(L + 0.05, floor * 0.3, W + 0.05, '#c8c1b4', { p: [0, -h + floor * 0.25, 0] });
  b.box(L - 0.4, 0.18, W - 0.4, '#d8d2c6', { p: [0, -h + floor + 0.09, 0] });
  // Columnas y cubierta en el color de la línea
  for (const x of [-L / 2 + 0.3, L / 2 - 0.3]) {
    for (const s of [-1, 1]) b.box(0.3, 2.95, 0.3, '#f0eeea', { p: [x, -h + floor + 1.45, s * (W / 2 - 0.2)] });
  }
  b.box(L + 1.4, 0.35, W + 1.2, rt.color, { p: [0, 1.0, 0] });
  b.box(L + 0.8, 0.25, W + 0.6, ROOF, { p: [0, 1.28, 0] });
  b.box(L - 0.2, 1.4, 0.05, '#9ec9e0', { p: [0, -h + floor + 0.9, W / 2 - 0.25], layer: 'glass' });
  b.box(L - 0.2, 1.4, 0.05, '#9ec9e0', { p: [0, -h + floor + 0.9, -W / 2 + 0.25], layer: 'glass' });
  // Rieles guía de las cabinas
  for (const s of [-1, 1]) b.box(L, 0.12, 0.2, '#5d6168', { p: [0, 0.12, s * lane] });
  b.box(L - 0.6, 0.05, W - 1, GLOWC, { p: [0, 0.82, 0], layer: 'glow' });
  if (terminal) {
    // Rueda motriz (bull wheel) en el extremo
    const end = index === 0 ? -1 : 1;
    b.add(new THREE.TorusGeometry(lane, 0.14, 6, 16), '#3b3f45', { p: [end * (L / 2 - 0.2), 0.15, 0], r: [Math.PI / 2, 0, 0] });
    b.cyl(0.35, 0.35, 0.5, 8, '#5d6168', { p: [end * (L / 2 - 0.2), 0.3, 0] });
    b.box(1.6, 0.8, W - 0.6, shade(rt.color, -0.12), { p: [end * (L / 2 + 0.7), 0.55, 0] });
  }
  // Letrero
  b.box(2.2, 0.55, 0.06, rt.color, { p: [0, -h + floor + 2.0, W / 2 + 0.05] });
  b.box(2.2, 0.55, 0.06, rt.color, { p: [0, -h + floor + 2.0, -W / 2 - 0.05] });
  // Escaleras de acceso
  b.box(3, 0.2, 1.2, '#bdb6aa', { p: [-L / 2 - 1.2, -h + floor / 2, W / 2 - 0.8], r: [0, 0, Math.atan2(floor, 3)] });
  // Orientación: dirección del cable en la estación
  const dir = rt.path.smoothTangentAt(stop.s, 3).setY(0).normalize();
  const grp = b.build({ castShadow: true });
  grp.position.copy(stop.pos);
  grp.rotation.y = yawOf(dir);
  return grp;
}

function place(b, stop, rt, center) {
  const grp = b.build({ castShadow: true });
  const dir = rt.path.smoothTangentAt(stop.s, 4).setY(0).normalize();
  grp.position.copy(stop.pos);
  if (center) grp.position.copy(stop.center || stop.pos);
  grp.rotation.y = yawOf(dir);
  return grp;
}
