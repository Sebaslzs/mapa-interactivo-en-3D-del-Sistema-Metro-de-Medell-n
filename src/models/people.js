// Personajes low-poly animados: el viajero (avatar elegido) y los usuarios
// que dan vida a estaciones y lugares turísticos.

import * as THREE from 'three';
import { ModelBuilder, MAT } from '../util/builder.js';
import { mulberry32 } from '../util/rand.js';

export const PSCALE = 0.27;

export const AVATARS = {
  estudiante: {
    label: 'Estudiante', desc: 'Mochila al hombro, rumbo a la U.',
    skin: '#c98e62', hair: '#2b1d14', shirt: '#2f80ed', pants: '#2c3e63', shoes: '#f2f2f2', acc: 'mochila', accColor: '#f2994a',
  },
  turista: {
    label: 'Turista', desc: 'Cámara lista para Plaza Botero.',
    skin: '#f0c7a0', hair: '#c9a25e', shirt: '#f2c94c', pants: '#6fcf97', shoes: '#8d5a3b', acc: 'camara', accColor: '#e8e2d0',
  },
  paisa: {
    label: 'Arriero paisa', desc: 'Sombrero aguadeño, carriel y ruana.',
    skin: '#b97d52', hair: '#1f1a17', shirt: '#ffffff', pants: '#3d3d45', shoes: '#4a2f1e', acc: 'paisa', accColor: '#a33a2d',
  },
};

function part(builderFn) {
  const b = new ModelBuilder();
  builderFn(b);
  const m = new THREE.Mesh(b.geometry(), MAT.solid);
  m.castShadow = true;
  return m;
}

export function makePerson(style) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  // Torso + cabeza (+ accesorios fijos)
  const torso = part((b) => {
    b.box(0.28, 0.62, 0.44, style.shirt, { p: [0, 1.14, 0] });
    b.box(0.26, 0.14, 0.4, style.pants, { p: [0, 0.8, 0] });
    b.box(0.12, 0.08, 0.12, style.skin, { p: [0, 1.48, 0] });
    b.sphere(0.17, 1, style.skin, { p: [0, 1.66, 0] });
    b.sphere(0.175, 1, style.hair, { p: [-0.02, 1.72, 0], s: [1, 0.62, 1] });
    b.box(0.03, 0.04, 0.05, '#1a1a1a', { p: [0.16, 1.68, 0.06] });
    b.box(0.03, 0.04, 0.05, '#1a1a1a', { p: [0.16, 1.68, -0.06] });
    if (style.acc === 'mochila') {
      b.box(0.2, 0.42, 0.34, style.accColor, { p: [-0.24, 1.15, 0] });
      b.box(0.08, 0.15, 0.3, '#d17a31', { p: [-0.36, 1.05, 0] });
    } else if (style.acc === 'camara') {
      b.cyl(0.32, 0.32, 0.03, 10, style.accColor, { p: [0, 1.82, 0] });
      b.cyl(0.17, 0.19, 0.16, 10, style.accColor, { p: [0, 1.9, 0] });
      b.box(0.12, 0.1, 0.16, '#333333', { p: [0.18, 1.12, 0] });
      b.cyl(0.04, 0.04, 0.06, 8, '#111111', { p: [0.26, 1.12, 0], r: [0, 0, Math.PI / 2] });
    } else if (style.acc === 'paisa') {
      b.cyl(0.36, 0.36, 0.03, 12, '#f6f1e3', { p: [0, 1.82, 0] });
      b.cyl(0.16, 0.19, 0.17, 12, '#f6f1e3', { p: [0, 1.91, 0] });
      b.cyl(0.192, 0.192, 0.05, 12, '#1d1d1d', { p: [0, 1.86, 0] });
      b.box(0.34, 0.36, 0.62, style.accColor, { p: [0, 1.32, 0] });
      b.box(0.36, 0.06, 0.64, '#f2e9d8', { p: [0, 1.16, 0] });
      b.box(0.16, 0.18, 0.06, '#7a4a25', { p: [0.02, 0.98, 0.26] });
    } else if (style.acc === 'bolso') {
      b.box(0.14, 0.2, 0.06, style.accColor, { p: [0.02, 0.98, 0.25] });
    }
  });
  body.add(torso);
  // Brazos y piernas (con pivote en hombro / cadera)
  const limb = (color, len, w, handColor) => {
    const g = new THREE.Group();
    const m = part((b) => {
      b.box(w, len, w, color, { p: [0, -len / 2, 0] });
      if (handColor) b.box(w * 0.9, 0.1, w * 0.9, handColor, { p: [0, -len - 0.03, 0] });
    });
    g.add(m);
    return g;
  };
  const armL = limb(style.shirt, 0.55, 0.11, style.skin);
  const armR = limb(style.shirt, 0.55, 0.11, style.skin);
  armL.position.set(0, 1.42, -0.29);
  armR.position.set(0, 1.42, 0.29);
  const legL = limb(style.pants, 0.72, 0.14, style.shoes);
  const legR = limb(style.pants, 0.72, 0.14, style.shoes);
  legL.position.set(0, 0.8, -0.11);
  legR.position.set(0, 0.8, 0.11);
  body.add(armL, armR, legL, legR);
  root.scale.setScalar(PSCALE);
  root.userData.rig = { body, armL, armR, legL, legR, phase: Math.random() * 10 };
  return root;
}

// Anima caminata (speed>0) o reposo.
export function animatePerson(p, t, walking, speed = 1) {
  const r = p.userData.rig;
  if (!r) return;
  const ph = t * 7 * speed + r.phase;
  if (walking) {
    const s = Math.sin(ph);
    r.legL.rotation.z = s * 0.55;
    r.legR.rotation.z = -s * 0.55;
    r.armL.rotation.z = -s * 0.45;
    r.armR.rotation.z = s * 0.45;
    r.body.position.y = Math.abs(Math.cos(ph)) * 0.05;
  } else {
    const k = 0.15;
    r.legL.rotation.z *= 1 - k;
    r.legR.rotation.z *= 1 - k;
    r.armL.rotation.z = r.armL.rotation.z * (1 - k) + Math.sin(t * 1.3 + r.phase) * 0.04 * k;
    r.armR.rotation.z = r.armR.rotation.z * (1 - k) - Math.sin(t * 1.3 + r.phase) * 0.04 * k;
    r.body.position.y = Math.sin(t * 2 + r.phase) * 0.01;
  }
}

const SHIRTS = ['#eb5757', '#2f80ed', '#27ae60', '#f2c94c', '#9b51e0', '#ffffff', '#f2994a', '#56ccf2', '#e84393', '#1abc9c'];
const PANTS = ['#2c3e50', '#34495e', '#4f4f4f', '#6d4c41', '#1e3a5f', '#8e8e8e'];
const SKINS = ['#f1c27d', '#e0ac69', '#c68642', '#8d5524', '#ffdbac', '#b97d52'];
const HAIRS = ['#1f1a17', '#3b2a20', '#6b4a2b', '#c9a25e', '#2b1d14', '#8a8a8a'];

export function randomStyle(seed) {
  const r = mulberry32(seed);
  const pick = (a) => a[Math.floor(r() * a.length)];
  const accs = ['none', 'none', 'mochila', 'bolso', 'camara'];
  return {
    skin: pick(SKINS), hair: pick(HAIRS), shirt: pick(SHIRTS), pants: pick(PANTS), shoes: '#2b2b2b',
    acc: pick(accs), accColor: pick(SHIRTS),
  };
}
