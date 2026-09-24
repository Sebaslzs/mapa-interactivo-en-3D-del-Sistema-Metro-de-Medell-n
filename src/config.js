// Constantes globales de la escena.
// Escala: 1 unidad de escena = 10 metros en planta. El relieve se exagera
// verticalmente (VEX) para que el valle y las laderas se lean con claridad.

export const M_PER_UNIT = 10;
export const VEX = 1.7;
export const BASE_ELEV = 1400; // m.s.n.m. que corresponde a y = 0

// Colores de marca (aproximados a la señalética oficial del Metro de Medellín)
export const BRAND = {
  green: '#6DB843',
  greenDark: '#4E9A2E',
  dark: '#1D1D1B',
  gray: '#8A8C8E',
};

// Velocidades de simulación (unidades/segundo). El tráfico ambiental corre
// en "time-lapse" (~10x) y el recorrido del pasajero un poco más rápido.
export const AMBIENT = {
  metro: { vmax: 20, accel: 7, dwell: 2.2 },
  tram: { vmax: 8, accel: 3, dwell: 2.6 },
  bus: { vmax: 9, accel: 3.5, dwell: 1.8 },
  lrt: { vmax: 11, accel: 4, dwell: 2.4 },
  feeder: { vmax: 6.5, accel: 3, dwell: 1.5 },
  cable: { v: 4.2, stationFactor: 0.22 },
};

export const JOURNEY = {
  metro: { vmax: 42, accel: 16, dwell: 1.1 },
  tram: { vmax: 18, accel: 8, dwell: 1.1 },
  bus: { vmax: 22, accel: 9, dwell: 1.0 },
  lrt: { vmax: 24, accel: 10, dwell: 1.1 },
  cable: { v: 9, stationFactor: 0.28 },
  walk: 2.2,
};

export const SHADOW_SIZE = 2048;
