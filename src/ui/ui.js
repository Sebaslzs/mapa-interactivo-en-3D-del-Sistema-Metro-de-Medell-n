// Interfaz de usuario superpuesta a la escena 3D.

import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { LINES, LINE_BY_ID, MODE_INFO, SYSTEM_FACTS } from '../data/lines.js';
import { SERVICE_LABELS } from '../data/stations.js';
import { poiInfo, POI_CATS, STATION_EVENTS } from '../data/pois.js';
import { LANDMARKS } from '../data/landmarks.js';
import { AVATARS } from '../models/people.js';
import { ICONS, MODE_ICON } from './icons.js';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const textOn = (hex) => {
  const c = new THREE.Color(hex);
  const l = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b; // lineal
  return l > 0.36 ? '#1d1d1b' : '#ffffff';
};
export const chip = (id, small = false) => {
  const l = LINE_BY_ID[id];
  return `<span class="chip${small ? ' sm' : ''}" style="background:${l.color};color:${textOn(l.color)}" title="${esc(l.name)}: ${esc(l.title)}">${esc(id)}</span>`;
};
const MODE_ORDER = ['metro', 'cable', 'tram', 'bus', 'lrt'];
const MODE_NOUN = { metro: 'Metro', cable: 'Metrocable', tram: 'Tranvía', bus: 'Metroplús', lrt: 'Metro de la 80' };

export class UI {
  constructor(app) {
    this.app = app;
    this.root = document.getElementById('ui');
    this.avatar = 'estudiante';
    this.from = null;
    this.to = null;
    this.includeE = true;
    this.portraits = {};
    this.card = null;
    this.render();
  }

  // ---------------------------------------------------------------- layout
  render() {
    const groups = MODE_ORDER.map((m) => {
      const lines = LINES.filter((l) => l.mode === m);
      return `<div class="lg-group"><div class="lg-head">${MODE_ICON[m]}<span>${MODE_INFO[m].label}</span><small>${MODE_INFO[m].sub}</small></div>
        ${lines.map((l) => `<label class="lg-row${l.construction ? ' cons' : ''}"><input type="checkbox" data-line="${l.id}" checked>${chip(l.id)}<span class="lg-name">${esc(l.title)}</span><button class="lg-info" data-lineinfo="${l.id}" title="Ficha técnica">${ICONS.info}</button></label>`).join('')}</div>`;
    }).join('');
    this.root.innerHTML = `
      <header class="brand">
        <div class="logo"><span class="l1">MAPA</span><span class="l2">METRO 3D</span></div>
        <div class="sub">Sistema Integrado de Transporte del Valle de Aburrá<br><small>Datos: metrodemedellin.gov.co · metrodela80.gov.co</small></div>
      </header>

      <section class="panel planner" id="planner">
        <button class="panel-toggle" data-toggle="planner" title="Planea tu viaje">${ICONS.route}</button>
        <div class="panel-body">
          <h2>${ICONS.route} Planea tu viaje</h2>
          <div class="avatars" id="avatars">
            ${Object.entries(AVATARS).map(([k, a]) => `<button class="avatar${k === this.avatar ? ' on' : ''}" data-avatar="${k}" title="${esc(a.desc)}"><span class="ph" data-ph="${k}"></span><b>${esc(a.label)}</b></button>`).join('')}
          </div>
          <div class="od">
            <div class="field"><span class="dot o"></span><input id="in-from" placeholder="Origen: escribe una estación" autocomplete="off"><div class="dd" id="dd-from"></div></div>
            <button class="swap" id="btn-swap" title="Intercambiar">${ICONS.swap}</button>
            <div class="field"><span class="dot d"></span><input id="in-to" placeholder="Destino: escribe una estación" autocomplete="off"><div class="dd" id="dd-to"></div></div>
          </div>
          <label class="check"><input type="checkbox" id="chk-e" checked> Incluir el Metro de la 80 (proyectado, en construcción)</label>
          <div id="route-result" class="route-result"><p class="hint">Elige origen y destino. También puedes tocar una estación en el mapa y usar <b>Salir de aquí</b> o <b>Llegar aquí</b>.</p></div>
        </div>
      </section>

      <section class="panel legend" id="legend">
        <button class="panel-toggle" data-toggle="legend" title="Líneas y capas">${ICONS.layers}</button>
        <div class="panel-body">
          <h2>${ICONS.layers} Líneas</h2>
          ${groups}
          <div class="lg-group"><div class="lg-head">${ICONS.feeder}<span>Capas</span></div>
            <label class="lg-row"><input type="checkbox" data-layer="feeders" checked><span class="chip" style="background:#56B04B;color:#fff">R</span><span class="lg-name">Rutas alimentadoras</span></label>
            <label class="lg-row"><input type="checkbox" data-layer="landmarks" checked><span class="chip star">${ICONS.star}</span><span class="lg-name">Lugares turísticos</span></label>
            <label class="lg-row"><input type="checkbox" data-layer="labels" checked><span class="chip lbl">Aa</span><span class="lg-name">Nombres de estaciones</span></label>
            <label class="lg-row"><input type="checkbox" data-layer="people" checked><span class="chip lbl">${ICONS.walk}</span><span class="lg-name">Usuarios en estaciones</span></label>
          </div>
        </div>
      </section>

      <nav class="toolbar">
        <button id="btn-home" title="Vista general">${ICONS.home}<span>Vista general</span></button>
        <button id="btn-night" title="Día / noche">${ICONS.moon}<span>Noche</span></button>
        <button id="btn-facts" title="Datos del sistema">${ICONS.chart}<span>Datos</span></button>
        <button id="btn-help" title="Ayuda">${ICONS.help}<span>Ayuda</span></button>
      </nav>

      <button class="compass" id="compass" title="Orientar al norte"><span class="needle"></span><b>N</b></button>

      <div class="hud" id="hud" hidden>
        <div class="hud-top">
          <div class="hud-line" id="hud-line"></div>
          <div class="hud-status" id="hud-status"></div>
          <div class="hud-time" id="hud-time"></div>
        </div>
        <div class="hud-progress"><div class="bar" id="hud-bar"></div><div class="stops" id="hud-stops"></div></div>
        <div class="hud-ctrl">
          <button id="hud-pause" title="Pausa">${ICONS.pause}</button>
          <div class="speeds" id="hud-speeds">${[0.5, 1, 2, 4].map((s) => `<button data-speed="${s}" class="${s === 1 ? 'on' : ''}">${s}x</button>`).join('')}</div>
          <button id="hud-cam" class="on" title="Cámara cinematográfica">${ICONS.camera}<span>Cinemática</span></button>
          <button id="hud-stop" title="Terminar viaje">${ICONS.close}<span>Terminar</span></button>
        </div>
      </div>
      <button class="skip" id="btn-skip" hidden>${ICONS.skip} Saltar vista previa</button>

      <div class="toasts" id="toasts"></div>
      <div class="tooltip" id="tooltip" hidden></div>
      <div class="civica" id="civica" hidden><div class="card-c"><b>Cívica</b><span>¡Bip! Viaje validado</span></div></div>
      <div class="modal" id="modal" hidden><div class="modal-box" id="modal-box"></div></div>
    `;
    this.bind();
    if (window.innerWidth > 0 && window.innerWidth < 760) {
      document.getElementById('planner').classList.add('collapsed');
      document.getElementById('legend').classList.add('collapsed');
    }
  }

  bind() {
    const $ = (id) => document.getElementById(id);
    this.root.querySelectorAll('[data-toggle]').forEach((b) =>
      b.addEventListener('click', () => {
        const p = document.getElementById(b.dataset.toggle);
        p.classList.toggle('collapsed');
        // En pantallas pequeñas solo un panel abierto a la vez
        if (window.innerWidth < 760 && !p.classList.contains('collapsed')) {
          const other = b.dataset.toggle === 'planner' ? 'legend' : 'planner';
          document.getElementById(other).classList.add('collapsed');
        }
      }),
    );
    this.root.querySelectorAll('[data-avatar]').forEach((b) =>
      b.addEventListener('click', () => {
        this.avatar = b.dataset.avatar;
        this.root.querySelectorAll('[data-avatar]').forEach((x) => x.classList.toggle('on', x === b));
      }),
    );
    this.root.querySelectorAll('[data-line]').forEach((c) =>
      c.addEventListener('change', () => this.app.setLineVisible(c.dataset.line, c.checked)),
    );
    this.root.querySelectorAll('[data-layer]').forEach((c) =>
      c.addEventListener('change', () => this.app.setLayer(c.dataset.layer, c.checked)),
    );
    this.root.querySelectorAll('[data-lineinfo]').forEach((b) =>
      b.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.showLine(b.dataset.lineinfo);
      }),
    );
    this.combo($('in-from'), $('dd-from'), (k) => this.setFrom(k));
    this.combo($('in-to'), $('dd-to'), (k) => this.setTo(k));
    $('btn-swap').addEventListener('click', () => {
      const f = this.from;
      this.setFrom(this.to, false);
      this.setTo(f);
    });
    $('chk-e').addEventListener('change', (e) => {
      this.includeE = e.target.checked;
      this.updateRoute();
    });
    $('btn-home').addEventListener('click', () => this.app.overview());
    $('btn-night').addEventListener('click', () => {
      const n = this.app.toggleNight();
      $('btn-night').innerHTML = n ? `${ICONS.sun}<span>Día</span>` : `${ICONS.moon}<span>Noche</span>`;
    });
    $('btn-facts').addEventListener('click', () => this.showFacts());
    $('btn-help').addEventListener('click', () => this.showHelp());
    $('compass').addEventListener('click', () => this.app.faceNorth());
    $('modal').addEventListener('click', (e) => {
      if (e.target.id === 'modal') this.closeModal();
    });
    $('hud-pause').addEventListener('click', () => {
      const j = this.app.journey;
      j.paused = !j.paused;
      $('hud-pause').innerHTML = j.paused ? ICONS.play : ICONS.pause;
    });
    $('hud-speeds').addEventListener('click', (e) => {
      const b = e.target.closest('[data-speed]');
      if (!b) return;
      this.app.journey.speed = +b.dataset.speed;
      $('hud-speeds').querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
    });
    $('hud-cam').addEventListener('click', () => {
      const d = this.app.director;
      d.cinematic = !d.cinematic;
      $('hud-cam').classList.toggle('on', d.cinematic);
    });
    this.app.director.onManual = () => $('hud-cam').classList.remove('on');
    $('hud-stop').addEventListener('click', () => this.app.journey.cancel());
    $('btn-skip').addEventListener('click', () => this.app.journey.skipPreview());
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!$('modal').hidden) this.closeModal();
        else this.closeCard();
      }
    });
  }

  // Combo de búsqueda de estaciones
  combo(input, dd, onPick) {
    let items = [];
    let hi = -1;
    const list = () =>
      Object.values(this.app.network.complexes)
        .filter((c) => !c.info.closed)
        .sort((a, b) => a.name.localeCompare(b.name, 'es'));
    const draw = () => {
      const q = norm(input.value.trim());
      items = list().filter((c) => !q || norm(c.name).includes(q)).slice(0, 60);
      hi = Math.min(hi, items.length - 1);
      dd.innerHTML = items
        .map((c, i) => `<div class="dd-item${i === hi ? ' hi' : ''}" data-k="${c.key}"><span>${esc(c.name)}</span><span class="chips">${c.lines.map((l) => chip(l, true)).join('')}</span></div>`)
        .join('') || '<div class="dd-empty">Sin resultados</div>';
      dd.classList.add('open');
    };
    input.addEventListener('focus', () => {
      input.select();
      draw();
    });
    input.addEventListener('input', () => {
      hi = 0;
      draw();
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') (hi = Math.min(items.length - 1, hi + 1)), draw(), e.preventDefault();
      else if (e.key === 'ArrowUp') (hi = Math.max(0, hi - 1)), draw(), e.preventDefault();
      else if (e.key === 'Enter' && items[hi]) {
        onPick(items[hi].key);
        dd.classList.remove('open');
        input.blur();
      } else if (e.key === 'Escape') dd.classList.remove('open');
    });
    input.addEventListener('blur', () => setTimeout(() => dd.classList.remove('open'), 150));
    dd.addEventListener('mousedown', (e) => {
      const it = e.target.closest('[data-k]');
      if (!it) return;
      e.preventDefault();
      onPick(it.dataset.k);
      dd.classList.remove('open');
      input.blur();
    });
  }

  setFrom(key, update = true) {
    this.from = key;
    document.getElementById('in-from').value = key ? this.app.network.complexes[key].name : '';
    this.app.setEndpoints(this.from, this.to);
    if (update) this.updateRoute();
  }
  setTo(key, update = true) {
    this.to = key;
    document.getElementById('in-to').value = key ? this.app.network.complexes[key].name : '';
    this.app.setEndpoints(this.from, this.to);
    if (update) this.updateRoute();
  }

  updateRoute() {
    const box = document.getElementById('route-result');
    this.route = null;
    if (!this.from || !this.to) return;
    if (this.from === this.to) {
      box.innerHTML = '<p class="hint">El origen y el destino son la misma estación.</p>';
      return;
    }
    const r = this.app.router.route(this.from, this.to, { includeE: this.includeE });
    if (!r) {
      box.innerHTML = `<p class="hint warn">No hay conexión con las líneas activas${this.includeE ? '' : '. Prueba incluir el Metro de la 80'}.</p>`;
      return;
    }
    this.route = r;
    const net = this.app.network;
    const legs = r.legs
      .map((leg, i) => {
        const l = LINE_BY_ID[leg.line];
        const n = leg.all.length - 1;
        return `${i > 0 ? `<div class="leg-transfer">${ICONS.walk} Transbordo en <b>${esc(net.complexes[leg.fromKey].name)}</b></div>` : ''}
        <div class="leg" style="--c:${l.color}">
          <div class="leg-ico">${MODE_ICON[l.mode]}</div>
          <div class="leg-txt">${chip(leg.line)} <b>${esc(net.complexes[leg.fromKey].name)}</b> → <b>${esc(net.complexes[leg.toKey].name)}</b>
          <small>${MODE_NOUN[l.mode]} · ${n} ${n === 1 ? 'parada' : 'paradas'} · ≈${Math.max(1, Math.round(leg.minutes))} min${l.construction ? ' · proyectado' : ''}</small></div>
        </div>`;
      })
      .join('');
    box.innerHTML = `
      <div class="route-sum"><div><b>≈ ${Math.round(r.minutes)} min</b><small>tiempo estimado</small></div>
      <div><b>${r.transfers}</b><small>${r.transfers === 1 ? 'transbordo' : 'transbordos'}</small></div>
      <div><b>${r.legs.reduce((a, l) => a + l.all.length - 1, 0)}</b><small>paradas</small></div></div>
      <div class="legs">${legs}</div>
      <button class="primary" id="btn-go">${ICONS.play} Iniciar recorrido 3D</button>
      <p class="fine">Tiempos calculados con los tiempos de recorrido y frecuencias oficiales por línea. Incluye espera promedio y caminata en transbordos.</p>`;
    document.getElementById('btn-go').addEventListener('click', () => this.app.startJourney(r, this.avatar));
  }

  // ---------------------------------------------------------------- tarjetas 3D
  closeCard(keepPins = false) {
    if (this.card) {
      this.card.parent?.remove(this.card);
      this.card.element.remove();
      this.card = null;
      this.app.highlight(null);
    }
    if (!keepPins) this.app.clearPoiPins?.();
  }

  _cardShell(pos, html, cls = '', keepPins = false) {
    this.closeCard(keepPins);
    const el = document.createElement('div');
    el.className = 'anchor';
    el.innerHTML = `<div class="card3d ${cls}">${html}</div>`;
    const obj = new CSS2DObject(el);
    obj.position.copy(pos);
    this.app.scene.add(obj);
    this.card = obj;
    el.querySelector('.x')?.addEventListener('click', () => this.closeCard());
    el.addEventListener('pointerdown', (e) => e.stopPropagation());
    el.addEventListener('wheel', (e) => e.stopPropagation(), { passive: true });
    return el;
  }

  // Mantiene la tarjeta 3D dentro de la ventana (arriba o abajo del punto).
  updateCard() {
    if (!this.card) return;
    const el = this.card.element.querySelector('.card3d');
    if (!el) return;
    const v = this.card.getWorldPosition(new THREE.Vector3()).project(this.app.camera);
    if (v.z > 1) return;
    const W = window.innerWidth;
    const H = window.innerHeight;
    const x = (v.x * 0.5 + 0.5) * W;
    const y = (-v.y * 0.5 + 0.5) * H;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const left = Math.max(12 - x, Math.min(-w / 2, W - 12 - w - x));
    // Se ubica del lado (arriba/abajo) con más espacio y nunca se sale de la ventana
    const topMargin = 64;
    const reserve = W < 760 ? 190 : 90;
    const avail = Math.max(220, H - topMargin - reserve);
    const hh = Math.min(h, avail);
    const spaceAbove = y - 16 - topMargin;
    const spaceBelow = H - reserve - y - 16;
    const above = spaceAbove >= hh || spaceAbove >= spaceBelow;
    let shift;
    el.style.left = left + 'px';
    el.style.maxHeight = avail + 'px';
    if (above) {
      shift = Math.max(0, topMargin - (y - 16 - hh));
      el.style.bottom = 16 - shift + 'px';
      el.style.top = 'auto';
    } else {
      shift = Math.max(0, y + 16 + hh - (H - reserve));
      el.style.top = 16 - shift + 'px';
      el.style.bottom = 'auto';
    }
    this.card.element.classList.toggle('below', !above);
    this.card.element.classList.toggle('shifted', shift > 0);
  }

  showStation(key) {
    const net = this.app.network;
    const cx = net.complexes[key];
    if (!cx) return;
    const info = cx.info;
    const lines = cx.lines.map((id) => LINE_BY_ID[id]);
    const kind = cx.construction
      ? 'Proyectada · Metro de la 80 (en construcción)'
      : lines.length > 1
        ? 'Estación de transferencia'
        : cx.modes.has('metro') ? 'Estación de metro'
          : cx.modes.has('cable') ? 'Estación de Metrocable'
            : cx.modes.has('tram') ? 'Parada de tranvía'
              : 'Parada de Metroplús';
    const conns = lines
      .map((l) => {
        const other = cx.lines.length > 1;
        const walk = other && (() => {
          const ps = cx.stops.filter((s) => s.line !== l.id).map((s) => s.pos);
          const me = cx.stops.find((s) => s.line === l.id).pos;
          return Math.min(...ps.map((p) => p.distanceTo(me))) > 14;
        })();
        return `<li>${chip(l.id)}<div><b>${esc(l.name)}</b> · ${esc(l.title)}<small>${MODE_INFO[l.mode].label}${other ? (walk ? ' · transferencia peatonal' : ' · transferencia directa') : ''}${l.construction ? ' · en construcción' : ''}</small></div></li>`;
      })
      .join('');
    const pois = info.pois || [];
    const linked = new Set(pois.map((p) => poiInfo(p).lm).filter(Boolean));
    const near = this.app.landmarksNear(cx.pos, 110).filter((l) => !linked.has(l.def.id));
    const feeders = net.feeders.filter((f) => f.complex === key);
    const events = STATION_EVENTS[key] || [];
    const poiItems = pois
      .map((p) => {
        const c = POI_CATS[poiInfo(p).cat];
        return `<li class="poi" data-poi="${esc(p)}" title="Ver información del lugar"><i class="pdot" style="background:${c.color}"></i><span class="pt"><b>${esc(p)}</b><small>${esc(c.label)}</small></span><span class="go">›</span></li>`;
      })
      .join('');
    const lmItems = near
      .map((l) => `<li class="poi lm" data-lm="${l.def.id}"><i class="pdot star">${ICONS.star}</i><span class="pt"><b>${esc(l.def.name)}</b><small>${esc(l.def.category)}</small></span><span class="go">›</span></li>`)
      .join('');
    const sv = (info.services || []).map((s) => `<span class="svc">${esc(SERVICE_LABELS[s] || s)}</span>`).join('');
    const html = `
      <div class="c-head" style="--c:${lines[0].color}">
        <div class="chips">${cx.lines.map((l) => chip(l)).join('')}</div>
        <button class="x" title="Cerrar">${ICONS.close}</button>
        <h3>${esc(cx.name)}</h3><small>${kind}</small>
      </div>
      <div class="c-body">
        ${info.closed ? '<p class="warn">Parada fuera de servicio.</p>' : ''}
        ${info.notes ? `<p class="note">${esc(info.notes)}</p>` : ''}
        <h4>Conexiones y transbordos</h4><ul class="conns">${conns}</ul>
        ${(info.routes && info.routes.length) || feeders.length ? `<h4>Rutas integradas y alimentadoras</h4><div class="routes">${[...new Set([...(info.routes || []), ...feeders.map((f) => f.code)])].map((r) => `<span class="rt">${esc(r)}</span>`).join('')}</div>` : ''}
        <h4>Puntos de interés cercanos <span class="hint-s">toca uno para ver su información</span></h4>
        ${pois.length || near.length ? `<ul class="pois">${poiItems}${lmItems}</ul>` : '<p class="muted">Sin sitios registrados en la fuente oficial.</p>'}
        ${events.length ? `<h4>Eventos de ciudad</h4><div class="routes">${events.map((e) => `<span class="ev">${esc(e)}</span>`).join('')}</div>` : ''}
        ${sv ? `<h4>Servicios</h4><div class="svcs">${sv}</div>` : ''}
        ${info.address ? `<p class="addr">${ICONS.pin} ${esc(info.address)}</p>` : ''}
      </div>
      <div class="c-actions">
        <button data-act="from">Salir de aquí</button>
        <button data-act="to" class="primary">Llegar aquí</button>
      </div>`;
    const pos = cx.pos.clone();
    pos.y += cx.modes.has('cable') && !cx.modes.has('metro') ? 2.5 : 4;
    const el = this._cardShell(pos, html);
    el.querySelector('[data-act="from"]').addEventListener('click', () => {
      this.setFrom(key);
      this.openPlanner();
    });
    el.querySelector('[data-act="to"]').addEventListener('click', () => {
      this.setTo(key);
      this.openPlanner();
    });
    el.querySelectorAll('[data-lm]').forEach((li) => li.addEventListener('click', () => this.app.focusLandmark(li.dataset.lm)));
    el.querySelectorAll('[data-poi]').forEach((li) => li.addEventListener('click', () => this.app.focusPoi(li.dataset.poi, key)));
    this.app.highlight(key);
    this.app.showPoiPins(key);
  }

  // Texto de distancia a pie desde una estación (1 u = 10 m; 75 m/min)
  walkText(distU) {
    const m = distU * 10;
    if (m < 1500) return `≈ ${Math.max(50, Math.round(m / 50) * 50)} m · ${Math.max(1, Math.round(m / 75))} min a pie`;
    const km = (m / 1000).toFixed(1).replace('.', ',');
    return m > 2500 ? `≈ ${km} km · mejor en ruta integrada o bus` : `≈ ${km} km · ${Math.round(m / 75)} min a pie`;
  }

  // Ficha de un punto de interés (anclada en su ubicación o en la estación)
  showPoi(name, fromKey, loc) {
    const net = this.app.network;
    const info = poiInfo(name);
    const cat = POI_CATS[info.cat];
    const from = net.complexes[fromKey];
    const pos = loc ? loc.pos : from.pos;
    const stations = Object.values(net.complexes)
      .filter((c) => (c.info.pois || []).includes(name))
      .map((c) => ({ c, d: Math.hypot(c.pos.x - pos.x, c.pos.z - pos.z) }))
      .sort((a, b) => (loc ? a.d - b.d : (a.c.key === fromKey ? -1 : 1)));
    const best = stations[0]?.c || from;
    const how = stations
      .map(({ c, d }, i) => `<li class="st-link" data-st="${c.key}">${c.lines.map((l) => chip(l, true)).join('')}<div><b>${esc(c.name)}</b>${i === 0 && stations.length > 1 && loc ? ' <span class="best">más cercana</span>' : ''}<small>${loc ? this.walkText(d) : 'Estación recomendada por el Metro'}</small></div></li>`)
      .join('');
    const where = !loc
      ? 'Sin ubicación exacta en el mapa: se señala junto a la estación.'
      : loc.kind === 'lm' ? 'Lugar modelado en 3D en el mapa.' : 'Ubicación aproximada en el mapa.';
    const html = `
      <div class="c-head poih" style="--c:${cat.color}">
        <div class="chips"><span class="chip poi-ico" style="color:${cat.color}">${ICONS.pin}</span><span class="cat">${esc(cat.label)}</span></div>
        <button class="x" title="Cerrar">${ICONS.close}</button>
        <h3>${esc(name)}</h3><small>Punto de interés · estación ${esc(from.name)}</small>
      </div>
      <div class="c-body">
        <p>${esc(info.desc)}</p>
        <h4>Cómo llegar</h4><ul class="conns">${how}</ul>
        <p class="fine">${where} Figura como sitio de interés de la estación en metrodemedellin.gov.co.</p>
      </div>
      <div class="c-actions">
        <button data-act="back">‹ ${esc(from.name)}</button>
        <button data-act="to" class="primary">Llegar aquí</button>
      </div>`;
    const p = pos.clone();
    p.y += loc ? (loc.kind === 'lm' ? 1 : 2.4) : 4;
    const el = this._cardShell(p, html, 'poicard', true);
    el.querySelector('[data-act="back"]').addEventListener('click', () => this.app.focusStation(fromKey));
    el.querySelector('[data-act="to"]').addEventListener('click', () => {
      this.setTo(best.key);
      this.openPlanner();
    });
    el.querySelectorAll('[data-st]').forEach((li) => li.addEventListener('click', () => this.app.focusStation(li.dataset.st)));
    this.app.selectPoiPin(name);
  }

  showLandmark(id) {
    const lm = this.app.landmarks.find((l) => l.def.id === id);
    if (!lm) return;
    const d = lm.def;
    const cx = this.app.network.complexes[d.station];
    const html = `
      <div class="c-head lmh">
        <div class="chips"><span class="chip star">${ICONS.star}</span><span class="cat">${esc(d.category)}</span></div>
        <button class="x" title="Cerrar">${ICONS.close}</button>
        <h3>${esc(d.name)}</h3><small>Lugar turístico y representativo</small>
      </div>
      <div class="c-body">
        <p>${esc(d.desc)}</p>
        ${cx ? `<h4>Cómo llegar</h4><ul class="conns"><li class="st-link" data-st="${cx.key}">${cx.lines.map((l) => chip(l)).join('')}<div><b>${esc(cx.name)}</b><small>Estación recomendada · ${this.walkText(Math.hypot(cx.pos.x - lm.pos.x, cx.pos.z - lm.pos.z))}</small></div></li></ul>` : ''}
      </div>
      <div class="c-actions">
        ${cx ? `<button data-act="st">Ver estación</button><button data-act="to" class="primary">Llegar aquí</button>` : ''}
      </div>`;
    const pos = lm.pos.clone();
    pos.y += lm.top + 1;
    const el = this._cardShell(pos, html, 'lmcard');
    el.querySelector('[data-act="to"]')?.addEventListener('click', () => {
      this.setTo(d.station);
      this.openPlanner();
    });
    el.querySelector('[data-act="st"]')?.addEventListener('click', () => this.app.focusStation(d.station));
    el.querySelectorAll('[data-st]').forEach((li) => li.addEventListener('click', () => this.app.focusStation(li.dataset.st)));
  }

  openPlanner() {
    document.getElementById('planner').classList.remove('collapsed');
    if (window.innerWidth < 760) document.getElementById('legend').classList.add('collapsed');
  }

  // ---------------------------------------------------------------- etiquetas
  makeStationLabel(cx) {
    const el = document.createElement('div');
    el.className = 'st-label' + (cx.construction ? ' cons' : '') + (cx.lines.length > 1 ? ' major' : '');
    el.innerHTML = `<span class="dots">${cx.lines.map((l) => `<i style="background:${LINE_BY_ID[l].color}"></i>`).join('')}</span><b>${esc(cx.name)}</b>`;
    el.addEventListener('click', () => this.app.focusStation(cx.key));
    return el;
  }
  makeLandmarkLabel(lm) {
    const el = document.createElement('div');
    el.className = 'lm-label';
    el.innerHTML = `${ICONS.star}<b>${esc(lm.name)}</b>`;
    el.addEventListener('click', () => this.app.focusLandmark(lm.id));
    return el;
  }

  tooltip(text, x, y) {
    const t = document.getElementById('tooltip');
    if (!text) return (t.hidden = true);
    t.hidden = false;
    t.innerHTML = text;
    t.style.left = x + 14 + 'px';
    t.style.top = y + 14 + 'px';
  }

  // ---------------------------------------------------------------- modales
  modal(html, cls = '') {
    const m = document.getElementById('modal');
    const box = document.getElementById('modal-box');
    box.className = 'modal-box ' + cls;
    box.innerHTML = `<button class="x mx" title="Cerrar">${ICONS.close}</button>${html}`;
    box.querySelector('.mx').addEventListener('click', () => this.closeModal());
    m.hidden = false;
    return box;
  }
  closeModal() {
    document.getElementById('modal').hidden = true;
    if (this._onModalClose) {
      const f = this._onModalClose;
      this._onModalClose = null;
      f();
    }
  }

  showLine(id) {
    const l = LINE_BY_ID[id];
    const F = l.facts;
    const labels = {
      tipo: 'Tipo de sistema', longitud: 'Longitud', estaciones: 'Estaciones', tiempo: 'Tiempo de recorrido',
      velocidad: 'Velocidad comercial', capacidadVehiculo: 'Capacidad', flota: 'Flota', pilonas: 'Número de pilonas',
      frecuencia: 'Frecuencia mínima', capacidadHora: 'Capacidad (pasajeros/hora/sentido)', inicio: 'Inicio de operación',
      transferencias: 'Estaciones de transferencia', horario: 'Horario', estado: 'Estado', identidad: 'Identidad',
      integracion: 'Integración', recorrido: 'Recorrido',
    };
    const rt = this.app.network.lines[id];
    const stops = rt.stops.map((s) => this.app.network.complexes[s.key]);
    const box = this.modal(`
      <div class="m-head" style="--c:${l.color}">${chip(id)}<div><h2>${esc(l.name)}: ${esc(l.title)}</h2><small>${MODE_INFO[l.mode].label}${l.subtitle ? ' · ' + esc(l.subtitle) : ''}</small></div></div>
      <table class="facts">${Object.entries(F).map(([k, v]) => `<tr><th>${esc(labels[k] || k)}</th><td>${esc(v)}</td></tr>`).join('')}</table>
      <h4>Recorrido</h4>
      <ol class="stops-list" style="--c:${l.color}">${stops.map((c, i) => `<li data-k="${c.key}"${rt.stops[i].closed ? ' class="closed"' : ''}>${esc(c.name)}${c.lines.length > 1 ? `<span class="chips">${c.lines.filter((x) => x !== id).map((x) => chip(x, true)).join('')}</span>` : ''}</li>`).join('')}</ol>
      <p class="fine">Fuente: ${l.construction ? 'metrodela80.gov.co' : 'metrodemedellin.gov.co / Sistema integrado'}.</p>`, 'wide');
    box.querySelectorAll('[data-k]').forEach((li) =>
      li.addEventListener('click', () => {
        this.closeModal();
        this.app.focusStation(li.dataset.k);
      }),
    );
  }

  showFacts() {
    const S = SYSTEM_FACTS;
    const rows = LINES.map((l) => `<tr data-l="${l.id}"><td>${chip(l.id)}</td><td>${esc(l.title)}</td><td>${esc(MODE_INFO[l.mode].label)}</td><td>${esc(l.facts.longitud)}</td><td>${esc(l.facts.tiempo)}</td><td>${esc(l.facts.frecuencia || '—')}</td><td>${esc(l.facts.capacidadHora || '—')}</td><td>${esc(l.facts.inicio)}</td></tr>`).join('');
    const box = this.modal(`
      <h2>Datos del sistema</h2>
      <div class="kpis">
        <div><b>${esc(S.longitud)}</b><small>de red en operación</small></div>
        <div><b>12</b><small>líneas en 4 modos</small></div>
        <div><b>86.078</b><small>pasajeros/hora/sentido</small></div>
        <div><b>13,25 km</b><small>Metro de la 80 en obra</small></div>
      </div>
      <div class="facts-grid">
        <div><h4>Longitud por modo</h4><table class="facts">${S.desglose.map(([a, b]) => `<tr><th>${a}</th><td>${b}</td></tr>`).join('')}</table></div>
        <div><h4>Flota</h4><table class="facts">${S.flota.map(([a, b]) => `<tr><th>${a}</th><td>${b}</td></tr>`).join('')}</table></div>
        <div><h4>Accesos</h4><table class="facts">${S.accesos.map(([a, b]) => `<tr><th>${a}</th><td>${b}</td></tr>`).join('')}</table></div>
      </div>
      <h4>Líneas</h4>
      <div class="tbl-wrap"><table class="lines-tbl"><thead><tr><th></th><th>Recorrido</th><th>Modo</th><th>Longitud</th><th>Tiempo</th><th>Frecuencia pico</th><th>Capacidad</th><th>Inicio</th></tr></thead><tbody>${rows}</tbody></table></div>
      <p class="fine">Fuente: metrodemedellin.gov.co (Sistema integrado e infografía "Datos del sistema") y metrodela80.gov.co.</p>`, 'wide');
    box.querySelectorAll('[data-l]').forEach((tr) => tr.addEventListener('click', () => this.showLine(tr.dataset.l)));
  }

  showHelp() {
    this.modal(`
      <h2>Cómo usar el mapa</h2>
      <ul class="help">
        <li><b>Mover el mapa:</b> arrastra con el botón izquierdo (un dedo en pantallas táctiles).</li>
        <li><b>Girar e inclinar:</b> arrastra con el botón derecho (dos dedos en pantallas táctiles).</li>
        <li><b>Acercar o alejar:</b> usa la rueda del ratón o pellizca la pantalla.</li>
        <li><b>Estaciones:</b> toca un modelo o su nombre para ver conexiones, puntos de interés y servicios.</li>
        <li><b>Lugares turísticos</b> (★): se ven a lo lejos y también se pueden tocar.</li>
        <li><b>Recorrido 3D:</b> elige tu viajero, el origen y el destino, y pulsa <i>Iniciar recorrido 3D</i>. La cámara vuela por la ruta y luego sigue al pasajero. Durante el viaje puedes orbitar con el ratón, pausar o cambiar la velocidad.</li>
        <li><b>Líneas:</b> muéstralas u ocúltalas desde la leyenda. Con ⓘ ves la ficha técnica oficial.</li>
      </ul>
      <p class="fine">La escala vertical del relieve está exagerada (×1,7) y los vehículos se dibujan más grandes que su tamaño real para que se lean en el mapa. El trazado de las rutas alimentadoras es ilustrativo.</p>`);
  }

  // ---------------------------------------------------------------- viaje
  journeyStarted(route) {
    this.closeCard();
    document.getElementById('hud').hidden = false;
    document.body.classList.add('in-journey');
    this.totalMin = route.minutes;
    const stops = [];
    route.legs.forEach((leg, li) => {
      leg.all.forEach((idx, k) => {
        if (li > 0 && k === 0) return;
        const rt = this.app.network.lines[leg.line];
        stops.push({ key: rt.stops[idx].key, color: rt.def.color, leg: li, k });
      });
    });
    this.hudStops = stops;
    const hs = document.getElementById('hud-stops');
    hs.innerHTML = stops
      .map((s, i) => `<i style="left:${(i / Math.max(1, stops.length - 1)) * 100}%;background:${s.color}" title="${esc(this.app.network.complexes[s.key].name)}"></i>`)
      .join('');
    this._setBar(0);
    this.journeyStatus('Preparando el viaje…');
    document.getElementById('hud-time').textContent = `≈ ${Math.round(route.minutes)} min`;
    document.getElementById('planner').classList.add('collapsed');
  }
  _setBar(p) {
    document.getElementById('hud-bar').style.width = Math.max(0, Math.min(1, p)) * 100 + '%';
  }
  journeyStatus(t) {
    document.getElementById('hud-status').textContent = t;
    const j = this.app.journey;
    if (j && j.active) {
      document.getElementById('hud-time').textContent = `${Math.round(j.elapsedMin)} / ≈${Math.round(this.totalMin)} min`;
    }
  }
  journeyLeg(li, leg) {
    const l = LINE_BY_ID[leg.line];
    document.getElementById('hud-line').innerHTML = `${chip(leg.line)}<span>${MODE_INFO[l.mode].label}</span>`;
    this._legBase = this.hudStops.findIndex((s) => s.leg === li);
    if (this._legBase < 0) this._legBase = this.hudStops.length - 1;
    if (li > 0) this._legBase = Math.max(0, this.hudStops.findIndex((s) => s.leg === li) - 1);
  }
  journeyRide({ rt, leg, k, next, progressFn }) {
    const n = this.hudStops.length - 1;
    const base = this._legBase;
    const p = progressFn();
    this._setBar((base + p * (leg.all.length - 1)) / Math.max(1, n));
    this.journeyStatus(`${rt.def.name} → próxima: ${next}`);
    const j = this.app.journey;
    const upd = () => {
      if (!j.active || !j.vehicle || j.vehicle.kind !== 'linear') return;
      this._setBar((base + progressFn() * (leg.all.length - 1)) / Math.max(1, n));
      document.getElementById('hud-time').textContent = `${Math.round(j.elapsedMin)} / ≈${Math.round(this.totalMin)} min`;
      this._raf = requestAnimationFrame(upd);
    };
    cancelAnimationFrame(this._raf);
    this._raf = requestAnimationFrame(upd);
  }
  journeyRideCable({ rt, leg, next, progress }) {
    const n = this.hudStops.length - 1;
    this._setBar((this._legBase + progress * (leg.all.length - 1)) / Math.max(1, n));
    document.getElementById('hud-status').textContent = `${rt.def.name} (Metrocable) → próxima: ${next}`;
    document.getElementById('hud-time').textContent = `${Math.round(this.app.journey.elapsedMin)} / ≈${Math.round(this.totalMin)} min`;
  }
  journeyTransfer(a, b, where) {
    this.toast(`${ICONS.walk}<span>Transbordo en <b>${esc(where)}</b>: de ${chip(a.id, true)} a ${chip(b.id, true)} ${esc(MODE_INFO[b.mode].label)}</span>`, 3200);
    this.journeyStatus(`Transbordo a ${b.def.name} en ${where}`);
  }
  stationToast(name, color) {
    this.toast(`<i class="tdot" style="background:${color}"></i><span>${esc(name)}</span>`, 1500, 'st');
  }
  civicaPop() {
    const c = document.getElementById('civica');
    c.hidden = false;
    c.classList.remove('go');
    void c.offsetWidth;
    c.classList.add('go');
    clearTimeout(this._civ);
    this._civ = setTimeout(() => (c.hidden = true), 1300);
  }
  showSkipPreview(v) {
    document.getElementById('btn-skip').hidden = !v;
  }
  journeyArrived(route, min) {
    this._setBar(1);
    const net = this.app.network;
    this.journeyStatus(`¡Llegaste a ${net.complexes[route.to].name}!`);
    const km = route.legs.reduce((a, leg) => {
      const rt = net.lines[leg.line];
      return a + Math.abs(rt.stops[leg.to].s - rt.stops[leg.from].s) * 0.01;
    }, 0);
    setTimeout(() => {
      const box = this.modal(`
        <div class="arrive">
          <div class="big">${this.portraits[this.avatar] ? `<img src="${this.portraits[this.avatar]}" alt="">` : ''}</div>
          <h2>¡Llegaste a ${esc(net.complexes[route.to].name)}!</h2>
          <p>Viaje desde <b>${esc(net.complexes[route.from].name)}</b></p>
          <div class="kpis"><div><b>≈ ${Math.round(route.minutes)} min</b><small>tiempo estimado</small></div>
          <div><b>${km.toFixed(1).replace('.', ',')} km</b><small>recorridos</small></div>
          <div><b>${route.transfers}</b><small>transbordos</small></div>
          <div><b>${route.legs.length}</b><small>${route.legs.length === 1 ? 'línea' : 'líneas'}</small></div></div>
          <div class="chips big-chips">${route.legs.map((l) => chip(l.line)).join('<span class="arr">→</span>')}</div>
          <p class="fine">Con la tarjeta Cívica los transbordos del sistema integrado se validan en cada acceso.</p>
          <button class="primary" id="btn-done">Explorar el mapa</button>
        </div>`);
      box.querySelector('#btn-done').addEventListener('click', () => this.closeModal());
      this._onModalClose = () => this.app.endJourney();
    }, 1600);
  }
  journeyEnded() {
    document.getElementById('hud').hidden = true;
    document.body.classList.remove('in-journey');
    this.showSkipPreview(false);
    cancelAnimationFrame(this._raf);
  }

  toast(html, ms = 2500, cls = '') {
    const box = document.getElementById('toasts');
    const t = document.createElement('div');
    t.className = 'toast ' + cls;
    t.innerHTML = html;
    box.appendChild(t);
    while (box.children.length > 4) box.firstChild.remove();
    setTimeout(() => {
      t.classList.add('out');
      setTimeout(() => t.remove(), 400);
    }, ms);
  }

  setPortraits(p) {
    this.portraits = p;
    this.root.querySelectorAll('[data-ph]').forEach((s) => {
      if (p[s.dataset.ph]) s.innerHTML = `<img src="${p[s.dataset.ph]}" alt="">`;
    });
  }

  setCompass(angle) {
    const c = document.getElementById('compass');
    if (c) c.style.setProperty('--rot', `${angle}rad`);
  }
}

export { LANDMARKS };
