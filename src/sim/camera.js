// Director de cámara: vuelos suaves (fly-to), seguimiento de objetos en
// movimiento (con órbita libre del usuario) y modo cinematográfico.

import * as THREE from 'three';

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export class CameraDirector {
  constructor(camera, controls) {
    this.camera = camera;
    this.controls = controls;
    this.fly = null;
    this.follow = null;
    this.cinematic = true;
    this.flatY = null; // en modo mapa 2D todo objetivo se proyecta a esta altura
    this._prevTarget = new THREE.Vector3();
    this.userActive = false;
    controls.addEventListener('start', () => {
      this.userActive = true;
      if (this.fly && this.fly.interruptible) this.cancelFly();
      if (this.follow && this.cinematic) {
        this.cinematic = false;
        if (this.onManual) this.onManual();
      }
    });
    controls.addEventListener('end', () => (this.userActive = false));
  }

  // Vuelo hacia (target, position) con arco vertical para distancias largas.
  flat(v) {
    if (this.flatY !== null) v.y = this.flatY;
    return v;
  }

  flyTo(target, position, duration = 2, opts = {}) {
    const c = this.camera;
    if (this.flatY !== null) {
      position = position.clone();
      target = target.clone();
      position.y = Math.max(8, position.y - target.y) + this.flatY;
      target.y = this.flatY;
    }
    const from = { p: c.position.clone(), t: this.controls.target.clone() };
    const dist = from.p.distanceTo(position);
    return new Promise((resolve) => {
      this.fly = {
        from, to: { p: position.clone(), t: target.clone() }, time: 0, duration,
        lift: opts.lift ?? Math.min(500, dist * 0.25), resolve, interruptible: opts.interruptible !== false,
      };
    });
  }
  cancelFly() {
    if (this.fly) {
      const r = this.fly.resolve;
      this.fly = null;
      r(false);
    }
  }

  // Vista oblicua de un punto a cierta distancia, con rumbo opcional.
  viewOf(point, dist = 60, pitch = 0.75, yaw = null) {
    const c = this.camera;
    const cur = new THREE.Vector3().subVectors(c.position, this.controls.target);
    const az = yaw ?? Math.atan2(cur.x, cur.z);
    const pos = new THREE.Vector3(
      point.x + Math.sin(az) * Math.cos(pitch) * dist,
      point.y + Math.sin(pitch) * dist,
      point.z + Math.cos(az) * Math.cos(pitch) * dist,
    );
    return pos;
  }

  startFollow(getTarget, opts = {}) {
    this.follow = {
      getTarget, manual: false, dist: opts.dist ?? 26, height: opts.height ?? 0.45, side: opts.side ?? 0.35,
      getDir: opts.getDir, smooth: opts.smooth ?? 2.5,
    };
    this._prevTarget.copy(this.flat(getTarget().clone()));
  }
  setFollowOpts(o) {
    if (this.follow) Object.assign(this.follow, o);
  }
  stopFollow() {
    this.follow = null;
  }

  update(dt) {
    const c = this.camera;
    const ctl = this.controls;
    if (this.fly) {
      const f = this.fly;
      f.time += dt;
      const k = Math.min(1, f.time / f.duration);
      const e = ease(k);
      ctl.target.lerpVectors(f.from.t, f.to.t, e);
      c.position.lerpVectors(f.from.p, f.to.p, e);
      c.position.y += Math.sin(Math.PI * e) * f.lift;
      if (k >= 1) {
        this.fly = null;
        f.resolve(true);
      }
      return;
    }
    if (this.follow) {
      const F = this.follow;
      const tgt = this.flat(F.getTarget().clone());
      const delta = new THREE.Vector3().subVectors(tgt, this._prevTarget);
      // El usuario puede orbitar: se desplaza cámara y objetivo juntos
      c.position.add(delta);
      ctl.target.add(delta);
      this._prevTarget.copy(tgt);
      // Corrige suavemente el objetivo hacia el vehículo
      const k = 1 - Math.exp(-dt * 6);
      const corr = new THREE.Vector3().subVectors(tgt, ctl.target).multiplyScalar(k);
      ctl.target.add(corr);
      c.position.add(corr);
      if (this.cinematic && F.getDir) {
        const dir = F.getDir();
        if (dir) {
          const back = dir.clone().setY(0).normalize();
          const side = new THREE.Vector3(-back.z, 0, back.x);
          // En el mapa 2D la cámara va más alta e inclinada (vista de mapa)
          const flat = this.flatY !== null;
          const dist = flat ? Math.max(F.dist * 2.8, 75) : F.dist;
          const h = flat ? 0.9 : F.height;
          const want = tgt
            .clone()
            .addScaledVector(back, -dist * Math.cos(h))
            .addScaledVector(side, dist * (flat ? 0.12 : F.side))
            .add(new THREE.Vector3(0, dist * Math.sin(h) + 2, 0));
          const s = 1 - Math.exp(-dt * F.smooth);
          c.position.lerp(want, s);
        }
      }
    }
  }
}
