// Descarga el relieve real del Valle de Aburrá desde un conjunto de datos abierto
// y genera src/data/dem.js (alturas embebidas, para que la app funcione sin
// conexión y abriendo index.html con doble clic).
//
// Fuente: Terrain Tiles (Mapzen/Tilezen) en AWS Open Data
//   https://registry.opendata.aws/terrain-tiles/
// Formato "terrarium": altura (m) = R*256 + G + B/256 - 32768
// En Colombia los datos provienen de SRTM (NASA/USGS, dominio público).
//
// Uso:  node scripts/fetch-dem.mjs     (los mosaicos se guardan en scripts/.cache)

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = path.join(ROOT, 'scripts', '.cache');
const OUT = path.join(ROOT, 'src', 'data', 'dem.js');
const TILE_URL = (z, x, y) => `https://elevation-tiles-prod.s3.amazonaws.com/terrarium/${z}/${x}/${y}.png`;

// Zonas a muestrear: núcleo detallado (~55 m) y anillo lejano de montañas (~440 m)
const GRIDS = {
  core: { latN: 6.37, latS: 6.12, lonW: -75.675, lonE: -75.46, step: 0.0005, zoom: 12 },
  ring: { latN: 6.7, latS: 5.8, lonW: -75.98, lonE: -75.16, step: 0.004, zoom: 10 },
};

// ---------------- decodificador PNG mínimo (RGB/RGBA 8 bits, sin entrelazado)
function decodePNG(buf) {
  let p = 8;
  let w = 0;
  let h = 0;
  let ct = 0;
  const idat = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p);
    const type = buf.toString('ascii', p + 4, p + 8);
    const data = buf.subarray(p + 8, p + 8 + len);
    if (type === 'IHDR') {
      w = data.readUInt32BE(0);
      h = data.readUInt32BE(4);
      if (data[8] !== 8 || data[12] !== 0) throw new Error('PNG no soportado');
      ct = data[9];
    } else if (type === 'IDAT') idat.push(data);
    else if (type === 'IEND') break;
    p += 12 + len;
  }
  const bpp = ct === 6 ? 4 : ct === 2 ? 3 : 0;
  if (!bpp) throw new Error('Tipo de color PNG no soportado: ' + ct);
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = w * bpp;
  const out = new Uint8Array(h * stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)];
    const src = y * (stride + 1) + 1;
    const dst = y * stride;
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? out[dst + x - bpp] : 0;
      const b = y > 0 ? out[dst - stride + x] : 0;
      const c = x >= bpp && y > 0 ? out[dst - stride + x - bpp] : 0;
      let v = raw[src + x];
      if (f === 1) v += a;
      else if (f === 2) v += b;
      else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) {
        const pa = Math.abs(b - c);
        const pb = Math.abs(a - c);
        const pc = Math.abs(a + b - 2 * c);
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      out[dst + x] = v & 255;
    }
  }
  const elev = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const r = out[i * bpp];
    const g = out[i * bpp + 1];
    const bl = out[i * bpp + 2];
    elev[i] = r * 256 + g + bl / 256 - 32768;
  }
  return { w, h, elev };
}

// ---------------- mosaicos (Web Mercator)
const lon2px = (lon, z) => ((lon + 180) / 360) * 2 ** z * 256;
const lat2px = (lat, z) => {
  const r = (lat * Math.PI) / 180;
  return ((1 - Math.asinh(Math.tan(r)) / Math.PI) / 2) * 2 ** z * 256;
};

const tiles = new Map();
async function getTile(z, x, y) {
  const key = `${z}/${x}/${y}`;
  if (tiles.has(key)) return tiles.get(key);
  const file = path.join(CACHE, `${z}-${x}-${y}.png`);
  let buf;
  if (fs.existsSync(file)) buf = fs.readFileSync(file);
  else {
    const res = await fetch(TILE_URL(z, x, y));
    if (!res.ok) throw new Error(`HTTP ${res.status} en ${key}`);
    buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(file, buf);
    process.stdout.write('.');
  }
  const t = decodePNG(buf);
  tiles.set(key, t);
  return t;
}

async function preload(g) {
  const x0 = Math.floor(lon2px(g.lonW, g.zoom) / 256);
  const x1 = Math.floor(lon2px(g.lonE, g.zoom) / 256);
  const y0 = Math.floor(lat2px(g.latN, g.zoom) / 256);
  const y1 = Math.floor(lat2px(g.latS, g.zoom) / 256);
  for (let x = x0; x <= x1 + 1; x++) for (let y = y0; y <= y1 + 1; y++) await getTile(g.zoom, x, y);
  return (x1 - x0 + 2) * (y1 - y0 + 2);
}

function samplePx(z, px, py) {
  const tx = Math.floor(px / 256);
  const ty = Math.floor(py / 256);
  const t = tiles.get(`${z}/${tx}/${ty}`);
  const lx = Math.min(255, Math.max(0, Math.floor(px - tx * 256)));
  const ly = Math.min(255, Math.max(0, Math.floor(py - ty * 256)));
  return t.elev[ly * 256 + lx];
}
function sample(z, lat, lon) {
  // bilineal sobre píxeles vecinos (puede cruzar bordes de mosaico)
  const px = lon2px(lon, z) - 0.5;
  const py = lat2px(lat, z) - 0.5;
  const x0 = Math.floor(px);
  const y0 = Math.floor(py);
  const fx = px - x0;
  const fy = py - y0;
  const a = samplePx(z, x0, y0);
  const b = samplePx(z, x0 + 1, y0);
  const c = samplePx(z, x0, y0 + 1);
  const d = samplePx(z, x0 + 1, y0 + 1);
  return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy;
}

// Suavizado leve: mediana 3x3 (quita picos de edificios/árboles del SRTM) + promedio 3x3
function smooth(grid, w, h) {
  const med = new Float32Array(grid.length);
  const v = new Array(9);
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < w; i++) {
      let k = 0;
      for (let dj = -1; dj <= 1; dj++) {
        for (let di = -1; di <= 1; di++) {
          const x = Math.min(w - 1, Math.max(0, i + di));
          const y = Math.min(h - 1, Math.max(0, j + dj));
          v[k++] = grid[y * w + x];
        }
      }
      v.sort((p, q) => p - q);
      med[j * w + i] = v[4];
    }
  }
  const out = new Float32Array(grid.length);
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < w; i++) {
      let s = 0;
      let n = 0;
      for (let dj = -1; dj <= 1; dj++) {
        for (let di = -1; di <= 1; di++) {
          const x = i + di;
          const y = j + dj;
          if (x < 0 || y < 0 || x >= w || y >= h) continue;
          const wt = di === 0 && dj === 0 ? 4 : di === 0 || dj === 0 ? 2 : 1;
          s += med[y * w + x] * wt;
          n += wt;
        }
      }
      out[j * w + i] = s / n;
    }
  }
  return out;
}

async function buildGrid(name, g) {
  const n = await preload(g);
  const w = Math.round((g.lonE - g.lonW) / g.step) + 1;
  const h = Math.round((g.latN - g.latS) / g.step) + 1;
  let grid = new Float32Array(w * h);
  for (let j = 0; j < h; j++) {
    const lat = g.latN - j * g.step;
    for (let i = 0; i < w; i++) grid[j * w + i] = sample(g.zoom, lat, g.lonW + i * g.step);
  }
  grid = smooth(grid, w, h);
  let min = Infinity;
  let max = -Infinity;
  const q = new Uint16Array(w * h);
  for (let k = 0; k < grid.length; k++) {
    const e = Math.max(0, grid[k]);
    min = Math.min(min, e);
    max = Math.max(max, e);
    q[k] = Math.round(e * 2); // resolución de 0,5 m
  }
  console.log(`\n${name}: ${w}×${h} muestras desde ${n} mosaicos z${g.zoom} · altura ${min.toFixed(0)}–${max.toFixed(0)} m`);
  return { w, h, latN: g.latN, lonW: g.lonW, step: g.step, data: Buffer.from(q.buffer).toString('base64') };
}

fs.mkdirSync(CACHE, { recursive: true });
console.log('Descargando mosaicos de elevación (Terrain Tiles, AWS Open Data)…');
const core = await buildGrid('Núcleo', GRIDS.core);
const ring = await buildGrid('Anillo', GRIDS.ring);
const js = `// ARCHIVO GENERADO por scripts/fetch-dem.mjs. No editar a mano.
// Relieve real del Valle de Aburrá. Fuente: Terrain Tiles (Mapzen/Tilezen) en
// AWS Open Data (https://registry.opendata.aws/terrain-tiles/), basado en SRTM
// (NASA/USGS, dominio público). Alturas en medios metros (Uint16, little-endian,
// base64), filas de norte a sur y columnas de oeste a este.
export const DEM_SOURCE = 'Terrain Tiles (Mapzen/Tilezen, AWS Open Data) · SRTM (NASA/USGS)';
export const DEM_CORE = ${JSON.stringify(core)};
export const DEM_RING = ${JSON.stringify(ring)};
`;
fs.writeFileSync(OUT, js);
console.log(`Escrito ${path.relative(ROOT, OUT)} (${(js.length / 1024).toFixed(0)} KB)`);
