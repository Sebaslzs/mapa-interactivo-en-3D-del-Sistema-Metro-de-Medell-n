// Tráfico ambiental: trenes, tranvías, buses y metro ligero que van y vienen
// entre paradas con aceleración/frenado; telecabinas que circulan en bucle
// con balanceo de péndulo; buses alimentadores en sus circuitos.

import * as THREE from 'three';
import { AMBIENT } from '../config.js';
import { makeVehicle, makeFeeder, gondolaGeometry } from '../models/vehicles.js';
import { MAT } from '../util/builder.js';
import { orientQuat } from '../util/path.js';
import { mulberry32 } from '../util/rand.js';

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _d = new THREE.Vector3();
const _q = new THREE.Quaternion();

// Vehículo articulado que se ubica sobre el trazado por su centro (s).
export class VehicleRig {
  constructor(template) {
    this.group = new THREE.Group();
    this.cars = template.cars.map((c) => c.clone());
    this.lengths = template.lengths;
    this.gap = template.gap;
    this.kind = template.kind;
    this.total = this.lengths.reduce((a, b) => a + b, 0) + this.gap * (this.lengths.length - 1);
    for (const c of this.cars) this.group.add(c);
  }
  place(path, s, dir, lane) {
    let acc = 0;
    for (let i = 0; i < this.cars.length; i++) {
      const L = this.lengths[i];
      const cs = s + dir * (this.total / 2 - (acc + L / 2));
      acc += L + this.gap;
      path.laneAt(cs - dir * L * 0.42, lane * dir, _a);
      path.laneAt(cs + dir * L * 0.42, lane * dir, _b);
      const car = this.cars[i];
      car.position.addVectors(_a, _b).multiplyScalar(0.5);
      _d.subVectors(_b, _a);
      if (_d.lengthSq() > 1e-6) orientQuat(_d, car.quaternion);
    }
  }
  // Punto trasero (para estelas) y frontal
  rear(path, s, dir, lane, target) {
    return path.laneAt(s - dir * (this.total / 2 + 0.2), lane * dir, target);
  }
}

// Movimiento de parada en parada con perfil de velocidad.
export class StopMover {
  constructor(rt, params, rnd) {
    this.rt = rt;
    this.p = params;
    this.rnd = rnd || Math.random;
    this.stops = rt.stops.map((st, i) => ({ s: st.s, i, closed: st.closed })).filter((o) => !o.closed);
    this.speed = 0;
    this.state = 'run';
    this.dwell = 0;
  }
  initAt(u) {
    const S = this.stops;
    const a = S[0].s;
    const b = S[S.length - 1].s;
    const span = b - a;
    u = u * span * 2;
    if (u < span) {
      this.dir = 1;
      this.s = a + u;
    } else {
      this.dir = -1;
      this.s = b - (u - span);
    }
    // siguiente parada en el sentido de marcha
    let ti = this.dir > 0 ? S.findIndex((o) => o.s > this.s + 0.01) : findLastIndex(S, (o) => o.s < this.s - 0.01);
    if (ti < 0) ti = this.dir > 0 ? S.length - 1 : 0;
    this.ti = ti;
    this.speed = this.p.vmax * 0.6;
  }
  update(dt, mult = 1) {
    const p = this.p;
    if (this.state === 'dwell') {
      this.dwell -= dt;
      if (this.dwell <= 0) this.state = 'run';
      return 'dwell';
    }
    const S = this.stops;
    const target = S[this.ti].s;
    const dist = Math.abs(target - this.s);
    const vmax = p.vmax * mult;
    const acc = p.accel * mult;
    const vT = Math.min(vmax, Math.sqrt(2 * acc * dist));
    if (this.speed < vT) this.speed = Math.min(vT, this.speed + acc * dt);
    else this.speed = vT;
    const step = this.speed * dt;
    if (step >= dist || dist < 0.02) {
      this.s = target;
      this.speed = 0;
      this.state = 'dwell';
      this.dwell = p.dwell * (0.8 + this.rnd() * 0.4);
      const cur = this.ti;
      if (cur + this.dir < 0 || cur + this.dir >= S.length) this.dir = -this.dir;
      this.ti = cur + this.dir;
      return 'arrive';
    }
    this.s += step * this.dir;
    return 'run';
  }
}

function findLastIndex(arr, fn) {
  for (let i = arr.length - 1; i >= 0; i--) if (fn(arr[i])) return i;
  return -1;
}

// Góndola individual con física de péndulo (se usa en tráfico y en el viaje)
export class Swing {
  constructor(seed = 0) {
    this.th = 0;
    this.om = 0;
    this.ph = seed * 1.7;
    this.vPrev = 0;
    this.slopePrev = 0;
  }
  step(dt, v, slope, t) {
    if (dt <= 0) return;
    const a = (v - this.vPrev) / dt;
    const ds = (slope - this.slopePrev) / dt;
    this.vPrev = v;
    this.slopePrev = slope;
    const k = 5.5;
    const c = 1.1;
    const f = -a * 0.06 - ds * 0.35;
    this.om += (-k * this.th - c * this.om + f) * dt;
    this.th += this.om * dt;
    this.th = Math.max(-0.35, Math.min(0.35, this.th));
    this.roll = Math.sin(t * 1.3 + this.ph) * 0.025 + Math.sin(t * 0.37 + this.ph * 2) * 0.015;
  }
}

const Y = new THREE.Vector3(0, 1, 0);
const Z = new THREE.Vector3(0, 0, 1);
const X = new THREE.Vector3(1, 0, 0);
const _qy = new THREE.Quaternion();
const _qs = new THREE.Quaternion();
const _qr = new THREE.Quaternion();
const _t = new THREE.Vector3();

export function gondolaMatrix(loop, s, swing, m) {
  loop.pointAt(s, _a);
  loop.smoothTangentAt(s, 1.2, _t);
  const slope = _t.y;
  const yaw = Math.atan2(-_t.z, _t.x);
  _qy.setFromAxisAngle(Y, yaw);
  _qs.setFromAxisAngle(Z, swing.th);
  _qr.setFromAxisAngle(X, swing.roll || 0);
  _q.copy(_qy).multiply(_qs).multiply(_qr);
  m.compose(_a, _q, _b.set(1, 1, 1));
  return slope;
}

export function cableSpeedFactor(rt, s, sf) {
  const L = rt.loopPath.length;
  let w = 0;
  for (const st of rt.stops) {
    for (const zs of [st.loopFwd, st.loopBwd]) {
      let d = Math.abs(s - zs);
      d = Math.min(d, L - d);
      const k = d < 2.5 ? 1 : d < 7 ? 1 - (d - 2.5) / 4.5 : 0;
      if (k > w) w = k;
    }
  }
  return 1 - (1 - sf) * w;
}

class GondolaSystem {
  constructor(rt, scene) {
    this.rt = rt;
    const n = rt.def.cabins || 40;
    this.n = n;
    this.mesh = new THREE.InstancedMesh(gondolaGeometry(rt.color), MAT.solid, n);
    this.mesh.castShadow = true;
    this.mesh.frustumCulled = false;
    this.mesh.name = 'gondolas-' + rt.id;
    this.s = new Float32Array(n);
    this.sw = [];
    const L = rt.loopPath.length;
    for (let i = 0; i < n; i++) {
      this.s[i] = (i / n) * L;
      this.sw.push(new Swing(i));
    }
    scene.add(this.mesh);
    this._m = new THREE.Matrix4();
  }
  update(dt, t) {
    const rt = this.rt;
    const L = rt.loopPath.length;
    const cfg = AMBIENT.cable;
    for (let i = 0; i < this.n; i++) {
      const f = cableSpeedFactor(rt, this.s[i], cfg.stationFactor);
      const v = cfg.v * f;
      this.s[i] = (this.s[i] + v * dt) % L;
      const sw = this.sw[i];
      const slope = gondolaMatrix(rt.loopPath, this.s[i], sw, this._m);
      sw.step(dt, v, slope, t);
      this.mesh.setMatrixAt(i, this._m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

export class Traffic {
  constructor(scene, network, particles) {
    this.scene = scene;
    this.net = network;
    this.particles = particles;
    this.vehicles = [];
    this.gondolas = [];
    this.feeders = [];
    this.templates = {};
    this.hidden = new Set();
  }

  template(rt) {
    if (!this.templates[rt.id]) this.templates[rt.id] = makeVehicle(rt);
    return this.templates[rt.id];
  }

  build() {
    const rnd = mulberry32(31337);
    for (const rt of Object.values(this.net.lines)) {
      if (rt.mode === 'cable') {
        this.gondolas.push(new GondolaSystem(rt, this.scene));
        continue;
      }
      const count = rt.def.sim?.count || 4;
      const params = AMBIENT[rt.mode] || AMBIENT.bus;
      for (let k = 0; k < count; k++) {
        const rig = new VehicleRig(this.template(rt));
        rig.group.name = 'veh-' + rt.id;
        const mover = new StopMover(rt, params, rnd);
        mover.initAt((k + rnd() * 0.3) / count);
        this.scene.add(rig.group);
        this.vehicles.push({ rt, rig, mover });
      }
    }
    const ft = makeFeeder('#56B04B');
    for (const f of this.net.feeders) {
      for (let k = 0; k < 2; k++) {
        const rig = new VehicleRig(ft);
        this.scene.add(rig.group);
        this.feeders.push({ f, rig, s: (k / 2) * f.path.length + rnd() * 5, speed: 0, dwell: 0 });
      }
    }
  }

  setLineVisible(id, v) {
    if (v) this.hidden.delete(id);
    else this.hidden.add(id);
    for (const o of this.vehicles) if (o.rt.id === id) o.rig.group.visible = v;
    for (const g of this.gondolas) if (g.rt.id === id) g.mesh.visible = v;
  }
  setFeedersVisible(v) {
    this.feedersHidden = !v;
    for (const o of this.feeders) o.rig.group.visible = v;
  }

  update(dt, t) {
    const P = this.particles;
    for (const o of this.vehicles) {
      const { rt, rig, mover } = o;
      mover.update(dt);
      rig.place(rt.path, mover.s, mover.dir, rt.lane);
      if (this.hidden.has(rt.id) || !rig.group.visible) continue;
      if (rig.kind === 'train' && mover.speed > mover.p.vmax * 0.55) {
        rig.rear(rt.path, mover.s, mover.dir, rt.lane, _a);
        _a.y += 0.35;
        _b.set((Math.random() - 0.5) * 0.6, Math.random() * 0.5, (Math.random() - 0.5) * 0.6);
        P.emit(_a, _b, Math.random() < 0.5 ? rt.color : '#ffffff', 0.9, 0.55);
      } else if (rig.kind === 'tram' && mover.speed > 1 && Math.random() < 0.04) {
        rig.cars[1].localToWorld(_a.set(0.2, 4.8, 0));
        for (let k = 0; k < 4; k++) {
          _b.set((Math.random() - 0.5) * 2, Math.random() * 1.5, (Math.random() - 0.5) * 2);
          P.emit(_a, _b, '#bfe3ff', 0.35, 0.35, 4);
        }
      }
    }
    for (const g of this.gondolas) if (g.mesh.visible) g.update(dt, t);
    if (!this.feedersHidden) {
      const fp = AMBIENT.feeder;
      for (const o of this.feeders) {
        const L = o.f.path.length;
        if (o.dwell > 0) {
          o.dwell -= dt;
        } else {
          const toStation = L - (o.s % L);
          const vT = Math.min(fp.vmax, Math.sqrt(2 * fp.accel * Math.max(0.01, toStation)) + 0.3);
          o.speed = o.speed < vT ? Math.min(vT, o.speed + fp.accel * dt) : vT;
          o.s += o.speed * dt;
          if (o.s >= L) {
            o.s -= L;
            o.dwell = fp.dwell;
            o.speed = 0;
          }
        }
        o.rig.place(o.f.path, o.s, 1, 0.3);
      }
    }
  }
}
