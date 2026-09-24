// Íconos SVG en línea (sin dependencias externas).
const svg = (body, vb = '0 0 24 24') =>
  `<svg viewBox="${vb}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;

export const ICONS = {
  metro: svg('<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8.5 14.5h.01M15.5 14.5h.01M8 21l2-4M16 21l-2-4"/>'),
  cable: svg('<path d="M3 4l18 3M12 5.5V9"/><rect x="6" y="9" width="12" height="10" rx="2.5"/><path d="M6 13h12"/>'),
  tram: svg('<path d="M9 2h6M12 2v3"/><rect x="5" y="5" width="14" height="13" rx="3"/><path d="M5 12h14M8 21l1.5-3M16 21l-1.5-3M9 15h.01M15 15h.01"/>'),
  bus: svg('<rect x="4" y="3" width="16" height="15" rx="3"/><path d="M4 11h16M8 21v-3M16 21v-3M8 14.5h.01M16 14.5h.01"/>'),
  lrt: svg('<rect x="4" y="4" width="16" height="13" rx="4"/><path d="M4 11h16M9 21l1-4M15 21l-1-4"/><path d="M2 21h20" stroke-dasharray="2 2"/>'),
  feeder: svg('<rect x="3" y="6" width="15" height="11" rx="2.5"/><path d="M18 9h2l1 3v5h-3M7 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>'),
  star: svg('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'),
  pin: svg('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  swap: svg('<path d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3"/>'),
  close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  home: svg('<path d="M3 11l9-7 9 7M5 10v10h14V10"/>'),
  moon: svg('<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>'),
  sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  info: svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>'),
  chart: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  help: svg('<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 114 2c-1 .7-1.5 1.2-1.5 2.5M12 17h.01"/>'),
  play: svg('<path d="M7 4l13 8-13 8z" fill="currentColor"/>'),
  pause: svg('<path d="M7 4h4v16H7zM14 4h4v16h-4z" fill="currentColor" stroke="none"/>'),
  camera: svg('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'),
  route: svg('<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 000-6H9a3 3 0 010-6h6.5"/>'),
  layers: svg('<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"/>'),
  zoom: svg('<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3M11 8v6M8 11h6"/>'),
  walk: svg('<circle cx="13" cy="4" r="2"/><path d="M10 21l2-6 3 3v3M9 11l3-4 3 3 3 1M12 7l-2 5 3 3"/>'),
  skip: svg('<path d="M5 5l9 7-9 7zM17 5v14"/>'),
};

export const MODE_ICON = { metro: ICONS.metro, cable: ICONS.cable, tram: ICONS.tram, bus: ICONS.bus, lrt: ICONS.lrt, feeder: ICONS.feeder };
