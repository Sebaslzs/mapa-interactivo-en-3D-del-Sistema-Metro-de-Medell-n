// Modelos low-poly de lugares emblemáticos de Medellín. Se exageran un poco
// en tamaño para que se reconozcan "a lo lejos" en el mapa.

import * as THREE from 'three';
import { ModelBuilder, shade } from '../util/builder.js';
import { project } from '../geo.js';
import { mulberry32 } from '../util/rand.js';
import { BRAND } from '../config.js';

const PINE = ['#2f6b35', '#3a7d3c', '#285e2f'];
const LEAF = ['#4f9d3a', '#5cad45', '#3f8a33', '#6bb84f'];

function tree(b, x, y, z, s = 1, pine = false, rnd = Math.random) {
  if (pine) {
    b.cyl(0.08 * s, 0.1 * s, 0.6 * s, 5, '#6b4a2b', { p: [x, y + 0.3 * s, z] });
    b.cone(0.55 * s, 1.6 * s, 6, PINE[Math.floor(rnd() * PINE.length)], { p: [x, y + 1.3 * s, z] });
  } else {
    b.cyl(0.08 * s, 0.1 * s, 0.7 * s, 5, '#6b4a2b', { p: [x, y + 0.35 * s, z] });
    b.sphere(0.55 * s, 0, LEAF[Math.floor(rnd() * LEAF.length)], { p: [x, y + 1.0 * s, z] });
  }
}

export function buildLandmark(lm, terrain) {
  const p = project(lm.lat, lm.lon);
  const gy = terrain.heightAt(p.x, p.z);
  const b = new ModelBuilder();
  const rnd = mulberry32(lm.id.length * 977 + 13);
  const H = (x, z) => terrain.heightAt(p.x + x, p.z + z) - gy;
  let top = 6;
  let anim = null;
  const extra = [];

  switch (lm.model) {
    case 'arvi': {
      for (let i = 0; i < 70; i++) {
        const a = rnd() * Math.PI * 2;
        const r = 4 + rnd() * 26;
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        tree(b, x, H(x, z) - 0.1, z, 2.2 + rnd() * 1.4, rnd() < 0.7, rnd);
      }
      b.box(5, 1.8, 3.5, '#8b5a2b', { p: [0, 0.9, 0] });
      b.roof(5.6, 4.2, 1.6, '#a0522d', { p: [0, 1.8, 0] });
      b.box(1.2, 1.1, 0.1, '#f2e6c9', { p: [0, 1.0, 1.8] });
      b.box(3.6, 0.9, 0.2, BRAND.green, { p: [4, 1.8, 3] });
      b.box(0.2, 1.6, 0.2, '#6b4a2b', { p: [4, 0.8, 3] });
      top = 8;
      break;
    }
    case 'biblioteca': {
      const rocks = [[-2.6, 0, 0.3, 3.2, 4.2, 3.4], [0.8, 0.3, -0.4, 3.6, 5.0, 3.6], [3.8, 0.7, 0.6, 2.8, 3.6, 3.0]];
      rocks.forEach(([x, y, rz, w, h, d], i) => {
        b.box(w, h, d, '#34353a', { p: [x, H(x, 0) + h / 2 - 0.4 + y, 0], r: [0.12 * (i - 1), 0.3 * i, rz * 0.3] });
        b.box(w * 0.9, 0.12, d * 0.3, '#f5d77a', { p: [x, H(x, 0) + h * 0.55 + y, d * 0.45], r: [0.12 * (i - 1), 0.3 * i, rz * 0.3], layer: 'glow' });
      });
      b.box(10, 0.3, 5, '#cfc6b8', { p: [0.4, H(0, 0) - 0.1, 3.6] });
      top = 7;
      break;
    }
    case 'botero': {
      b.box(16, 0.25, 12, '#e6dccb', { p: [0, 0.1, 0] });
      // Palacio de la Cultura (fachada ajedrezada gótica)
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          b.box(1.5, 1.4, 5, (i + j) % 2 ? '#1f1f1f' : '#f2f2ee', { p: [-7 + i * 1.5 + 0.75, 0.9 + j * 1.4, -8.5] });
        }
      }
      b.box(9, 0.4, 5.2, '#2a2a2a', { p: [-2.5, 5.2, -8.5] });
      for (const x of [-6.4, -2.5, 1.4]) b.cone(0.6, 2.6, 4, '#2a2a2a', { p: [x, 6.6, -8.5] });
      // Museo de Antioquia
      b.box(8, 3.4, 5, '#d9c7a4', { p: [8, 1.8, -7] });
      b.box(8.2, 0.4, 5.2, '#b89c6e', { p: [8, 3.6, -7] });
      // Esculturas voluminosas de bronce
      const pos = [[-4, 2], [-1, -2], [2, 3], [5, -1], [-6, -3], [1, 0], [6, 4]];
      pos.forEach(([x, z], i) => {
        const s = 0.9 + (i % 3) * 0.25;
        b.box(1.0 * s, 0.4, 1.0 * s, '#8c8579', { p: [x, 0.4, z] });
        b.sphere(0.95 * s, 1, '#5e3f25', { p: [x, 1.5 * s + 0.3, z], s: [1, 1.15, 0.9] });
        b.sphere(0.42 * s, 1, '#6b4a2c', { p: [x, 2.7 * s + 0.35, z] });
      });
      for (let i = 0; i < 6; i++) tree(b, -7 + i * 2.8, 0.2, 5.2, 1.3, false, rnd);
      top = 8;
      break;
    }
    case 'coltejer': {
      b.box(4.2, 12, 3.4, '#e9e7e2', { p: [0, 6, 0] });
      for (let y = 1; y < 12; y += 0.9) b.box(4.25, 0.35, 3.45, '#7f98ad', { p: [0, y, 0], layer: 'glass' });
      // Aguja de tejer: dos láminas que se cierran en punta
      b.cyl(0.01, 2.1, 6.5, 4, '#f2f1ec', { p: [0, 15.2, 0], r: [0, Math.PI / 4, 0], s: [1, 1, 0.8] });
      b.box(0.35, 4.2, 1.2, '#35414d', { p: [0, 14.3, 0] });
      b.cyl(0.04, 0.04, 1.8, 4, '#d0d0d0', { p: [0, 19.2, 0] });
      b.sphere(0.12, 0, '#ff3b30', { p: [0, 20.1, 0], layer: 'glow' });
      b.box(8, 1.6, 6, '#cfcac1', { p: [0, 0.8, 0] });
      top = 21;
      break;
    }
    case 'catedral': {
      b.box(9, 3.2, 4.5, '#a4553a', { p: [0, 1.6, 0] });
      b.roof(9.2, 4.8, 1.6, '#6e3b2b', { p: [0, 3.2, 0] });
      b.box(2.2, 7.5, 2.2, '#b05e40', { p: [5, 3.75, 0] });
      b.cone(1.5, 2.4, 4, '#6e3b2b', { p: [5, 8.7, 0], r: [0, Math.PI / 4, 0] });
      b.sphere(1.6, 1, '#9a4d34', { p: [-3, 4.2, 0], s: [1, 0.8, 1] });
      b.box(0.9, 1.5, 0.1, '#3a2419', { p: [5, 0.8, 1.15] });
      b.sphere(0.3, 0, '#f6d77a', { p: [5, 6.5, 1.12], layer: 'glow' });
      // Parque de Bolívar
      b.box(10, 0.15, 8, '#8fc05a', { p: [-2, 0.05, 7] });
      for (let i = 0; i < 8; i++) tree(b, -6 + (i % 4) * 3, 0.1, 5 + Math.floor(i / 4) * 4, 1.4, false, rnd);
      top = 10;
      break;
    }
    case 'pueblito': {
      b.box(2.6, 2.4, 3.6, '#fbfaf5', { p: [0, 1.2, 0] });
      b.roof(3.8, 2.8, 1.4, '#b5452f', { p: [0, 2.4, 0], r: [0, Math.PI / 2, 0] });
      b.box(1.2, 4.5, 1.2, '#fbfaf5', { p: [0, 2.25, -2.2] });
      b.cone(0.95, 1.6, 4, '#b5452f', { p: [0, 5.3, -2.2], r: [0, Math.PI / 4, 0] });
      const cols = ['#2f80ed', '#27ae60', '#eb5757', '#f2c94c', '#9b51e0'];
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2 + 0.3;
        const x = Math.cos(a) * 5.5;
        const z = Math.sin(a) * 5.5;
        const y = H(x, z);
        b.box(2, 1.4, 1.6, '#fbfaf5', { p: [x, y + 0.7, z], r: [0, -a, 0] });
        b.roof(2.2, 1.9, 0.8, '#b5452f', { p: [x, y + 1.4, z], r: [0, -a, 0] });
        b.box(2.02, 0.5, 0.3, cols[i % cols.length], { p: [x, y + 0.45, z], r: [0, -a, 0] });
      }
      top = 7;
      break;
    }
    case 'estadio': {
      const N = 28;
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        const rx = 9.5;
        const rz = 7;
        const x = Math.cos(a) * rx;
        const z = Math.sin(a) * rz;
        const seg = ((2 * Math.PI) / N) * 8.5;
        b.box(seg, 2.4, 2.2, i % 2 ? '#d9d4ca' : '#e6e1d7', { p: [x, 1.2, z], r: [0, -a + Math.PI / 2, 0] });
        b.box(seg, 0.3, 2.6, i % 7 === 0 ? '#e30613' : '#1d56a5', { p: [x * 0.97, 2.5, z * 0.97], r: [0, -a + Math.PI / 2, 0] });
      }
      b.cyl(7.6, 7.6, 0.15, 24, '#4caf50', { p: [0, 0.15, 0], s: [1, 1, 0.68] });
      b.box(10, 0.02, 0.1, '#ffffff', { p: [0, 0.25, 0], r: [0, Math.PI / 2, 0] });
      for (const [x, z] of [[-10.5, -8], [10.5, -8], [-10.5, 8], [10.5, 8]]) {
        b.box(0.3, 7, 0.3, '#bfc4c9', { p: [x, 3.5, z] });
        b.box(1.6, 0.9, 0.3, '#ffffff', { p: [x, 7.2, z], layer: 'glow' });
      }
      top = 9;
      break;
    }
    case 'explora': {
      const boxes = [[-3, 0, 4.5, 3.2, 4], [1.8, -1, 3.5, 4.2, 3.5], [0, 3.5, 5, 2.6, 3], [4.5, 2.5, 3, 3.5, 3]];
      boxes.forEach(([x, z, w, h, d]) => b.box(w, h, d, '#d7262e', { p: [x, h / 2, z] }));
      b.box(12, 0.9, 9, '#2b2b2e', { p: [0.8, 0.45, 1.2] });
      b.box(3, 0.1, 2, '#46b3e6', { p: [-3, 0.95, 4.5], layer: 'glow' });
      top = 6;
      break;
    }
    case 'orquideorama': {
      for (let i = 0; i < 7; i++) {
        const a = (i / 6) * Math.PI * 2;
        const x = i === 6 ? 0 : Math.cos(a) * 3.4;
        const z = i === 6 ? 0 : Math.sin(a) * 3.4;
        b.cyl(0.25, 0.4, 3.4, 6, '#b88a52', { p: [x, 1.7, z] });
        b.cyl(1.95, 0.6, 0.6, 6, '#c99b5f', { p: [x, 3.6, z] });
        b.cyl(1.9, 1.9, 0.08, 6, '#e7c98f', { p: [x, 3.93, z] });
      }
      for (let i = 0; i < 26; i++) {
        const a = rnd() * Math.PI * 2;
        const r = 6 + rnd() * 7;
        tree(b, Math.cos(a) * r, 0, Math.sin(a) * r, 1.3 + rnd(), false, rnd);
      }
      b.box(4, 0.1, 3, '#5fb2e0', { p: [8, 0.1, -6] });
      top = 6;
      break;
    }
    case 'parque_norte': {
      // Rueda de Chicago (gira)
      const wheel = new ModelBuilder();
      wheel.add(new THREE.TorusGeometry(3.2, 0.12, 5, 20), '#ffffff', {});
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        wheel.box(6.4, 0.08, 0.08, '#e0e0e0', { r: [0, 0, a] });
        wheel.box(0.5, 0.45, 0.5, ['#eb5757', '#f2c94c', '#2f80ed', '#27ae60', '#9b51e0'][i % 5], {
          p: [Math.cos(a) * 3.2, Math.sin(a) * 3.2 - 0.35, 0],
        });
      }
      const w = wheel.build();
      w.position.set(0, 4.3, 0);
      extra.push(w);
      anim = (t) => (w.rotation.z = t * 0.25);
      for (const s of [-1, 1]) b.box(0.25, 4.6, 0.25, '#bdbdbd', { p: [s * 1.2, 2.2, 0], r: [0, 0, s * 0.28] });
      // Montaña rusa estilizada
      for (let i = 0; i < 12; i++) {
        const x = 3 + i * 0.8;
        const h = 1.2 + Math.sin(i * 0.9) * 1.1 + 1.2;
        b.box(0.12, h, 0.12, '#f2994a', { p: [x, h / 2, 3] });
        b.box(0.85, 0.12, 0.6, '#eb5757', { p: [x, h, 3], r: [0, 0, Math.cos(i * 0.9) * 0.6] });
      }
      top = 8;
      break;
    }
    case 'comuna13': {
      const cols = ['#e74c3c', '#f1c40f', '#3498db', '#9b59b6', '#1abc9c', '#e67e22', '#ff6b9d', '#2ecc71'];
      for (let i = 0; i < 36; i++) {
        const x = -7 + (i % 6) * 2.6 + rnd() * 0.6;
        const z = -7 + Math.floor(i / 6) * 2.6 + rnd() * 0.6;
        const y = H(x, z);
        const h = 1.2 + rnd() * 1.4;
        b.box(2.1, h, 2.1, cols[i % cols.length], { p: [x, y + h / 2 - 0.3, z] });
        b.box(2.2, 0.15, 2.2, '#b5552f', { p: [x, y + h - 0.25, z] });
      }
      // Escaleras eléctricas con cubierta naranja
      for (let k = 0; k < 4; k++) {
        const x0 = 8.5;
        const z0 = -6 + k * 4;
        const y0 = H(x0, z0);
        const y1 = H(x0, z0 + 3.4);
        const ang = Math.atan2(y1 - y0, 3.4);
        b.box(1.0, 0.25, 3.8, '#9a9a9a', { p: [x0, (y0 + y1) / 2 + 0.3, z0 + 1.7], r: [-ang, 0, 0] });
        b.box(1.4, 0.1, 3.8, '#f28c28', { p: [x0, (y0 + y1) / 2 + 1.5, z0 + 1.7], r: [-ang, 0, 0] });
      }
      top = 6;
      break;
    }
    case 'epm': {
      b.box(6, 11, 5, '#3f5b6f', { p: [0, 5.5, 0] });
      for (let y = 0.5; y < 11; y += 1.1) b.box(6.05, 0.18, 5.05, '#e8eaec', { p: [0, y, 0] });
      b.box(6.4, 0.5, 5.4, '#e8eaec', { p: [0, 11.2, 0] });
      b.box(7, 0.8, 1, BRAND.green, { p: [0, 10.1, 2.8], layer: 'glow' });
      // Pies Descalzos: agua, arena y bosque de guadua
      b.box(9, 0.15, 5, '#5fb2e0', { p: [-9, 0.12, 3] });
      b.box(6, 0.12, 4, '#e8d9a8', { p: [-8, 0.1, -3] });
      for (let i = 0; i < 12; i++) b.cyl(0.12, 0.12, 3, 5, '#9bc45a', { p: [-12 + (i % 4) * 1.1, 1.5, -5 + Math.floor(i / 4) * 1.1] });
      // Teatro Metropolitano (ladrillo, abanico)
      b.cyl(4.5, 5, 3.5, 8, '#b5613e', { p: [9, 1.75, -2], r: [0, 0.3, 0], s: [1, 1, 0.7] });
      top = 13;
      break;
    }
    case 'luces': {
      b.box(12, 0.1, 9, '#d8d3c8', { p: [0, 0.05, 0] });
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 5; j++) {
          const x = -5 + i * 1.65;
          const z = -3.4 + j * 1.7;
          b.box(0.1, 4, 0.1, '#f4f4f4', { p: [x, 2, z] });
          b.box(0.22, 0.4, 0.22, '#ffffff', { p: [x, 4.1, z], layer: 'glow' });
        }
      }
      b.box(5, 5, 3, '#c9a27a', { p: [-8.5, 2.5, -5] });
      b.box(5, 5, 3, '#c9a27a', { p: [8.5, 2.5, -5] });
      top = 6;
      break;
    }
    case 'memoria': {
      b.box(7, 3, 4.5, '#cfc8bc', { p: [0, 1.5, 0] });
      for (let i = 0; i < 9; i++) b.box(0.15, 3.1, 4.6, '#a7a095', { p: [-3.3 + i * 0.82, 1.55, 0] });
      b.box(8, 0.1, 7, '#8fc05a', { p: [0, 0.05, 5] });
      top = 5;
      break;
    }
    case 'cerro': {
      for (let i = 0; i < 90; i++) {
        const a = rnd() * Math.PI * 2;
        const r = rnd() * 22;
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        tree(b, x, H(x, z) - 0.1, z, 1.6 + rnd() * 1.2, false, rnd);
      }
      b.box(0.15, 3, 0.15, '#dddddd', { p: [0, H(0, 0) + 1.5, 0] });
      b.box(1.4, 0.8, 0.05, BRAND.green, { p: [0.7, H(0, 0) + 2.6, 0] });
      top = 7;
      break;
    }
    case 'aeropuerto': {
      const rot = 0.14;
      const len = 150;
      for (let k = 0; k < 3; k++) {
        const segL = len / 3;
        const zc = -len / 2 + segL * (k + 0.5);
        const xx = Math.sin(rot) * zc;
        const zz = Math.cos(rot) * zc;
        b.box(4.5, 0.3, segL + 0.5, '#4d4f54', { p: [xx, H(xx, zz) + 0.05, zz], r: [0, rot, 0] });
        b.box(0.25, 0.32, segL * 0.9, '#f5f5f5', { p: [xx, H(xx, zz) + 0.07, zz], r: [0, rot, 0] });
        b.box(1.5, 0.28, segL + 0.5, '#6b6d70', { p: [xx + 5.5, H(xx + 5.5, zz) + 0.04, zz], r: [0, rot, 0] });
      }
      // Terminal art déco
      b.box(10, 2.6, 4, '#f4efe4', { p: [13, H(13, 0) + 1.3, 2], r: [0, rot, 0] });
      b.box(3, 4, 3, '#f4efe4', { p: [13, H(13, 0) + 2, 2], r: [0, rot, 0] });
      b.box(10.2, 0.4, 4.2, '#3d78b8', { p: [13, H(13, 0) + 2.7, 2], r: [0, rot, 0] });
      b.box(1.2, 2, 1.2, '#f4efe4', { p: [16, H(16, -6) + 3, -6] });
      b.box(2, 1, 2, '#6b8fa8', { p: [16, H(16, -6) + 4.4, -6], layer: 'glass' });
      top = 6;
      break;
    }
    case 'poblado': {
      const cols = ['#f4efe6', '#e9e2d2', '#dfe6ea', '#f1e7d9', '#c9d6de'];
      for (let i = 0; i < 12; i++) {
        const x = -8 + (i % 4) * 5.3 + rnd() * 1.2;
        const z = -6 + Math.floor(i / 4) * 5.5 + rnd();
        const h = 8 + rnd() * 10;
        const y = H(x, z);
        b.box(3, h, 3, cols[i % cols.length], { p: [x, y + h / 2 - 0.3, z] });
        for (let yy = 1.5; yy < h; yy += 1.4) b.box(3.05, 0.25, 3.05, '#8fa9bd', { p: [x, y + yy, z], layer: 'glass' });
      }
      b.box(6, 0.12, 5, '#8fc05a', { p: [0, H(0, 0) + 0.06, 0] });
      for (let i = 0; i < 6; i++) {
        const x = -2 + (i % 3) * 2;
        const z = -1.5 + Math.floor(i / 3) * 3;
        b.cyl(0.07, 0.1, 2.4, 5, '#8b6b4a', { p: [x, H(x, z) + 1.2, z] });
        for (let k = 0; k < 5; k++) {
          const a = (k / 5) * Math.PI * 2;
          b.box(1.1, 0.06, 0.3, '#3f9a3a', { p: [x + Math.cos(a) * 0.5, H(x, z) + 2.4, z + Math.sin(a) * 0.5], r: [0, -a, -0.35] });
        }
      }
      top = 20;
      break;
    }
    case 'castillo': {
      b.box(5, 3.5, 5, '#b9b2a4', { p: [0, 1.75, 0] });
      for (let i = 0; i < 5; i++) b.box(0.6, 0.5, 5.1, '#b9b2a4', { p: [-2.2 + i * 1.1, 3.75, 0] });
      for (const [x, z] of [[-2.5, -2.5], [2.5, -2.5], [-2.5, 2.5], [2.5, 2.5]]) {
        b.cyl(0.9, 0.9, 5, 8, '#c4bdaf', { p: [x, 2.5, z] });
        b.cone(1.1, 1.8, 8, '#5a6b7c', { p: [x, 5.9, z] });
      }
      b.box(0.05, 1.2, 0.05, '#555555', { p: [2.5, 7.3, 2.5] });
      b.box(0.7, 0.4, 0.04, '#d6282c', { p: [2.85, 7.6, 2.5] });
      for (let i = 0; i < 10; i++) tree(b, -7 + rnd() * 14, 0, 5 + rnd() * 4, 1.2, rnd() < 0.3, rnd);
      top = 8;
      break;
    }
    case 'mamm': {
      b.box(6, 3.5, 5, '#a44f34', { p: [0, 1.75, 0] });
      b.box(4, 2.2, 4, '#7c4225', { p: [4.2, 4.5, 1], r: [0, 0.2, 0] });
      b.box(3.5, 2, 3.5, '#8b4a2b', { p: [1.5, 5.2, -1.4], r: [0, -0.15, 0] });
      top = 7;
      break;
    }
    default:
      b.box(3, 3, 3, '#cccccc', { p: [0, 1.5, 0] });
  }
  const group = b.build({ castShadow: true, receiveShadow: true });
  for (const e of extra) group.add(e);
  group.position.set(p.x, gy, p.z);
  return { group, anim, top, pos: new THREE.Vector3(p.x, gy, p.z) };
}

export { tree, shade };
