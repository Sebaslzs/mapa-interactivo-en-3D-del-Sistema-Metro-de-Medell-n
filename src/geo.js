// Proyección geográfica (lat/lon -> escena) y relieve del Valle de Aburrá.
// La altura sale de un modelo digital de elevación real (SRTM, vía Terrain
// Tiles de AWS Open Data; ver scripts/fetch-dem.mjs y src/data/dem.js). El
// modelo aproximado anterior (perfil de valle + puntos de control + ruido)
// solo se usa como respaldo fuera del área cubierta por los datos.

import { M_PER_UNIT, VEX, BASE_ELEV } from './config.js';
import { Noise2D, smoothstep, lerp, clamp } from './util/rand.js';
import { DEM_CORE, DEM_RING, DEM_SOURCE } from './data/dem.js';

export const LAT0 = 6.245;
export const LON0 = -75.575;
const MX = 110660; // metros por grado de longitud a ~6.2°N
const MZ = 110574; // metros por grado de latitud

export function project(lat, lon) {
  return { x: ((lon - LON0) * MX) / M_PER_UNIT, z: (-(lat - LAT0) * MZ) / M_PER_UNIT };
}
export function unproject(x, z) {
  return { lat: LAT0 - (z * M_PER_UNIT) / MZ, lon: LON0 + (x * M_PER_UNIT) / MX };
}
export const elevToY = (m) => ((m - BASE_ELEV) / M_PER_UNIT) * VEX;
export const yToElev = (y) => (y / VEX) * M_PER_UNIT + BASE_ELEV;

// Río Medellín (sur -> norte), coordenadas aproximadas.
export const RIVER_LATLON = [
  [6.07, -75.648], [6.1, -75.642], [6.125, -75.635], [6.14, -75.6315], [6.152, -75.628],
  [6.1565, -75.6185], [6.162, -75.6068], [6.1725, -75.5975], [6.185, -75.5875], [6.1935, -75.584],
  [6.205, -75.5815], [6.213, -75.58], [6.225, -75.5785], [6.235, -75.578], [6.245, -75.5775],
  [6.253, -75.5745], [6.261, -75.5715], [6.27, -75.568], [6.276, -75.5665], [6.285, -75.5625],
  [6.295, -75.5575], [6.305, -75.5545], [6.316, -75.552], [6.326, -75.549], [6.337, -75.541],
  [6.342, -75.527], [6.346, -75.511], [6.355, -75.495], [6.37, -75.47], [6.395, -75.44], [6.43, -75.41],
];
// El trazado se densifica y se ajusta al cauce real más abajo (ver snapRiver).
export let RIVER = RIVER_LATLON.map(([la, lo]) => project(la, lo));

// Altitud del cauce según latitud (m.s.n.m.).
const RIVER_ELEV = [
  [6.05, 1760], [6.1, 1660], [6.125, 1610], [6.15, 1572], [6.19, 1522], [6.23, 1498],
  [6.26, 1480], [6.3, 1458], [6.34, 1436], [6.4, 1410], [6.5, 1385],
];
function riverElev(lat) {
  if (lat <= RIVER_ELEV[0][0]) return RIVER_ELEV[0][1];
  for (let i = 1; i < RIVER_ELEV.length; i++) {
    const [la1, e1] = RIVER_ELEV[i];
    const [la0, e0] = RIVER_ELEV[i - 1];
    if (lat <= la1) return lerp(e0, e1, (lat - la0) / (la1 - la0));
  }
  return RIVER_ELEV[RIVER_ELEV.length - 1][1];
}

// Distancia firmada (en metros, positiva al oriente) al eje del río.
// Dentro del valle se consulta un campo precalculado (interpolación bilineal).
const RD = { x0: -1100, z0: -1350, x1: 1250, z1: 1350, step: 8, field: null };
export function riverDistance(x, z) {
  if (RD.field && x >= RD.x0 && z >= RD.z0 && x < RD.x1 && z < RD.z1) {
    const fx = (x - RD.x0) / RD.step;
    const fz = (z - RD.z0) / RD.step;
    const i = Math.floor(fx);
    const j = Math.floor(fz);
    const tx = fx - i;
    const tz = fz - j;
    const w = RD.w;
    const F = RD.field;
    const a = F[j * w + i];
    const b = F[j * w + i + 1];
    const c = F[(j + 1) * w + i];
    const d = F[(j + 1) * w + i + 1];
    return (a * (1 - tx) + b * tx) * (1 - tz) + (c * (1 - tx) + d * tx) * tz;
  }
  return riverDistanceExact(x, z);
}
function buildRiverField() {
  RD.w = Math.ceil((RD.x1 - RD.x0) / RD.step) + 2;
  RD.h = Math.ceil((RD.z1 - RD.z0) / RD.step) + 2;
  const F = new Float32Array(RD.w * RD.h);
  for (let j = 0; j < RD.h; j++) {
    for (let i = 0; i < RD.w; i++) F[j * RD.w + i] = riverDistanceExact(RD.x0 + i * RD.step, RD.z0 + j * RD.step);
  }
  RD.field = F;
}
function riverDistanceExact(x, z) {
  let best = Infinity;
  let sign = 1;
  for (let i = 0; i < RIVER.length - 1; i++) {
    const a = RIVER[i];
    const b = RIVER[i + 1];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len2 = dx * dx + dz * dz;
    let t = ((x - a.x) * dx + (z - a.z) * dz) / len2;
    t = clamp(t, 0, 1);
    const px = a.x + dx * t - x;
    const pz = a.z + dz * t - z;
    const d2 = px * px + pz * pz;
    if (d2 < best) {
      best = d2;
      const cross = dx * (z - a.z) - dz * (x - a.x);
      sign = cross > 0 ? 1 : -1; // río va de sur a norte: cruz > 0 => oriente
    }
  }
  return Math.sqrt(best) * M_PER_UNIT * sign;
}

// Puntos de control: [lat, lon, altitud m, radio de influencia m]
const ANCHORS_LL = [
  // Línea A (fondo del valle)
  [6.33775, -75.5439, 1438, 700], [6.3302, -75.5536, 1445, 600], [6.31544, -75.55519, 1452, 600],
  [6.30045, -75.55826, 1460, 500], [6.29047, -75.56478, 1466, 600], [6.27768, -75.56947, 1472, 600],
  [6.26915, -75.56588, 1476, 500], [6.26362, -75.56352, 1480, 500], [6.25698, -75.56627, 1485, 500],
  [6.25018, -75.56839, 1490, 500], [6.2472, -75.5699, 1492, 500], [6.24253, -75.5715, 1494, 500],
  [6.23788, -75.57287, 1496, 500], [6.22967, -75.57581, 1500, 600], [6.2125, -75.5781, 1510, 600],
  [6.1937, -75.5822, 1522, 600], [6.1861, -75.5856, 1530, 600], [6.1734, -75.5958, 1545, 600],
  [6.1628, -75.6053, 1552, 600], [6.1584, -75.6174, 1560, 600], [6.1525, -75.6263, 1575, 700],
  // Línea B y occidente plano
  [6.2489, -75.5763, 1492, 500], [6.2533, -75.5831, 1497, 600], [6.2528, -75.588, 1502, 600],
  [6.2587, -75.5976, 1515, 600], [6.2583, -75.6047, 1535, 500], [6.2561, -75.6134, 1570, 500],
  // Línea J
  [6.259, -75.62, 1660, 450], [6.2655, -75.6255, 1760, 450], [6.273, -75.631, 1850, 500],
  // Línea K
  [6.2984, -75.5525, 1560, 400], [6.2966, -75.5465, 1700, 400], [6.2935, -75.541, 1860, 450],
  // Línea L (Arví)
  [6.2885, -75.522, 2260, 900], [6.2812, -75.5, 2440, 900],
  // Línea P
  [6.2986, -75.5665, 1540, 400], [6.2958, -75.5745, 1670, 400], [6.2929, -75.5822, 1790, 450],
  // Tranvía de Ayacucho
  [6.2472, -75.5642, 1500, 400], [6.2469, -75.5615, 1508, 400], [6.2463, -75.5586, 1520, 400],
  [6.245, -75.5552, 1538, 400], [6.2433, -75.5513, 1560, 400], [6.2425, -75.548, 1580, 400],
  [6.242, -75.5445, 1600, 400], [6.2415, -75.5405, 1622, 450],
  // Líneas H y M
  [6.2445, -75.5345, 1740, 400], [6.247, -75.529, 1860, 450],
  [6.2472, -75.5478, 1640, 380], [6.2505, -75.545, 1730, 400],
  // Líneas 1 y 2 (Manrique / Aranjuez / Oriental)
  [6.264, -75.5552, 1510, 450], [6.2678, -75.5556, 1520, 450], [6.271, -75.5558, 1528, 450],
  [6.275, -75.556, 1538, 450], [6.2788, -75.5558, 1545, 450], [6.2815, -75.5578, 1538, 450],
  [6.254, -75.562, 1492, 450], [6.2425, -75.5655, 1500, 450], [6.2355, -75.568, 1505, 450],
  [6.2295, -75.5705, 1502, 450],
  // Calle 30 (Belén)
  [6.2318, -75.583, 1502, 500], [6.2325, -75.592, 1510, 500], [6.2332, -75.601, 1525, 500],
  [6.2318, -75.61, 1545, 500],
  // Avenida 80 (Líneas O y E)
  [6.2795, -75.5755, 1480, 500], [6.2802, -75.5805, 1495, 500], [6.2788, -75.585, 1510, 450],
  [6.2762, -75.5888, 1520, 450], [6.2728, -75.5918, 1530, 450], [6.2672, -75.594, 1525, 450],
  [6.2626, -75.5958, 1520, 450], [6.2528, -75.5988, 1520, 450], [6.247, -75.5995, 1522, 450],
  [6.242, -75.5998, 1525, 450], [6.2375, -75.6002, 1527, 450], [6.2275, -75.6005, 1535, 450],
  [6.2205, -75.6, 1545, 450], [6.214, -75.599, 1545, 450], [6.209, -75.595, 1535, 450],
  [6.204, -75.5905, 1528, 450], [6.1985, -75.587, 1524, 450],
  // El Poblado (plano y laderas)
  [6.2087, -75.5675, 1560, 500], [6.2, -75.556, 1720, 700], [6.215, -75.552, 1700, 600],
  // Cerros tutelares y referencias
  [6.265, -75.581, 1628, 380], // Cerro El Volador
  [6.2362, -75.5795, 1580, 260], // Cerro Nutibara
  [6.256, -75.526, 2120, 650], // Cerro Pan de Azúcar
  [6.298, -75.593, 2030, 500], // Cerro El Picacho
  [6.2345, -75.615, 1830, 350], // Cerro de las Tres Cruces
  [6.233, -75.562, 1630, 280], // Cerro La Asomadera
  [6.229, -75.544, 1760, 420], // Cerro El Salvador
  [6.367, -75.578, 2850, 1600], // Cerro Quitasol (Bello)
  [6.205, -75.505, 2520, 2200], // Santa Elena
  [6.25, -75.665, 2900, 2600], // Cerro del Padre Amaya
];

const ANCHORS = ANCHORS_LL.map(([la, lo, e, r]) => {
  const p = project(la, lo);
  return { x: p.x, z: p.z, e, r2: (r / M_PER_UNIT) ** 2, lim2: ((r * 3) / M_PER_UNIT) ** 2, delta: 0 };
});

const noise = new Noise2D(20251030);
const noise2 = new Noise2D(7);

// Perfil base del valle.
function baseElevation(x, z) {
  const { lat } = unproject(x, z);
  const d = riverDistance(x, z);
  const floor = riverElev(lat);
  let rise;
  if (d >= 0) {
    rise = 430 * smoothstep(700, 4600, d) + 680 * smoothstep(3500, 9500, d);
  } else {
    const narrowN = smoothstep(6.27, 6.33, lat);
    const narrowS = 1 - smoothstep(6.17, 6.22, lat);
    const ws = lerp(1, 0.6, Math.max(narrowN, narrowS * 0.8));
    const w = -d / ws;
    rise = 260 * smoothstep(1400, 5200, w) + 1300 * smoothstep(4200, 11500, w);
  }
  // Cauce levemente hundido
  const bed = Math.abs(d) < 120 ? -4 * (1 - Math.abs(d) / 120) : 0;
  return floor + rise + bed;
}

// Precalcular la corrección de cada punto de control respecto al perfil base.
for (const a of ANCHORS) a.delta = a.e - baseElevation(a.x, a.z);

// ---------------- Relieve real (DEM)
function decodeDEM(g) {
  const bin = atob(g.data);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const q = new Uint16Array(bytes.buffer);
  const v = new Float32Array(q.length);
  for (let i = 0; i < q.length; i++) v[i] = q[i] / 2;
  return { ...g, v };
}
const DEMS = [decodeDEM(DEM_CORE), decodeDEM(DEM_RING)];
export { DEM_SOURCE };

// Muestra bilineal; devuelve null fuera de la cuadrícula.
function demAt(G, lat, lon) {
  const fi = (lon - G.lonW) / G.step;
  const fj = (G.latN - lat) / G.step;
  if (fi < 0 || fj < 0 || fi > G.w - 1 || fj > G.h - 1) return null;
  const i = Math.min(G.w - 2, Math.floor(fi));
  const j = Math.min(G.h - 2, Math.floor(fj));
  const tx = fi - i;
  const ty = fj - j;
  const w = G.w;
  const a = G.v[j * w + i];
  const b = G.v[j * w + i + 1];
  const c = G.v[(j + 1) * w + i];
  const d = G.v[(j + 1) * w + i + 1];
  return (a * (1 - tx) + b * tx) * (1 - ty) + (c * (1 - tx) + d * tx) * ty;
}

// Altitud real (m.s.n.m.) en coordenadas de escena.
export function elevation(x, z) {
  const { lat, lon } = unproject(x, z);
  for (const G of DEMS) {
    const e = demAt(G, lat, lon);
    if (e !== null) return e;
  }
  return modelElevation(x, z);
}

// Ajusta el río al fondo real del valle: densifica el trazado aproximado y
// mueve cada punto hacia la cota más baja en su perpendicular (±450 m).
function snapRiver() {
  const src = RIVER;
  const dense = [];
  const STEP = 25;
  for (let i = 0; i < src.length - 1; i++) {
    const a = src[i];
    const b = src[i + 1];
    const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / STEP));
    for (let k = 0; k < n; k++) dense.push({ x: a.x + ((b.x - a.x) * k) / n, z: a.z + ((b.z - a.z) * k) / n });
  }
  dense.push({ ...src[src.length - 1] });
  const out = dense.map((p, i) => {
    const a = dense[Math.max(0, i - 1)];
    const b = dense[Math.min(dense.length - 1, i + 1)];
    let tx = b.x - a.x;
    let tz = b.z - a.z;
    const l = Math.hypot(tx, tz) || 1;
    const nx = -tz / l;
    const nz = tx / l;
    const { lat, lon } = unproject(p.x, p.z);
    if (!DEMS.some((G) => demAt(G, lat, lon) !== null)) return { ...p };
    let best = Infinity;
    let bd = 0;
    for (let d = -45; d <= 45; d += 1.5) {
      const e = elevation(p.x + nx * d, p.z + nz * d) + Math.abs(d) * 0.08; // leve preferencia por no alejarse
      if (e < best) {
        best = e;
        bd = d;
      }
    }
    return { x: p.x + nx * bd, z: p.z + nz * bd };
  });
  // Suavizado para que el cauce no zigzaguee
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 1; i < out.length - 1; i++) {
      out[i] = { x: (out[i - 1].x + 2 * out[i].x + out[i + 1].x) / 4, z: (out[i - 1].z + 2 * out[i].z + out[i + 1].z) / 4 };
    }
  }
  RIVER = out;
}
snapRiver();
buildRiverField();

// Modelo aproximado (respaldo fuera del área con datos).
export function modelElevation(x, z) {
  let e = baseElevation(x, z);
  let wsum = 0;
  let csum = 0;
  for (let i = 0; i < ANCHORS.length; i++) {
    const a = ANCHORS[i];
    const dx = x - a.x;
    const dz = z - a.z;
    const d2 = dx * dx + dz * dz;
    if (d2 > a.lim2) continue;
    const g = Math.exp(-d2 / a.r2);
    wsum += g;
    csum += g * a.delta;
  }
  e += csum / (wsum + 0.06);
  // Relieve fractal: casi nulo en el fondo del valle, fuerte en montaña.
  const mount = smoothstep(1560, 2350, e);
  e += noise.fbm(x / 55, z / 55, 4) * (5 + 75 * mount);
  e += noise2.fbm(x / 420, z / 420, 3) * 260 * smoothstep(1750, 2400, e);
  return e;
}

// Factor urbano (0..1): dónde hay ciudad construida.
export function urbanFactor(x, z, e) {
  const { lat, lon } = unproject(x, z);
  let u = 1 - smoothstep(1880, 2060, e);
  u *= smoothstep(6.128, 6.152, lat) * (1 - smoothstep(6.352, 6.372, lat));
  u *= smoothstep(-75.652, -75.636, lon) * (1 - smoothstep(-75.527, -75.512, lon));
  const n = noise2.fbm(x / 70 + 13.1, z / 70 - 4.7, 3);
  u *= clamp(0.78 + n * 1.4, 0, 1);
  return u;
}

export function noiseAt(x, z, s = 1) {
  return noise.noise(x / s + 91.7, z / s - 33.1);
}
