// Trayectoria muestreada con longitud de arco: permite ubicar vehículos por
// distancia recorrida (s) y desplazarlos lateralmente a su carril.

import * as THREE from 'three';

const UP = new THREE.Vector3(0, 1, 0);

export class Path {
  constructor(points, closed = false) {
    this.points = points;
    this.closed = closed;
    const n = points.length;
    this.cum = new Float32Array(n);
    for (let i = 1; i < n; i++) this.cum[i] = this.cum[i - 1] + points[i].distanceTo(points[i - 1]);
    this.length = this.cum[n - 1];
  }
  _seg(s) {
    const cum = this.cum;
    if (s <= 0) return 0;
    if (s >= this.length) return cum.length - 2;
    let lo = 0;
    let hi = cum.length - 1;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (cum[mid] <= s) lo = mid;
      else hi = mid;
    }
    return lo;
  }
  wrap(s) {
    if (!this.closed) return Math.min(Math.max(s, 0), this.length);
    const L = this.length;
    return ((s % L) + L) % L;
  }
  pointAt(s, target = new THREE.Vector3()) {
    s = this.wrap(s);
    const i = this._seg(s);
    const a = this.points[i];
    const b = this.points[i + 1];
    const l = this.cum[i + 1] - this.cum[i];
    const t = l > 0 ? (s - this.cum[i]) / l : 0;
    return target.copy(a).lerp(b, Math.min(Math.max(t, 0), 1));
  }
  tangentAt(s, target = new THREE.Vector3()) {
    s = this.wrap(s);
    const i = this._seg(s);
    return target.subVectors(this.points[i + 1], this.points[i]).normalize();
  }
  // Tangente suavizada (promedio en una ventana) para orientar objetos.
  smoothTangentAt(s, win = 1.5, target = new THREE.Vector3()) {
    const a = this.pointAt(s - win, _a);
    const b = this.pointAt(s + win, _b);
    target.subVectors(b, a);
    if (target.lengthSq() < 1e-8) return this.tangentAt(s, target);
    return target.normalize();
  }
  rightAt(s, target = new THREE.Vector3()) {
    this.smoothTangentAt(s, 1.5, target);
    target.cross(UP);
    target.y = 0;
    return target.normalize();
  }
  // Punto desplazado lateralmente (offset>0 = a la derecha del sentido s+).
  laneAt(s, offset, target = new THREE.Vector3()) {
    this.pointAt(s, target);
    if (offset !== 0) {
      this.rightAt(s, _r);
      target.addScaledVector(_r, offset);
    }
    return target;
  }
  // Índice de muestra más cercano a una posición (búsqueda lineal).
  nearestS(pos) {
    let best = Infinity;
    let bs = 0;
    for (let i = 0; i < this.points.length; i++) {
      const d = this.points[i].distanceToSquared(pos);
      if (d < best) {
        best = d;
        bs = this.cum[i];
      }
    }
    return bs;
  }
}

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _r = new THREE.Vector3();

// Remuestrea una polilínea a espaciado aproximadamente constante.
export function resample(points, step) {
  const out = [points[0].clone()];
  let carry = 0;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    const len = a.distanceTo(b);
    let d = step - carry;
    while (d <= len) {
      out.push(a.clone().lerp(b, d / len));
      d += step;
    }
    carry = len - (d - step);
  }
  const last = points[points.length - 1];
  if (out[out.length - 1].distanceTo(last) > step * 0.3) out.push(last.clone());
  else out[out.length - 1].copy(last);
  return out;
}

// Orientación de un objeto con +X hacia "dir" y +Y hacia arriba.
const _x = new THREE.Vector3();
const _y = new THREE.Vector3();
const _z = new THREE.Vector3();
const _mat = new THREE.Matrix4();
export function orientQuat(dir, target = new THREE.Quaternion(), keepLevel = false) {
  _x.copy(dir);
  if (keepLevel) _x.y = 0;
  _x.normalize();
  _z.crossVectors(_x, UP);
  if (_z.lengthSq() < 1e-8) _z.set(0, 0, 1);
  _z.normalize();
  _y.crossVectors(_z, _x).normalize();
  _mat.makeBasis(_x, _y, _z);
  return target.setFromRotationMatrix(_mat);
}
