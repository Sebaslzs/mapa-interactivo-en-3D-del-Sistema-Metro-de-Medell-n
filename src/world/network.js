// Red de transporte: trazados 3D de cada línea (centro de vía con altura),
// paradas con su posición sobre el trazado, pilonas del cable y circuitos
// de rutas alimentadoras. También ofrece un índice espacial para que la
// ciudad no construya encima de las vías.

import * as THREE from 'three';
import { LINES } from '../data/lines.js';
import { STATIONS } from '../data/stations.js';
import { FEEDERS } from '../data/feeders.js';
import { project } from '../geo.js';
import { Path } from '../util/path.js';
import { mulberry32 } from '../util/rand.js';

// Parámetros geométricos por modo (unidades de escena)
export const MODE_GEOM = {
  metro: { lane: 0.62, half: 1.45, lift: 0.35, elevH: 2.6 },
  tram: { lane: 0.5, half: 1.25, lift: 0.1 },
  bus: { lane: 0.95, half: 1.35, lift: 0.1 },
  lrt: { lane: 0.55, half: 1.3, lift: 0.1 },
  cable: { lane: 1.0, stationH: 2.8, floor: 1.9 },
  feeder: { lane: 0.3, half: 0.45, lift: 0.08 },
};

const V = (x, y, z) => new THREE.Vector3(x, y, z);

export class Network {
  constructor(terrain) {
    this.terrain = terrain;
    this.lines = {};
    this.complexes = {};
    this.feeders = [];
    this.segIndex = new Map();
    this.segCell = 40;
  }

  build(opts = {}) {
    for (const def of LINES) {
      const rt = def.mode === 'cable' ? this._buildCable(def) : this._buildLinear(def);
      this.lines[def.id] = rt;
      for (let i = 0; i < rt.stops.length; i++) {
        const stop = rt.stops[i];
        let cx = this.complexes[stop.key];
        if (!cx) {
          const info = STATIONS[stop.key] || { name: stop.key, pois: [], services: [], routes: [] };
          cx = this.complexes[stop.key] = {
            key: stop.key, name: info.name, info, stops: [], lines: [], modes: new Set(), pos: stop.pos.clone(),
            primaryMode: def.mode,
          };
        }
        cx.stops.push({ line: def.id, idx: i, pos: stop.pos });
        if (!cx.lines.includes(def.id)) cx.lines.push(def.id);
        cx.modes.add(def.mode);
        // Posición principal: se prioriza metro > tranvía > cable > bus > lrt
        const rank = { metro: 0, tram: 1, cable: 2, bus: 3, lrt: 4 };
        if (rank[def.mode] < rank[cx.primaryMode]) {
          cx.primaryMode = def.mode;
          cx.pos.copy(stop.pos);
        }
      }
    }
    for (const cx of Object.values(this.complexes)) {
      cx.construction = cx.lines.every((l) => this.lines[l].def.construction);
    }
    if (opts.feeders !== false) this._buildFeeders();
    this._indexSegments();
    return this;
  }

  // ---------- Líneas terrestres (metro, tranvía, bus, metro ligero) ----------
  _buildLinear(def) {
    const g = MODE_GEOM[def.mode];
    const ctrl = def.route.map((r) => {
      const p = project(r.lat, r.lon);
      return V(p.x, 0, p.z);
    });
    const curve = new THREE.CatmullRomCurve3(ctrl, false, 'centripetal', 0.5);
    const n = ctrl.length;
    const pts = [];
    const ctrlIdx = [];
    for (let k = 0; k < n - 1; k++) {
      const L = ctrl[k].distanceTo(ctrl[k + 1]);
      const m = Math.max(2, Math.ceil(L / 1.0));
      for (let q = 0; q < m; q++) {
        const t = (k + q / m) / (n - 1);
        if (q === 0) ctrlIdx[k] = pts.length;
        pts.push(curve.getPoint(t));
      }
    }
    ctrlIdx[n - 1] = pts.length;
    pts.push(ctrl[n - 1].clone());

    // Colas de maniobra en los extremos (los vehículos no se "aplastan" al final)
    const EXT = def.mode === 'bus' ? 8 : 14;
    const d0 = pts[0].clone().sub(pts[Math.min(3, pts.length - 1)]).setY(0).normalize();
    const d1 = pts[pts.length - 1].clone().sub(pts[Math.max(0, pts.length - 4)]).setY(0).normalize();
    for (let k = 1; k <= EXT; k++) {
      pts.unshift(pts[0].clone().addScaledVector(d0, 1));
      pts.push(pts[pts.length - 1].clone().addScaledVector(d1, 1));
    }
    for (let k = 0; k < ctrlIdx.length; k++) ctrlIdx[k] += EXT;

    // Desplazamiento lateral de toda la línea (líneas que comparten corredor)
    const shift = def.laneShift || 0;
    if (shift) {
      const shifted = pts.map((p, i) => {
        const a = pts[Math.max(0, i - 2)];
        const b = pts[Math.min(pts.length - 1, i + 2)];
        const t = V(b.x - a.x, 0, b.z - a.z).normalize();
        return V(p.x - t.z * shift, 0, p.z + t.x * shift);
      });
      for (let i = 0; i < pts.length; i++) pts[i].copy(shifted[i]);
    }

    // Alturas
    const T = this.terrain;
    const ground = new Float32Array(pts.length);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const a = pts[Math.max(0, i - 1)];
      const b = pts[Math.min(pts.length - 1, i + 1)];
      const tx = b.x - a.x;
      const tz = b.z - a.z;
      const tl = Math.hypot(tx, tz) || 1;
      const rx = (-tz / tl) * (g.half || 1);
      const rz = (tx / tl) * (g.half || 1);
      ground[i] = Math.max(T.heightAt(p.x, p.z), T.heightAt(p.x + rx, p.z + rz), T.heightAt(p.x - rx, p.z - rz));
    }
    const stopsRaw = def.route.map((r, k) => ({ r, k })).filter((o) => !o.r.wp);
    let target = new Float32Array(pts.length);
    if (def.mode === 'metro') {
      // Factor de elevación (viaducto) interpolado entre paradas
      const elevAt = new Float32Array(pts.length);
      for (let q = 0; q < stopsRaw.length - 1; q++) {
        const ia = ctrlIdx[stopsRaw[q].k];
        const ib = ctrlIdx[stopsRaw[q + 1].k];
        const ea = stopsRaw[q].r.elev ? 1 : 0;
        const eb = stopsRaw[q + 1].r.elev ? 1 : 0;
        for (let i = ia; i <= ib; i++) {
          const t = (i - ia) / Math.max(1, ib - ia);
          const s = t * t * (3 - 2 * t);
          elevAt[i] = ea + (eb - ea) * s;
        }
      }
      for (let i = 0; i < pts.length; i++) target[i] = ground[i] + g.lift + elevAt[i] * g.elevH;
      target = smoothArray(target, 22);
      for (let i = 0; i < pts.length; i++) target[i] = Math.max(target[i], ground[i] + g.lift);
      this._elevFactor = elevAt;
    } else {
      const lift = g.lift + (def.liftBias || 0);
      for (let i = 0; i < pts.length; i++) target[i] = ground[i] + lift;
      target = smoothArray(target, 3);
      for (let i = 0; i < pts.length; i++) target[i] = Math.max(target[i], ground[i] + g.lift * 0.8);
    }
    for (let i = 0; i < pts.length; i++) pts[i].y = target[i];
    const path = new Path(pts);

    const stops = stopsRaw.map(({ r, k }) => {
      const idx = ctrlIdx[k];
      return {
        key: r.key,
        s: path.cum[idx],
        pos: pts[idx].clone(),
        ground: ground[idx],
        elev: !!r.elev,
        closed: !!r.closed,
        underground: !!r.underground,
      };
    });
    const elevated = def.mode === 'metro' ? this._elevFactor : null;
    return {
      def, id: def.id, mode: def.mode, color: def.color, path, stops, ground, elevated,
      lane: g.lane, half: g.half,
    };
  }

  // ---------- Metrocable ----------
  _buildCable(def) {
    const T = this.terrain;
    const G = MODE_GEOM.cable;
    const st = def.route.map((r) => {
      const p = project(r.lat, r.lon);
      const gy = T.heightAt(p.x, p.z);
      return { key: r.key, x: p.x, z: p.z, ground: gy, y: gy + G.stationH };
    });
    // Longitud por tramo y reparto de pilonas (dato oficial)
    const spans = [];
    let total = 0;
    for (let i = 0; i < st.length - 1; i++) {
      const L = Math.hypot(st[i + 1].x - st[i].x, st[i + 1].z - st[i].z);
      spans.push(L);
      total += L;
    }
    const nP = def.pylons || Math.round(total / 12);
    const per = spans.map((L) => Math.max(1, Math.round((nP * L) / total)));
    // Soportes: estaciones + torres
    const sup = [];
    for (let i = 0; i < st.length; i++) {
      sup.push({ type: 'station', x: st[i].x, z: st[i].z, ground: st[i].ground, y: st[i].y, key: st[i].key });
      if (i < st.length - 1) {
        const k = per[i];
        for (let q = 1; q <= k; q++) {
          const t = q / (k + 1);
          const x = st[i].x + (st[i + 1].x - st[i].x) * t;
          const z = st[i].z + (st[i + 1].z - st[i].z) * t;
          const gy = T.heightAt(x, z);
          sup.push({ type: 'tower', x, z, ground: gy, y: gy + 3.2 });
        }
      }
    }
    // Asegurar gálibo: el cable debe pasar al menos 2.6 u sobre el terreno
    const clear = 3.4;
    for (let pass = 0; pass < 8; pass++) {
      for (let i = 0; i < sup.length - 1; i++) {
        const a = sup[i];
        const b = sup[i + 1];
        for (let q = 1; q < 12; q++) {
          const f = q / 12;
          const x = a.x + (b.x - a.x) * f;
          const z = a.z + (b.z - a.z) * f;
          const need = T.heightAt(x, z) + clear;
          const cy = a.y + (b.y - a.y) * f - sagAt(a, b, f);
          const def2 = need - cy;
          if (def2 > 0) {
            if (a.type === 'tower' && b.type === 'tower') {
              a.y += def2;
              b.y += def2;
            } else if (a.type === 'tower') a.y += def2 / Math.max(0.25, 1 - f);
            else if (b.type === 'tower') b.y += def2 / Math.max(0.25, f);
            else {
              // Tramo estación-estación sin torres: insertar una torre
              sup.splice(i + 1, 0, { type: 'tower', x, z, ground: T.heightAt(x, z), y: need + 0.5 });
              break;
            }
          }
        }
      }
    }
    for (const s of sup) {
      if (s.type === 'tower') s.height = s.y - s.ground;
    }
    // Trazado central (con catenaria leve) para ubicar góndolas
    const center = [];
    const supS = [];
    for (let i = 0; i < sup.length - 1; i++) {
      const a = sup[i];
      const b = sup[i + 1];
      const L = Math.hypot(b.x - a.x, b.z - a.z);
      const m = Math.max(2, Math.ceil(L / 1.5));
      for (let q = 0; q < m; q++) {
        const f = q / m;
        if (q === 0) supS.push(center.length);
        center.push(V(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f - sagAt(a, b, f), a.z + (b.z - a.z) * f));
      }
    }
    supS.push(center.length);
    const last = sup[sup.length - 1];
    center.push(V(last.x, last.y, last.z));
    const path = new Path(center);
    for (let i = 0; i < sup.length; i++) sup[i].s = path.cum[supS[i]];

    const stationSup = sup.filter((s) => s.type === 'station');
    const stops = stationSup.map((s) => ({
      key: s.key, s: s.s, pos: V(s.x, s.y, s.z), ground: s.ground, cableY: s.y,
    }));
    // Circuito cerrado para las cabinas: ida por la derecha, giro, regreso.
    const lane = G.lane;
    const fwd = [];
    const bwd = [];
    const tmp = new THREE.Vector3();
    const step = 1.0;
    for (let s = 0; s <= path.length; s += step) {
      fwd.push(path.laneAt(s, lane, new THREE.Vector3()));
    }
    fwd.push(path.laneAt(path.length, lane, new THREE.Vector3()));
    for (let s = path.length; s >= 0; s -= step) {
      bwd.push(path.laneAt(s, -lane, new THREE.Vector3()));
    }
    bwd.push(path.laneAt(0, -lane, new THREE.Vector3()));
    const endC = path.pointAt(path.length, new THREE.Vector3());
    const startC = path.pointAt(0, new THREE.Vector3());
    const endDir = path.tangentAt(path.length - 0.01, new THREE.Vector3()).setY(0).normalize();
    const startDir = path.tangentAt(0, new THREE.Vector3()).setY(0).normalize().negate();
    const loop = [...fwd, ...arc(endC, endDir, lane, 10), ...bwd, ...arc(startC, startDir, lane, 10)];
    const loopPath = new Path(loop, true);
    const fwdLen = new Path(fwd).length;
    const arcLen = Math.PI * lane;
    const bwdStart = fwdLen + arcLen;
    for (const stop of stops) {
      stop.loopFwd = stop.s * (fwdLen / path.length);
      stop.loopBwd = bwdStart + (path.length - stop.s) * (fwdLen / path.length);
    }
    void tmp;
    return {
      def, id: def.id, mode: 'cable', color: def.color, path, stops, supports: sup, loopPath,
      lane, half: 1.2, fwdLen, bwdStart,
    };
  }

  // ---------- Rutas alimentadoras (circuitos ilustrativos) ----------
  _buildFeeders() {
    const T = this.terrain;
    for (const f of FEEDERS) {
      const cx = this.complexes[f.station];
      if (!cx) continue;
      const rnd = mulberry32(f.seed * 7919);
      const o = cx.pos;
      // Dirección cuesta arriba (lejos del fondo del valle)
      let best = -Infinity;
      let dir = 0;
      for (let a = 0; a < 16; a++) {
        const ang = (a / 16) * Math.PI * 2;
        const h = T.heightAt(o.x + Math.cos(ang) * f.size * 0.6, o.z + Math.sin(ang) * f.size * 0.6);
        const score = h + rnd() * 2;
        if (score > best) {
          best = score;
          dir = ang;
        }
      }
      const R = f.size * 0.42;
      const c = V(o.x + Math.cos(dir) * (R + 6), 0, o.z + Math.sin(dir) * (R + 6));
      const ctrl = [];
      const nPts = 9;
      const start = dir + Math.PI; // punto del círculo más cercano a la estación
      for (let i = 0; i < nPts; i++) {
        const ang = start + (i / nPts) * Math.PI * 2;
        const rr = R * (0.75 + rnd() * 0.5) * (i === 0 ? 0.8 : 1);
        ctrl.push(V(c.x + Math.cos(ang) * rr, 0, c.z + Math.sin(ang) * rr * (0.8 + rnd() * 0.4)));
      }
      ctrl[0].set(o.x + Math.cos(dir) * 5, 0, o.z + Math.sin(dir) * 5);
      const curve = new THREE.CatmullRomCurve3(ctrl, true, 'centripetal');
      const len = curve.getLength();
      const pts = curve.getSpacedPoints(Math.ceil(len / 1.0));
      pts.pop();
      for (const p of pts) p.y = T.heightAt(p.x, p.z) + MODE_GEOM.feeder.lift;
      const ys = smoothArray(Float32Array.from(pts.map((p) => p.y)), 2);
      pts.forEach((p, i) => (p.y = Math.max(ys[i], T.heightAt(p.x, p.z) + 0.06)));
      const path = new Path([...pts, pts[0].clone()], true);
      this.feeders.push({ ...f, path, complex: cx.key, color: '#56B04B' });
    }
  }

  // ---------- Índice espacial ----------
  _indexSegments() {
    const add = (a, b, r) => {
      const minx = Math.min(a.x, b.x) - r;
      const maxx = Math.max(a.x, b.x) + r;
      const minz = Math.min(a.z, b.z) - r;
      const maxz = Math.max(a.z, b.z) + r;
      const C = this.segCell;
      for (let i = Math.floor(minx / C); i <= Math.floor(maxx / C); i++) {
        for (let j = Math.floor(minz / C); j <= Math.floor(maxz / C); j++) {
          const k = i * 73856093 ^ j * 19349663;
          let list = this.segIndex.get(k);
          if (!list) this.segIndex.set(k, (list = []));
          list.push({ ax: a.x, az: a.z, bx: b.x, bz: b.z, r });
        }
      }
    };
    for (const rt of Object.values(this.lines)) {
      const P = rt.path.points;
      const r = rt.mode === 'cable' ? 1.6 : (rt.half || 1.3) + 0.6;
      const stepN = 3;
      for (let i = 0; i < P.length - 1; i += stepN) add(P[i], P[Math.min(P.length - 1, i + stepN)], r);
      for (const s of rt.stops) add(s.pos, s.pos, rt.mode === 'cable' ? 6 : 8);
    }
    for (const f of this.feeders) {
      const P = f.path.points;
      for (let i = 0; i < P.length - 1; i += 3) add(P[i], P[Math.min(P.length - 1, i + 3)], 0.9);
    }
    // Río
  }

  distToNetwork(x, z) {
    const C = this.segCell;
    const k = Math.floor(x / C) * 73856093 ^ Math.floor(z / C) * 19349663;
    const list = this.segIndex.get(k);
    if (!list) return Infinity;
    let best = Infinity;
    for (const s of list) {
      const dx = s.bx - s.ax;
      const dz = s.bz - s.az;
      const l2 = dx * dx + dz * dz;
      let t = l2 > 0 ? ((x - s.ax) * dx + (z - s.az) * dz) / l2 : 0;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const d = Math.hypot(s.ax + dx * t - x, s.az + dz * t - z) - s.r;
      if (d < best) best = d;
    }
    return best;
  }
}

function sagAt(a, b, f) {
  const L = Math.hypot(b.x - a.x, b.z - a.z);
  return 0.012 * L * 4 * f * (1 - f);
}

function arc(center, dir, r, n) {
  // Semicírculo alrededor de la rueda motriz de una estación terminal
  const out = [];
  const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
  for (let i = 1; i < n; i++) {
    const a = (i / n) * Math.PI;
    out.push(
      new THREE.Vector3(
        center.x + right.x * Math.cos(a) * r + dir.x * Math.sin(a) * r,
        center.y,
        center.z + right.z * Math.cos(a) * r + dir.z * Math.sin(a) * r,
      ),
    );
  }
  return out;
}

export function smoothArray(arr, win) {
  const n = arr.length;
  const out = new Float32Array(n);
  const pre = new Float64Array(n + 1);
  for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + arr[i];
  for (let i = 0; i < n; i++) {
    const a = Math.max(0, i - win);
    const b = Math.min(n - 1, i + win);
    out[i] = (pre[b + 1] - pre[a]) / (b - a + 1);
  }
  return out;
}
