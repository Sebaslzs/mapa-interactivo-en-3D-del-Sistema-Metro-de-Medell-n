// Simulación del recorrido de un pasajero: vista previa de la ruta con la
// cámara, caminata a la estación, validación de la tarjeta Cívica, espera y
// abordaje, viaje parada a parada, transbordos y llegada.

import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { JOURNEY } from '../config.js';
import { MODE_GEOM } from '../world/network.js';
import { Path, orientQuat } from '../util/path.js';
import { makePerson, animatePerson, AVATARS } from '../models/people.js';
import { VehicleRig, Swing, gondolaMatrix, cableSpeedFactor } from './traffic.js';
import { gondolaGeometry } from '../models/vehicles.js';
import { MAT } from '../util/builder.js';

const _v = new THREE.Vector3();
const _w = new THREE.Vector3();

export class Journey {
  constructor(app) {
    this.app = app;
    this.active = false;
    this.tasks = [];
    this.speed = 1;
    this.paused = false;
    this.time = 0;
  }

  // ---------------- utilidades de tiempo ----------------
  frame(fn) {
    return new Promise((resolve) => {
      if (this.cancelled) return resolve(false);
      this.tasks.push({ fn, resolve });
    });
  }
  wait(sec) {
    let acc = 0;
    return this.frame((dt) => (acc += dt) >= sec);
  }
  update(realDt) {
    if (!this.active) return;
    const dt = this.paused ? 0 : realDt * this.speed;
    this.time += dt;
    const done = [];
    for (const t of this.tasks) {
      if (t.fn(dt, realDt)) done.push(t);
    }
    if (done.length) {
      this.tasks = this.tasks.filter((t) => !done.includes(t));
      for (const t of done) t.resolve(true);
    }
    if (this.avatar) animatePerson(this.avatar, this.time, this.walking, 1);
    if (this.markerAnchor && this.markerTarget) {
      this.markerTarget(this.markerAnchor.position);
    }
    if (this.routeMat) this.routeMat.opacity = 0.35 + Math.sin(performance.now() / 300) * 0.2;
  }

  // ---------------- control ----------------
  async start(route, avatarKey) {
    if (this.active) this.cancel();
    // Deja que la corrutina del viaje anterior termine de desenrollarse (ve
    // cancelled = true) antes de reiniciar el estado para el nuevo viaje.
    await new Promise((r) => setTimeout(r, 0));
    const app = this.app;
    this.route = route;
    this.active = true;
    this.finished = false;
    this.cancelled = false;
    this.tasks = [];
    this.time = 0;
    this.paused = false;
    this.skipPreviewFlag = false;
    this.elapsedMin = 0;
    this.avatarKey = avatarKey;
    this.avatar = makePerson(AVATARS[avatarKey]);
    this.avatar.scale.multiplyScalar(1.5);
    app.scene.add(this.avatar);
    this.avatar.visible = false;
    this._buildRouteGlow();
    this._buildMarker();
    app.ui.journeyStarted(route);
    app.director.stopFollow();
    try {
      await this._run();
    } catch (e) {
      console.error(e);
    }
  }

  cancel() {
    if (!this.active) return;
    this.cancelled = true;
    for (const t of this.tasks) t.resolve(false);
    this.tasks = [];
    this._cleanup();
    this.app.ui.journeyEnded(false);
  }

  _cleanup() {
    const app = this.app;
    this.active = false;
    app.director.stopFollow();
    if (this.avatar) app.scene.remove(this.avatar);
    this.avatar = null;
    if (this.vehicle) this._removeVehicle(this.vehicle);
    this.vehicle = null;
    for (const v of this.departing || []) this._removeVehicle(v);
    this.departing = [];
    if (this.routeGroup) {
      app.scene.remove(this.routeGroup);
      this.routeGroup.traverse((o) => o.geometry && o.geometry.dispose());
    }
    this.routeGroup = null;
    this.routeMat = null;
    if (this.markerAnchor) {
      this.markerAnchor.remove(this.markerObj);
      app.scene.remove(this.markerAnchor);
      this.markerObj.element.remove();
    }
    this.markerAnchor = null;
    this.markerTarget = null;
    app.setRouteFocus(null);
  }

  // ---------------- geometría auxiliar ----------------
  lineOf(leg) {
    return this.app.network.lines[leg.line];
  }

  // Punto del andén donde espera el pasajero.
  platformPoint(rt, idx, dir, target = new THREE.Vector3()) {
    const st = rt.stops[idx];
    const g = MODE_GEOM[rt.mode];
    if (rt.mode === 'cable') {
      rt.path.laneAt(st.s, (rt.lane + 0.75) * dir, target);
      target.y = st.cableY - MODE_GEOM.cable.floor + 0.18;
      return target;
    }
    let lat = 0;
    let dy = 0.3;
    if (rt.mode === 'metro') lat = g.lane + 1.0;
    else if (rt.mode === 'tram') (lat = g.lane + 0.75), (dy = 0.2);
    else if (rt.mode === 'lrt') (lat = g.lane + 0.8), (dy = 0.2);
    else if (rt.mode === 'bus') {
      if (rt.id === 'O') (lat = g.half + 0.55), (dy = 0.15);
      else (lat = 0), (dy = 0.25);
    }
    rt.path.laneAt(st.s, lat * dir, target);
    target.y = st.pos.y + dy;
    return target;
  }

  doorPoint(rt, s, dir, target = new THREE.Vector3()) {
    const g = MODE_GEOM[rt.mode];
    let lat = g.lane + 0.35;
    if (rt.mode === 'bus' && rt.id !== 'O') lat = g.lane - 0.35;
    rt.path.laneAt(s, lat * dir, target);
    const st = rt.stops.reduce((a, b) => (Math.abs(b.s - s) < Math.abs(a.s - s) ? b : a));
    target.y = rt.mode === 'cable' ? st.cableY - MODE_GEOM.cable.floor + 0.18 : st.pos.y + (rt.mode === 'metro' ? 0.3 : 0.2);
    return target;
  }

  groundNear(rt, idx, dir, dist = 5) {
    const st = rt.stops[idx];
    const T = this.app.terrain;
    const p = rt.path.laneAt(st.s, (rt.mode === 'cable' ? rt.lane + 3.2 : (rt.half || 1.3) + dist) * dir, new THREE.Vector3());
    p.y = T.heightAt(p.x, p.z);
    return p;
  }

  walkPath(points) {
    // Densifica y apoya en el terreno los tramos a nivel de suelo
    const T = this.app.terrain;
    const out = [];
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i];
      const b = points[i + 1];
      const n = Math.max(1, Math.ceil(a.distanceTo(b) / 1.5));
      for (let k = 0; k < n; k++) {
        const p = a.clone().lerp(b, k / n);
        if (a.ground && b.ground) p.y = T.heightAt(p.x, p.z);
        out.push(p);
      }
    }
    out.push(points[points.length - 1].clone());
    return new Path(out);
  }

  walk(points, speedMul = 1) {
    const path = this.walkPath(points);
    let s = 0;
    const av = this.avatar;
    av.visible = true;
    this.walking = true;
    return this.frame((dt) => {
      s += JOURNEY.walk * speedMul * dt;
      path.pointAt(s, av.position);
      path.tangentAt(s, _v);
      if (_v.lengthSq() > 0.001) orientQuat(_v, av.quaternion, true);
      if (s >= path.length) {
        this.walking = false;
        return true;
      }
      return false;
    });
  }

  // ---------------- flujo principal ----------------
  async _run() {
    const app = this.app;
    const R = this.route;
    await this._preview();
    if (this.cancelled) return;
    let prevEnd = null;
    for (let li = 0; li < R.legs.length; li++) {
      const leg = R.legs[li];
      const rt = this.lineOf(leg);
      const plat = this.platformPoint(rt, leg.from, leg.dir);
      app.ui.journeyLeg(li, leg);
      if (li === 0) {
        const entry = this.groundNear(rt, leg.from, leg.dir, 6);
        entry.ground = true;
        const foot = this.groundNear(rt, leg.from, leg.dir, 2.2);
        foot.ground = true;
        this.avatar.position.copy(entry);
        this.avatar.visible = true;
        this.markerTarget = (p) => p.copy(this.avatar.position).y += 1.6;
        const view = app.director.viewOf(entry, 26, 0.55);
        await app.director.flyTo(entry, view, 1.8, { interruptible: false });
        if (this.cancelled) return;
        app.director.startFollow(() => this.avatar.position, { dist: 16, height: 0.5, side: 0.4, getDir: () => this._avatarDir() });
        app.ui.journeyStatus(`Caminando hacia la estación ${app.network.complexes[leg.fromKey].name}`);
        await this.walk([entry, foot, plat]);
        if (this.cancelled) return;
        await this._validate();
      } else {
        // Transbordo
        const prevRt = this.lineOf(R.legs[li - 1]);
        const pl = R.legs[li - 1];
        app.ui.journeyTransfer(prevRt, rt, app.network.complexes[leg.fromKey].name);
        const ga = this.groundNear(prevRt, pl.to, pl.dir, 2.2);
        ga.ground = true;
        const gb = this.groundNear(rt, leg.from, leg.dir, 2.2);
        gb.ground = true;
        app.director.startFollow(() => this.avatar.position, { dist: 18, height: 0.55, side: 0.4, getDir: () => this._avatarDir() });
        this.markerTarget = (p) => p.copy(this.avatar.position).y += 1.6;
        await this.walk([prevEnd, ga, gb, plat]);
        if (this.cancelled) return;
        this.elapsedMin += 2 + (rt.def.headway || 3) / 2;
        await this._validate(true);
      }
      if (this.cancelled) return;
      await (rt.mode === 'cable' ? this._rideCable(leg, rt, plat) : this._rideLinear(leg, rt, plat));
      if (this.cancelled) return;
      prevEnd = this.platformPoint(rt, leg.to, leg.dir);
    }
    // Llegada
    const last = R.legs[R.legs.length - 1];
    const lrt = this.lineOf(last);
    const exit = this.groundNear(lrt, last.to, last.dir, 6);
    exit.ground = true;
    const foot = this.groundNear(lrt, last.to, last.dir, 2.2);
    foot.ground = true;
    app.ui.journeyStatus(`Saliendo de la estación ${app.network.complexes[last.toKey].name}`);
    await this.walk([prevEnd, foot, exit]);
    if (this.cancelled) return;
    this.elapsedMin = R.minutes;
    this._celebrate(exit);
    app.director.stopFollow();
    const view = app.director.viewOf(exit, 30, 0.5);
    app.director.flyTo(exit, view, 2);
    app.ui.journeyArrived(R, this.elapsedMin);
    await this.wait(1.5);
    this.active = true; // se mantiene visible hasta que el usuario cierre
    this.finished = true;
  }

  _avatarDir() {
    return _w.set(1, 0, 0).applyQuaternion(this.avatar.quaternion);
  }

  async _validate(transfer = false) {
    this.app.ui.journeyStatus(transfer ? 'Transbordo integrado con la tarjeta Cívica' : 'Validando la tarjeta Cívica en el torniquete…');
    const p = this.avatar.position.clone();
    p.y += 1.2;
    for (let i = 0; i < 18; i++) {
      this.app.particles.emit(p, new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 3, (Math.random() - 0.5) * 3), i % 2 ? '#6DB843' : '#ffffff', 0.7, 0.7, 2);
    }
    this.app.ui.civicaPop();
    await this.wait(0.9);
  }

  // ---------------- viaje en vehículo sobre vía ----------------
  async _rideLinear(leg, rt, plat) {
    const app = this.app;
    const P = JOURNEY[rt.mode] || JOURNEY.bus;
    const dir = leg.dir;
    const stops = rt.stops;
    const rig = new VehicleRig(app.traffic.template(rt));
    rig.group.name = 'journey-vehicle';
    app.scene.add(rig.group);
    const minS = rig.total / 2 + 0.5;
    const maxS = rt.path.length - rig.total / 2 - 0.5;
    const s0 = stops[leg.from].s;
    let start = s0 - dir * 55;
    start = Math.max(minS, Math.min(maxS, start));
    const veh = { rig, rt, s: start, dir, speed: P.vmax * 0.6, kind: 'linear' };
    this.vehicle = veh;
    rig.place(rt.path, veh.s, dir, rt.lane);
    app.ui.journeyStatus(`Esperando ${rt.def.name} en el andén (frecuencia ${rt.def.facts.frecuencia})`);
    app.director.startFollow(() => this.avatar.position, { dist: 20, height: 0.35, side: 0.8, getDir: () => rt.path.tangentAt(s0, _w).multiplyScalar(dir) });
    await this._driveTo(veh, s0, P);
    if (this.cancelled) return;
    // Abordar
    const door = this.doorPoint(rt, veh.s, dir);
    app.ui.journeyStatus(`Abordando ${rt.def.name} hacia ${app.network.complexes[stops[leg.to].key].name}`);
    await this.walk([this.avatar.position.clone(), door], 0.8);
    if (this.cancelled) return;
    this.avatar.visible = false;
    this.markerTarget = (p) => p.copy(rig.cars[0].position).y += 1.9;
    app.director.startFollow(() => rig.cars[Math.floor(rig.cars.length / 2)].position, {
      dist: rt.mode === 'metro' ? 34 : 24, height: 0.42, side: 0.3, getDir: () => rt.path.tangentAt(veh.s, _w).multiplyScalar(veh.dir),
    });
    await this.wait(P.dwell * 0.6);
    // Parada a parada
    const legStart = this.elapsedMin;
    const sFrom = stops[leg.from].s;
    const sTo = stops[leg.to].s;
    const all = leg.all;
    for (let k = 1; k < all.length; k++) {
      const idx = all[k];
      const st = stops[idx];
      const next = app.network.complexes[st.key].name + (st.closed ? ' (fuera de servicio, no se detiene)' : '');
      app.ui.journeyRide({ rt, leg, k, next, progressFn: () => Math.abs(veh.s - sFrom) / Math.abs(sTo - sFrom) });
      const through = st.closed;
      await this._driveTo(veh, st.s, P, through, () => {
        this.elapsedMin = legStart + (leg.minutes * Math.abs(veh.s - sFrom)) / Math.abs(sTo - sFrom || 1);
      });
      if (this.cancelled) return;
      if (!through && k < all.length - 1) {
        app.ui.journeyStatus(`Parada en ${next}`);
        app.ui.stationToast(next, rt.color);
        await this.wait(P.dwell);
      }
    }
    this.elapsedMin = legStart + leg.minutes;
    // Descender
    const door2 = this.doorPoint(rt, veh.s, dir);
    const plat2 = this.platformPoint(rt, leg.to, dir);
    this.avatar.position.copy(door2);
    this.avatar.visible = true;
    this.markerTarget = (p) => p.copy(this.avatar.position).y += 1.6;
    app.director.startFollow(() => this.avatar.position, { dist: 16, height: 0.5, side: 0.5, getDir: () => this._avatarDir() });
    app.ui.journeyStatus(`Llegaste a ${app.network.complexes[stops[leg.to].key].name}`);
    await this.walk([door2, plat2], 0.8);
    this._depart(veh, P);
    this.vehicle = null;
  }

  _driveTo(veh, target, P, through = false, onStep) {
    const rt = veh.rt;
    const app = this.app;
    return this.frame((dt) => {
      const dist = Math.abs(target - veh.s);
      const vT = through ? P.vmax * 0.5 : Math.min(P.vmax, Math.sqrt(2 * P.accel * dist));
      veh.speed = veh.speed < vT ? Math.min(vT, veh.speed + P.accel * dt) : vT;
      const step = veh.speed * dt;
      let done = false;
      if (step >= dist) {
        veh.s = target;
        if (!through) veh.speed = 0;
        done = true;
      } else veh.s += step * veh.dir;
      veh.rig.place(rt.path, veh.s, veh.dir, rt.lane);
      if (onStep) onStep();
      if (veh.rig.kind === 'train' && veh.speed > P.vmax * 0.45 && dt > 0) {
        for (let i = 0; i < 2; i++) {
          veh.rig.rear(rt.path, veh.s, veh.dir, rt.lane, _v);
          _v.y += 0.3 + Math.random() * 0.5;
          app.particles.emit(_v, _w.set((Math.random() - 0.5), Math.random() * 0.6, (Math.random() - 0.5)), i ? rt.color : '#ffffff', 1.1, 0.6);
        }
      }
      return done;
    });
  }

  _depart(veh, P) {
    this.departing = this.departing || [];
    this.departing.push(veh);
    const rt = veh.rt;
    let t = 0;
    const maxS = rt.path.length - veh.rig.total / 2;
    const minS = veh.rig.total / 2;
    this.frame((dt) => {
      t += dt;
      veh.speed = Math.min(P.vmax, veh.speed + P.accel * dt);
      veh.s = Math.max(minS, Math.min(maxS, veh.s + veh.speed * dt * veh.dir));
      veh.rig.place(rt.path, veh.s, veh.dir, rt.lane);
      if (t > 5) {
        this._removeVehicle(veh);
        this.departing = this.departing.filter((d) => d !== veh);
        return true;
      }
      return false;
    });
  }

  _removeVehicle(veh) {
    if (veh.kind === 'gondola') this.app.scene.remove(veh.mesh);
    else if (veh.rig) this.app.scene.remove(veh.rig.group);
  }

  // ---------------- viaje en Metrocable ----------------
  async _rideCable(leg, rt, plat) {
    const app = this.app;
    const P = JOURNEY.cable;
    const dir = leg.dir;
    const stA = rt.stops[leg.from];
    const stB = rt.stops[leg.to];
    const L = rt.loopPath.length;
    const sA = dir > 0 ? stA.loopFwd : stA.loopBwd;
    let sB = dir > 0 ? stB.loopFwd : stB.loopBwd;
    if (sB < sA) sB += L;
    const mesh = new THREE.Mesh(gondolaGeometry(rt.color), MAT.solid);
    mesh.castShadow = true;
    mesh.matrixAutoUpdate = false;
    app.scene.add(mesh);
    const veh = { kind: 'gondola', mesh, s: sA - 14, sw: new Swing(3), v: 0 };
    this.vehicle = veh;
    const place = () => {
      const slope = gondolaMatrix(rt.loopPath, ((veh.s % L) + L) % L, veh.sw, mesh.matrix);
      mesh.matrixWorldNeedsUpdate = true;
      return slope;
    };
    place();
    app.ui.journeyStatus(`Esperando la telecabina de la ${rt.def.name}`);
    app.director.startFollow(() => this.avatar.position, { dist: 16, height: 0.4, side: 0.9, getDir: () => rt.path.tangentAt(stA.s, _w).multiplyScalar(dir) });
    const move = (target, stopAtEnd, onStep) =>
      this.frame((dt) => {
        const f = cableSpeedFactor(rt, ((veh.s % L) + L) % L, P.stationFactor);
        let v = P.v * f;
        const dist = target - veh.s;
        if (stopAtEnd) v = Math.min(v, Math.max(0.4, dist * 1.2));
        veh.v = v;
        const step = v * dt;
        let done = false;
        if (step >= dist) {
          veh.s = target;
          done = true;
        } else veh.s += step;
        const slope = place();
        veh.sw.step(dt, v, slope, this.time);
        if (onStep) onStep();
        return done;
      });
    await move(sA, true);
    if (this.cancelled) return;
    // Abordar (la cabina avanza lento dentro de la estación)
    app.ui.journeyStatus(`Abordando la telecabina hacia ${app.network.complexes[stB.key].name}`);
    const door = new THREE.Vector3();
    rt.loopPath.pointAt(((veh.s % L) + L) % L, door);
    door.y = stA.cableY - MODE_GEOM.cable.floor + 0.18;
    await this.walk([this.avatar.position.clone(), door], 0.7);
    if (this.cancelled) return;
    this.avatar.visible = false;
    this.markerTarget = (p) => p.setFromMatrixPosition(mesh.matrix).y += 0.6;
    const gpos = new THREE.Vector3();
    app.director.startFollow(() => gpos.setFromMatrixPosition(mesh.matrix).add(_v.set(0, -1.1, 0)), {
      dist: 17, height: 0.18, side: 1.1, smooth: 1.6, getDir: () => rt.loopPath.tangentAt(((veh.s % L) + L) % L, _w),
    });
    const legStart = this.elapsedMin;
    let lastIdx = leg.from;
    await move(sB, true, () => {
      const frac = (veh.s - sA) / (sB - sA);
      this.elapsedMin = legStart + leg.minutes * frac;
      // ¿Por qué estación va?
      for (const idx of leg.all) {
        const st = rt.stops[idx];
        let zs = dir > 0 ? st.loopFwd : st.loopBwd;
        if (zs < sA - 0.1) zs += L;
        if (idx !== lastIdx && Math.abs(veh.s - zs) < 1.5) {
          lastIdx = idx;
          const nm = app.network.complexes[st.key].name;
          if (idx !== leg.to) {
            app.ui.stationToast(nm, rt.color);
            app.ui.journeyStatus(`Pasando por la estación ${nm}`);
          }
        }
      }
      const nextIdx = leg.all.find((idx) => {
        const st = rt.stops[idx];
        let zs = dir > 0 ? st.loopFwd : st.loopBwd;
        if (zs < sA - 0.1) zs += L;
        return zs > veh.s + 1.5;
      });
      const next = app.network.complexes[rt.stops[nextIdx ?? leg.to].key].name;
      app.ui.journeyRideCable({ rt, leg, next, progress: frac });
    });
    if (this.cancelled) return;
    this.elapsedMin = legStart + leg.minutes;
    // Descender
    const out = new THREE.Vector3().setFromMatrixPosition(mesh.matrix);
    out.y = stB.cableY - MODE_GEOM.cable.floor + 0.18;
    const plat2 = this.platformPoint(rt, leg.to, dir);
    this.avatar.position.copy(out);
    this.avatar.visible = true;
    this.markerTarget = (p) => p.copy(this.avatar.position).y += 1.6;
    app.director.startFollow(() => this.avatar.position, { dist: 16, height: 0.5, side: 0.5, getDir: () => this._avatarDir() });
    app.ui.journeyStatus(`Llegaste a ${app.network.complexes[stB.key].name}`);
    await this.walk([out, plat2], 0.8);
    // La cabina sigue su camino y desaparece
    this.departing = this.departing || [];
    this.departing.push(veh);
    let t = 0;
    this.frame((dt) => {
      t += dt;
      veh.s += P.v * dt;
      const slope = place();
      veh.sw.step(dt, P.v, slope, this.time);
      if (t > 4) {
        this._removeVehicle(veh);
        return true;
      }
      return false;
    });
    this.vehicle = null;
  }

  // ---------------- vista previa de la ruta ----------------
  async _preview() {
    const app = this.app;
    const pts = [];
    for (const leg of this.route.legs) {
      const rt = this.lineOf(leg);
      const a = rt.stops[leg.from].s;
      const b = rt.stops[leg.to].s;
      const n = Math.max(2, Math.ceil(Math.abs(b - a) / 4));
      for (let i = 0; i <= n; i++) pts.push(rt.path.pointAt(a + ((b - a) * i) / n));
    }
    const path = new Path(pts);
    const box = new THREE.Box3().setFromPoints(pts);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3()).length();
    app.ui.journeyStatus('Vista previa de la ruta');
    app.ui.showSkipPreview(true);
    const overview = new THREE.Vector3(center.x, center.y + Math.max(160, size * 0.75), center.z + Math.max(150, size * 0.6));
    await app.director.flyTo(center, overview, 2.0, { interruptible: false });
    if (this.cancelled || this.skipPreviewFlag) return app.ui.showSkipPreview(false);
    const dur = Math.min(11, Math.max(5, path.length / 170));
    let t = 0;
    const cam = app.camera;
    const ctl = app.controls;
    const tgt = new THREE.Vector3();
    const dirv = new THREE.Vector3();
    const want = new THREE.Vector3();
    await this.frame((dt, realDt) => {
      t += realDt;
      const k = Math.min(1, t / dur);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      const s = e * path.length;
      path.pointAt(s, tgt);
      path.pointAt(Math.min(path.length, s + 25), want);
      dirv.subVectors(want, path.pointAt(Math.max(0, s - 25), _v)).setY(0);
      if (dirv.lengthSq() < 1e-4) dirv.set(0, 0, -1);
      dirv.normalize();
      want.copy(tgt).addScaledVector(dirv, -110).add(_v.set(-dirv.z * 40, 85, dirv.x * 40));
      const sm = 1 - Math.exp(-realDt * 2.2);
      ctl.target.lerp(tgt, sm);
      cam.position.lerp(want, sm);
      return k >= 1 || this.skipPreviewFlag || this.cancelled;
    });
    app.ui.showSkipPreview(false);
  }

  skipPreview() {
    this.skipPreviewFlag = true;
  }

  // ---------------- resaltado de la ruta ----------------
  _buildRouteGlow() {
    const app = this.app;
    const g = new THREE.Group();
    g.name = 'route-glow';
    this.routeMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.7, depthWrite: false });
    for (const leg of this.route.legs) {
      const rt = this.lineOf(leg);
      const a = rt.stops[leg.from].s;
      const b = rt.stops[leg.to].s;
      const n = Math.max(3, Math.ceil(Math.abs(b - a) / 3));
      const pts = [];
      for (let i = 0; i <= n; i++) {
        const p = rt.path.pointAt(a + ((b - a) * i) / n);
        p.y += rt.mode === 'cable' ? -0.2 : 1.3;
        pts.push(p);
      }
      const curve = new THREE.CatmullRomCurve3(pts);
      const thin = rt.mode === 'cable' ? 0.09 : 0.16;
      const tube = new THREE.TubeGeometry(curve, n * 2, thin, 5, false);
      const core = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color: rt.color, toneMapped: false }));
      const halo = new THREE.Mesh(new THREE.TubeGeometry(curve, n * 2, thin * 2.2, 6, false), this.routeMat);
      g.add(core, halo);
    }
    app.scene.add(g);
    this.routeGroup = g;
    app.setRouteFocus(this.route);
  }

  _buildMarker() {
    const el = document.createElement('div');
    el.className = 'you-marker';
    const src = this.app.ui.portraits?.[this.avatarKey];
    el.innerHTML = `${src ? `<img src="${src}" alt="">` : ''}<span>Tú</span>`;
    this.markerObj = new CSS2DObject(el);
    this.markerAnchor = new THREE.Object3D();
    this.markerAnchor.add(this.markerObj);
    this.app.scene.add(this.markerAnchor);
  }

  _celebrate(p) {
    const cols = ['#6DB843', '#0E5AA7', '#F28C1E', '#E6007E', '#FFC20E', '#ffffff', '#6F2C91'];
    const c = p.clone();
    c.y += 1.5;
    for (let i = 0; i < 160; i++) {
      this.app.particles.emit(c, new THREE.Vector3((Math.random() - 0.5) * 9, 4 + Math.random() * 7, (Math.random() - 0.5) * 9), cols[i % cols.length], 0.8, 2.2, 7);
    }
  }

  finish() {
    for (const t of this.tasks) t.resolve(false);
    this.tasks = [];
    this.cancelled = true;
    this._cleanup();
  }
}
