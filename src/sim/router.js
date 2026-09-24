// Planificador de rutas sobre la red: nodos = (línea, parada); aristas por
// tramo (tiempo oficial de recorrido prorrateado por distancia) y por
// transbordo dentro de la misma estación (caminata + media frecuencia).

export class Router {
  constructor(network) {
    this.net = network;
  }

  _graph(includeE) {
    const adj = new Map();
    const add = (a, b, w, kind) => {
      if (!adj.has(a)) adj.set(a, []);
      adj.get(a).push({ to: b, w, kind });
    };
    const lines = Object.values(this.net.lines).filter((l) => includeE || !l.def.construction);
    for (const rt of lines) {
      const total = rt.path.length;
      const valid = rt.stops.map((s, i) => ({ s, i })).filter((o) => !o.s.closed);
      for (let k = 0; k < valid.length - 1; k++) {
        const a = valid[k];
        const b = valid[k + 1];
        const w = (rt.def.minutes * (b.s.s - a.s.s)) / total;
        add(`${rt.id}|${a.i}`, `${rt.id}|${b.i}`, w, 'ride');
        add(`${rt.id}|${b.i}`, `${rt.id}|${a.i}`, w, 'ride');
      }
    }
    // Transbordos
    for (const cx of Object.values(this.net.complexes)) {
      const nodes = cx.stops.filter((s) => lines.some((l) => l.id === s.line) && !this.net.lines[s.line].stops[s.idx].closed);
      for (const a of nodes) {
        for (const b of nodes) {
          if (a.line === b.line) continue;
          const la = this.net.lines[a.line];
          const lb = this.net.lines[b.line];
          const dist = a.pos.distanceTo(b.pos);
          const walk = 1.5 + dist * 0.035 + (la.mode !== lb.mode ? 1 : 0);
          const wait = (lb.def.headway || 3) / 2;
          add(`${a.line}|${a.idx}`, `${b.line}|${b.idx}`, walk + wait + 1.5, 'transfer');
        }
      }
    }
    return adj;
  }

  route(fromKey, toKey, { includeE = true } = {}) {
    if (fromKey === toKey) return null;
    const adj = this._graph(includeE);
    const from = this.net.complexes[fromKey];
    const to = this.net.complexes[toKey];
    if (!from || !to) return null;
    const dist = new Map();
    const prev = new Map();
    const heap = new MinHeap();
    const lineOk = (id) => includeE || !this.net.lines[id].def.construction;
    for (const s of from.stops) {
      if (!lineOk(s.line) || this.net.lines[s.line].stops[s.idx].closed) continue;
      const k = `${s.line}|${s.idx}`;
      const w0 = (this.net.lines[s.line].def.headway || 3) / 2;
      dist.set(k, w0);
      heap.push(k, w0);
    }
    const targets = new Set(to.stops.filter((s) => lineOk(s.line)).map((s) => `${s.line}|${s.idx}`));
    let found = null;
    while (heap.size) {
      const { key, pri } = heap.pop();
      if (pri > (dist.get(key) ?? Infinity)) continue;
      if (targets.has(key)) {
        found = key;
        break;
      }
      for (const e of adj.get(key) || []) {
        const nd = pri + e.w;
        if (nd < (dist.get(e.to) ?? Infinity)) {
          dist.set(e.to, nd);
          prev.set(e.to, key);
          heap.push(e.to, nd);
        }
      }
    }
    if (!found) return null;
    const seq = [];
    for (let k = found; k; k = prev.get(k)) seq.unshift(k);
    // Agrupar en tramos por línea
    const legs = [];
    for (const k of seq) {
      const [line, idxS] = k.split('|');
      const idx = +idxS;
      const last = legs[legs.length - 1];
      if (last && last.line === line) last.stops.push(idx);
      else legs.push({ line, stops: [idx] });
    }
    const useful = legs.filter((l) => l.stops.length > 1);
    for (const leg of useful) {
      const rt = this.net.lines[leg.line];
      leg.from = leg.stops[0];
      leg.to = leg.stops[leg.stops.length - 1];
      leg.dir = leg.to > leg.from ? 1 : -1;
      // Incluir paradas intermedias (p. ej. San Pedro, fuera de servicio, se pasa de largo)
      const all = [];
      for (let i = leg.from; i !== leg.to + leg.dir; i += leg.dir) all.push(i);
      leg.all = all;
      leg.minutes = (rt.def.minutes * Math.abs(rt.stops[leg.to].s - rt.stops[leg.from].s)) / rt.path.length;
      leg.fromKey = rt.stops[leg.from].key;
      leg.toKey = rt.stops[leg.to].key;
    }
    const total = dist.get(found);
    return { legs: useful, minutes: total, transfers: Math.max(0, useful.length - 1), from: fromKey, to: toKey };
  }
}

class MinHeap {
  constructor() {
    this.a = [];
  }
  get size() {
    return this.a.length;
  }
  push(key, pri) {
    const a = this.a;
    a.push({ key, pri });
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p].pri <= a[i].pri) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop() {
    const a = this.a;
    const top = a[0];
    const last = a.pop();
    if (a.length) {
      a[0] = last;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1;
        const r = l + 1;
        let m = i;
        if (l < a.length && a[l].pri < a[m].pri) m = l;
        if (r < a.length && a[r].pri < a[m].pri) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]];
        i = m;
      }
    }
    return top;
  }
}
