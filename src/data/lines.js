// Líneas del Sistema Integrado de Transporte del Valle de Aburrá (SITVA).
// Fichas técnicas tomadas de metrodemedellin.gov.co/usuarios/sistema-integrado
// (líneas A, B, T, H, J, K, L, M, P, 1, 2, O) y metrodela80.gov.co (Línea E).
// Coordenadas: aproximación geográfica de cada estación/parada.

const S = (key, lat, lon, opt = {}) => ({ key, lat, lon, ...opt });
const W = (lat, lon) => ({ wp: true, lat, lon });

export const MODE_INFO = {
  metro: { label: 'Metro', sub: 'Tren urbano' },
  cable: { label: 'Metrocable', sub: 'Cable aéreo' },
  tram: { label: 'Tranvía', sub: 'Tranvía de Ayacucho' },
  bus: { label: 'Metroplús', sub: 'Buses BRT y padrones' },
  lrt: { label: 'Metro de la 80', sub: 'En construcción' },
  feeder: { label: 'Rutas alimentadoras', sub: 'Rutas integradas' },
};

export const LINES = [
  {
    id: 'A', mode: 'metro', vehicle: 'train', color: '#0E5AA7', name: 'Línea A', title: 'Niquía - La Estrella',
    facts: {
      tipo: 'Férreo', longitud: '25,6 km', estaciones: '21 (8 elevadas)', tiempo: '42 min (1 trayecto)',
      velocidad: '40 km/h (máx. 80 km/h)', capacidadVehiculo: '300 usuarios por coche',
      flota: '80 trenes de 3 coches (240 coches) compartidos con la Línea B',
      frecuencia: '2:50 min (hora pico)', capacidadHora: '48.653 pasajeros/hora/sentido',
      inicio: '30 de noviembre de 1995', transferencias: 'Acevedo, San Antonio, Hospital, Industriales',
    },
    minutes: 42, headway: 2.83, sim: { count: 16 },
    route: [
      S('niquia', 6.33775, -75.5439), S('bello', 6.3302, -75.5536), S('madera', 6.31544, -75.55519),
      S('acevedo', 6.30045, -75.55826), S('tricentenario', 6.29047, -75.56478),
      S('caribe', 6.27768, -75.56947, { elev: 1 }), W(6.2735, -75.5678),
      S('universidad', 6.26915, -75.56588, { elev: 1 }), S('hospital', 6.26362, -75.56352, { elev: 1 }),
      S('prado', 6.25698, -75.56627, { elev: 1 }), S('parque_berrio', 6.25018, -75.56839, { elev: 1 }),
      S('san_antonio', 6.2472, -75.5699, { elev: 1 }), S('alpujarra', 6.24253, -75.5715, { elev: 1 }),
      S('exposiciones', 6.23788, -75.57287, { elev: 1 }), S('industriales', 6.22967, -75.57581),
      S('poblado', 6.2125, -75.5781), S('aguacatala', 6.1937, -75.5822), S('ayura', 6.1861, -75.5856),
      S('envigado', 6.1734, -75.5958), S('itagui', 6.1628, -75.6053), S('sabaneta', 6.1584, -75.6174),
      S('la_estrella', 6.1525, -75.6263),
    ],
  },
  {
    id: 'B', mode: 'metro', vehicle: 'train', color: '#F28C1E', name: 'Línea B', title: 'San Antonio - San Javier',
    facts: {
      tipo: 'Férreo', longitud: '5,5 km', estaciones: '6 (5 elevadas)', tiempo: '10,5 min (1 trayecto)',
      velocidad: '40 km/h (máx. 80 km/h)', capacidadVehiculo: '300 usuarios por coche',
      flota: '80 trenes de 3 coches compartidos con la Línea A', frecuencia: '3:50 min (hora pico)',
      capacidadHora: '16.231 pasajeros/hora/sentido', inicio: '29 de febrero de 1996',
      transferencias: 'San Antonio, San Javier',
    },
    minutes: 10.5, headway: 3.83, sim: { count: 4 },
    route: [
      S('san_antonio', 6.24738, -75.57065, { elev: 1 }), S('cisneros', 6.2489, -75.5763, { elev: 1 }),
      S('suramericana', 6.2533, -75.5831, { elev: 1 }), S('estadio', 6.2528, -75.588, { elev: 1 }),
      S('floresta', 6.2587, -75.5976, { elev: 1 }), S('santa_lucia', 6.2583, -75.6047, { elev: 1 }),
      S('san_javier', 6.2561, -75.6134),
    ],
  },
  {
    id: 'T', mode: 'tram', vehicle: 'tram', color: '#17A340', name: 'Línea T-A', title: 'San Antonio - Oriente',
    facts: {
      tipo: 'Férreo (tranvía)', longitud: '4,2 km', estaciones: '3 estaciones y 6 paradas', tiempo: '19 min',
      velocidad: '16 km/h (máx. 80 km/h)', capacidadVehiculo: '300 usuarios por vehículo', flota: '12 tranvías',
      frecuencia: '4:44 min (hora pico)', capacidadHora: '3.807 pasajeros/hora/sentido',
      inicio: '31 de marzo de 2016', transferencias: 'San Antonio, Miraflores, Oriente',
    },
    minutes: 19, headway: 4.73, sim: { count: 6 },
    route: [
      S('san_antonio', 6.247, -75.5686), S('san_jose', 6.2472, -75.5642), S('pabellon_agua', 6.2469, -75.5615),
      S('bicentenario', 6.2463, -75.5586), S('buenos_aires', 6.245, -75.5552), S('miraflores', 6.2433, -75.5513),
      S('loyola', 6.2425, -75.548), S('alejandro_echavarria', 6.242, -75.5445), S('oriente', 6.2415, -75.5405),
    ],
  },
  {
    id: 'H', mode: 'cable', vehicle: 'gondola', color: '#E6007E', name: 'Línea H', title: 'Oriente - Villa Sierra',
    facts: {
      tipo: 'Cable aéreo', longitud: '1,4 km', estaciones: '3', tiempo: '5 min', velocidad: '18 km/h',
      capacidadVehiculo: '10 usuarios por telecabina (8 sentados, 2 de pie)', flota: '44 telecabinas',
      pilonas: 10, frecuencia: '0:13 min (hora pico)', capacidadHora: '1.800 pasajeros/hora/sentido',
      inicio: '17 de diciembre de 2016', transferencias: 'Oriente',
    },
    minutes: 5, headway: 0.22, cabins: 44, pylons: 10,
    route: [S('oriente', 6.24185, -75.5399), S('las_torres', 6.2445, -75.5345), S('villa_sierra', 6.247, -75.529)],
  },
  {
    id: 'J', mode: 'cable', vehicle: 'gondola', color: '#FFC20E', name: 'Línea J', title: 'San Javier - La Aurora',
    facts: {
      tipo: 'Cable aéreo', longitud: '2,7 km', estaciones: '4', tiempo: '12 min', velocidad: '18 km/h',
      capacidadVehiculo: '10 usuarios por telecabina (8 sentados, 2 de pie)', flota: '119 telecabinas',
      pilonas: 31, frecuencia: '0:12 min (hora pico)', capacidadHora: '3.000 pasajeros/hora/sentido',
      inicio: '3 de marzo de 2008', transferencias: 'San Javier',
    },
    minutes: 12, headway: 0.2, cabins: 119, pylons: 31,
    route: [
      S('san_javier', 6.2556, -75.6142), S('juan_xxiii', 6.259, -75.62), S('vallejuelos', 6.2655, -75.6255),
      S('la_aurora', 6.273, -75.631),
    ],
  },
  {
    id: 'K', mode: 'cable', vehicle: 'gondola', color: '#A6CE39', name: 'Línea K', title: 'Acevedo - Santo Domingo',
    facts: {
      tipo: 'Cable aéreo', longitud: '2 km', estaciones: '4', tiempo: '9 min', velocidad: '18 km/h',
      capacidadVehiculo: '10 usuarios por telecabina (8 sentados, 2 de pie)', flota: '93 telecabinas',
      pilonas: 20, frecuencia: '0:12 min (hora pico)', capacidadHora: '3.000 pasajeros/hora/sentido',
      inicio: '7 de agosto de 2004', transferencias: 'Acevedo, Santo Domingo',
    },
    minutes: 9, headway: 0.2, cabins: 93, pylons: 20,
    route: [
      S('acevedo', 6.3002, -75.5572), S('andalucia', 6.2984, -75.5525), S('popular', 6.2966, -75.5465),
      S('santo_domingo', 6.2935, -75.541),
    ],
  },
  {
    id: 'L', mode: 'cable', vehicle: 'gondola', color: '#8C5B23', name: 'Línea L', title: 'Santo Domingo - Arví',
    facts: {
      tipo: 'Cable aéreo (turístico)', longitud: '4,6 km', estaciones: '2', tiempo: '15 min', velocidad: '18 km/h',
      capacidadVehiculo: '10 usuarios por telecabina (8 sentados, 2 de pie)', flota: '55 telecabinas',
      pilonas: 23, frecuencia: '0:14 min (hora pico)', capacidadHora: '1.200 pasajeros/hora/sentido',
      inicio: '9 de febrero de 2010', transferencias: 'Santo Domingo',
      horario: 'No presta servicio el primer día hábil de la semana. Primer viaje 9:00 a.m. (domingos y festivos 8:30 a.m.), último 6:00 p.m.',
    },
    minutes: 15, headway: 0.23, cabins: 55, pylons: 23,
    route: [S('santo_domingo', 6.2931, -75.5402), S('arvi', 6.2812, -75.5)],
  },
  {
    id: 'M', mode: 'cable', vehicle: 'gondola', color: '#6F2C91', name: 'Línea M', title: 'Miraflores - Trece de Noviembre',
    facts: {
      tipo: 'Cable aéreo', longitud: '1,05 km', estaciones: '3', tiempo: '4 min', velocidad: '18 km/h',
      capacidadVehiculo: '10 usuarios por telecabina (8 sentados, 2 de pie)', flota: '51 telecabinas',
      pilonas: 11, frecuencia: '0:09 min (hora pico)', capacidadHora: '2.500 pasajeros/hora/sentido',
      inicio: '28 de febrero de 2019', transferencias: 'Miraflores',
    },
    minutes: 4, headway: 0.15, cabins: 51, pylons: 11,
    route: [S('miraflores', 6.2439, -75.5507), S('el_pinal', 6.2472, -75.5478), S('trece_noviembre', 6.2505, -75.545)],
  },
  {
    id: 'P', mode: 'cable', vehicle: 'gondola', color: '#E30613', name: 'Línea P', title: 'Acevedo - El Progreso',
    facts: {
      tipo: 'Cable aéreo', longitud: '2,7 km', estaciones: '4', tiempo: '10 min', velocidad: '19 km/h',
      capacidadVehiculo: '12 usuarios por telecabina', flota: '137 telecabinas', pilonas: 29,
      frecuencia: '0:11 min (hora pico)', capacidadHora: '4.000 pasajeros/hora/sentido',
      inicio: '10 de junio de 2021', transferencias: 'Acevedo',
    },
    minutes: 10, headway: 0.18, cabins: 137, pylons: 29,
    route: [
      S('acevedo', 6.3008, -75.5594), S('sena', 6.2986, -75.5665), S('doce_octubre', 6.2958, -75.5745),
      S('el_progreso', 6.2929, -75.5822),
    ],
  },
  {
    id: '1', mode: 'bus', vehicle: 'articulated', color: '#00788A', name: 'Línea 1', title: 'U. de M. - Parque Aranjuez',
    subtitle: 'Metroplús por la Av. del Ferrocarril', laneShift: -1.4, liftBias: 0,
    facts: {
      tipo: 'BRT (Bus Rapid Transit)', longitud: '12,5 km', estaciones: '20 (San Pedro fuera de servicio)',
      tiempo: '45 min', velocidad: '16 km/h (máx. 60 km/h)', capacidadVehiculo: '154 por bus articulado',
      flota: '30 buses articulados a gas y 1 eléctrico', frecuencia: '2:45 min (hora pico)',
      capacidadHora: '3.270 pasajeros/hora/sentido', inicio: '22 de diciembre de 2011',
      transferencias: 'Hospital, Cisneros, Industriales',
    },
    minutes: 45, headway: 2.75, sim: { count: 9 },
    route: [
      S('u_de_m', 6.2318, -75.61), S('los_alpes', 6.2328, -75.6052), S('la_palma', 6.2332, -75.601),
      S('parque_belen', 6.2329, -75.5965), S('rosales', 6.2325, -75.592), S('fatima', 6.2322, -75.5872),
      S('nutibara', 6.2318, -75.583), W(6.2312, -75.5792), W(6.2304, -75.5765),
      S('industriales', 6.2299, -75.5748), W(6.2335, -75.5752), W(6.2385, -75.5758),
      S('plaza_mayor', 6.244, -75.5756), S('cisneros', 6.2495, -75.5744), S('minorista', 6.2545, -75.5719),
      S('chagualo', 6.2588, -75.5696), W(6.2622, -75.568), S('ruta_n', 6.2634, -75.5668),
      S('hospital', 6.2633, -75.563), S('san_pedro', 6.2638, -75.559, { closed: true }),
      S('palos_verdes', 6.264, -75.5552), S('gardel', 6.2678, -75.5556), S('manrique', 6.271, -75.5558),
      S('las_esmeraldas', 6.275, -75.556), S('berlin', 6.2788, -75.5558), W(6.2808, -75.5562),
      S('parque_aranjuez', 6.2815, -75.5578),
    ],
  },
  {
    id: '2', mode: 'bus', vehicle: 'padron', color: '#5CB1B6', name: 'Línea 2', title: 'U. de M. - Parque Aranjuez',
    subtitle: 'Por la Av. Oriental', laneShift: 1.4, liftBias: 0.025,
    facts: {
      tipo: 'Buses padrón', longitud: '13,5 km', estaciones: '19', tiempo: '52 min',
      velocidad: '13 km/h (máx. 60 km/h)', capacidadVehiculo: '90 por bus padrón',
      flota: '47 buses a gas y 64 eléctricos (compartidos con la Línea O)', frecuencia: '4:17 min (hora pico)',
      capacidadHora: '1.417 pasajeros/hora/sentido', inicio: '22 de abril de 2013',
      transferencias: 'Industriales',
    },
    minutes: 52, headway: 4.28, sim: { count: 8 },
    route: [
      S('u_de_m', 6.2318, -75.61), S('los_alpes', 6.2328, -75.6052), S('la_palma', 6.2332, -75.601),
      S('parque_belen', 6.2329, -75.5965), S('rosales', 6.2325, -75.592), S('fatima', 6.2322, -75.5872),
      S('nutibara', 6.2318, -75.583), W(6.2312, -75.5792), W(6.2304, -75.5765),
      S('industriales', 6.2299, -75.5748), W(6.2297, -75.5728), S('barrio_colombia', 6.2295, -75.5705),
      W(6.2322, -75.5692), S('perpetuo_socorro', 6.2355, -75.568), S('barrio_colon', 6.2425, -75.5655),
      S('san_jose', 6.2468, -75.5638), S('la_playa', 6.2495, -75.5625), S('catedral', 6.254, -75.562),
      W(6.2585, -75.5595), W(6.262, -75.5565), S('palos_verdes', 6.264, -75.5552), S('gardel', 6.2678, -75.5556),
      S('manrique', 6.271, -75.5558), S('las_esmeraldas', 6.275, -75.556), S('berlin', 6.2788, -75.5558),
      W(6.2808, -75.5562), S('parque_aranjuez', 6.2815, -75.5578),
    ],
  },
  {
    id: 'O', mode: 'bus', vehicle: 'padron', color: '#F39A94', name: 'Línea O', title: 'Caribe - La Palma',
    subtitle: 'Por la Avenida 80', laneShift: -2.8, liftBias: 0.05,
    facts: {
      tipo: 'Buses padrón (tránsito rápido)', longitud: '9,2 km', estaciones: '27 paraderos', tiempo: '45 min',
      velocidad: '13 km/h (máx. 60 km/h)', capacidadVehiculo: '80 por bus padrón',
      flota: '47 buses a gas y 64 eléctricos (entre las líneas 2 y O)', frecuencia: '6:00 min (hora pico); 11:00 min promedio',
      capacidadHora: '800 pasajeros/hora/sentido', inicio: '30 de noviembre de 2019',
      transferencias: 'Caribe, Floresta, La Palma',
    },
    minutes: 45, headway: 6, sim: { count: 7 },
    route: [
      S('caribe', 6.278, -75.5708), S('universal', 6.2795, -75.5755), S('cordoba', 6.2802, -75.5805),
      S('pilarica', 6.2788, -75.585), S('ciudadela_universitaria', 6.2762, -75.5888),
      S('facultad_minas', 6.2728, -75.5918), S('los_colores', 6.2672, -75.594), S('calasanz', 6.2626, -75.5958),
      S('floresta', 6.259, -75.597), S('los_pinos', 6.2528, -75.5988), S('laureles', 6.247, -75.5995),
      S('santa_gema', 6.242, -75.5998), S('villa_aburra', 6.2375, -75.6002), S('la_palma', 6.2338, -75.6008),
    ],
  },
  {
    id: 'E', mode: 'lrt', vehicle: 'lrt', color: '#EF7FAF', name: 'Línea E', title: 'Metro de la 80: Caribe - Aguacatala',
    construction: true, liftBias: 0.08,
    facts: {
      tipo: 'Metro ligero, a nivel (San Germán será subterránea)', longitud: '13,25 km',
      estaciones: '17 accesos: 3 estaciones (Caribe, San Germán, Aguacatala) y 14 paradas',
      tiempo: '≈33 min (estimado para esta simulación)', estado: 'En construcción: la obra supera el 40 % de ejecución',
      identidad: 'Identificada con el color rosado', integracion: 'Con el Metro en Caribe, Floresta y Aguacatala, y con la Línea 1 en La Palma',
      inicio: 'Operación estimada: 2028', recorrido: 'Caribe - Transversal 73 - Calle 65 - Avenida 80/81 - Aguacatala',
    },
    minutes: 33, headway: 5, sim: { count: 5 },
    route: [
      S('caribe', 6.2772, -75.5712), W(6.278, -75.5755), S('cordoba', 6.2797, -75.5795),
      S('ciudadela_educativa', 6.277, -75.5845), S('san_german', 6.2725, -75.588, { underground: true }),
      W(6.2708, -75.5922), W(6.266, -75.5948), S('colombia', 6.2605, -75.5966), S('floresta', 6.2585, -75.5972),
      S('los_pinos', 6.253, -75.5984), S('san_juan', 6.249, -75.599), S('villa_aburra', 6.2378, -75.5998),
      S('la_palma', 6.2335, -75.6004), S('san_bernardo', 6.2275, -75.6007), S('loma_bernal', 6.2205, -75.6002),
      S('la_mota', 6.214, -75.599), S('cristo_rey', 6.209, -75.595), S('guayabal', 6.204, -75.5905),
      S('apolo', 6.1985, -75.587), W(6.1955, -75.585), S('aguacatala', 6.1933, -75.5829),
    ],
  },
];

export const LINE_BY_ID = Object.fromEntries(LINES.map((l) => [l.id, l]));

// Transbordos peatonales explícitos entre paradas con nombre distinto.
export const EXTRA_TRANSFERS = [];

// Totales del sistema (metrodemedellin.gov.co)
export const SYSTEM_FACTS = {
  lineas: '12 líneas en 4 modos (+ Línea E en construcción)',
  longitud: '85,12 km',
  desglose: [
    ['Metro', '31,3 km'],
    ['Cable aéreo', '14,62 km'],
    ['Troncal BRT', '12,5 km'],
    ['Pretroncal padrones', '22,5 km'],
    ['Tranvía', '4,2 km'],
  ],
  flota: [
    ['Coches de tren', '240'],
    ['Telecabinas', '499'],
    ['Buses articulados', '31'],
    ['Buses padrones', '111'],
    ['Vehículos tranviarios', '12'],
  ],
  accesos: [
    ['Estaciones', '42'],
    ['Paradas', '28'],
    ['Paraderos', '24'],
  ],
  capacidad: '86.078 pasajeros por hora por sentido',
};
