// Lugares turísticos y representativos. La estación sugerida proviene de la
// sección "Qué hacer y dónde ir" y de los sitios de interés de cada estación
// en metrodemedellin.gov.co.

export const LANDMARKS = [
  {
    id: 'arvi', name: 'Parque Arví', lat: 6.2835, lon: -75.4965, model: 'arvi', category: 'Naturaleza',
    station: 'arvi', clear: 30,
    desc: 'Parque ecoturístico de bosque andino en el corregimiento de Santa Elena, con senderos y mercado campesino. Se llega en la Línea L del Metrocable.',
  },
  {
    id: 'biblioteca_espana', name: 'Parque Biblioteca España', lat: 6.2947, lon: -75.5424, model: 'biblioteca',
    category: 'Arquitectura', station: 'santo_domingo', clear: 7,
    desc: 'Sus tres volúmenes oscuros, que parecen rocas, se volvieron un ícono de la transformación de Santo Domingo Savio junto a la Línea K.',
  },
  {
    id: 'plaza_botero', name: 'Plaza Botero y Museo de Antioquia', lat: 6.2523, lon: -75.5688, model: 'botero',
    category: 'Arte y cultura', station: 'parque_berrio', clear: 9,
    desc: 'Veintitrés esculturas monumentales de Fernando Botero frente al Museo de Antioquia y el Palacio de la Cultura Rafael Uribe Uribe.',
  },
  {
    id: 'coltejer', name: 'Edificio Coltejer', lat: 6.2507, lon: -75.5661, model: 'coltejer', category: 'Arquitectura',
    station: 'parque_berrio', clear: 5,
    desc: 'Rascacielos de 175 m cuya cúspide evoca una aguja de tejer. Es un símbolo de la industria textil antioqueña.',
  },
  {
    id: 'catedral', name: 'Catedral Metropolitana', lat: 6.2542, lon: -75.5641, model: 'catedral', category: 'Patrimonio',
    station: 'prado', clear: 6,
    desc: 'Una de las iglesias de ladrillo cocido más grandes del mundo, frente al Parque de Bolívar.',
  },
  {
    id: 'pueblito_paisa', name: 'Pueblito Paisa (Cerro Nutibara)', lat: 6.2362, lon: -75.5795, model: 'pueblito',
    category: 'Mirador', station: 'industriales', clear: 14,
    desc: 'Réplica de un pueblo antioqueño tradicional en la cima del Cerro Nutibara, con vista panorámica del valle.',
  },
  {
    id: 'estadio', name: 'Estadio Atanasio Girardot', lat: 6.2567, lon: -75.5903, model: 'estadio', category: 'Deporte',
    station: 'estadio', clear: 22,
    desc: 'Corazón de la Unidad Deportiva Atanasio Girardot, casa del fútbol de la ciudad. Queda junto a la estación Estadio de la Línea B.',
  },
  {
    id: 'explora', name: 'Parque Explora', lat: 6.2703, lon: -75.5652, model: 'explora', category: 'Ciencia',
    station: 'universidad', clear: 9,
    desc: 'Museo interactivo de ciencia y tecnología con acuario y vivario. Sus volúmenes rojos lo hacen inconfundible.',
  },
  {
    id: 'jardin_botanico', name: 'Jardín Botánico (Orquideorama)', lat: 6.2712, lon: -75.5634, model: 'orquideorama',
    category: 'Naturaleza', station: 'universidad', clear: 10,
    desc: 'Pulmón verde del norte de la ciudad. El Orquideorama tiene cubiertas hexagonales en forma de flor.',
  },
  {
    id: 'parque_norte', name: 'Parque Norte', lat: 6.2738, lon: -75.5672, model: 'parque_norte', category: 'Recreación',
    station: 'universidad', clear: 8,
    desc: 'Parque de diversiones tradicional cerca de la estación Universidad.',
  },
  {
    id: 'comuna13', name: 'Comuna 13: escaleras eléctricas', lat: 6.2553, lon: -75.6212, model: 'comuna13',
    category: 'Cultura urbana', station: 'san_javier', clear: 8,
    desc: 'Galería de grafitis y escaleras eléctricas al aire libre en el barrio Las Independencias. Se llega por la ruta integrada 221i desde San Javier.',
  },
  {
    id: 'pies_descalzos', name: 'Parque de los Pies Descalzos y Edificio EPM', lat: 6.2443, lon: -75.5782,
    model: 'epm', category: 'Espacio público', station: 'alpujarra', clear: 10,
    desc: 'Espacio público con fuentes y arena junto al Edificio Inteligente de EPM y el Teatro Metropolitano.',
  },
  {
    id: 'plaza_luz', name: 'Plaza de Cisneros (Parque de las Luces)', lat: 6.2466, lon: -75.5722, model: 'luces',
    category: 'Espacio público', station: 'cisneros', clear: 6,
    desc: 'Bosque de postes de luz frente a los edificios Vásquez y Carré y a la Biblioteca EPM.',
  },
  {
    id: 'casa_memoria', name: 'Museo Casa de la Memoria', lat: 6.2458, lon: -75.5592, model: 'memoria',
    category: 'Memoria', station: 'bicentenario', clear: 5,
    desc: 'Museo dedicado a la memoria del conflicto armado, en el Parque Bicentenario junto al tranvía.',
  },
  {
    id: 'volador', name: 'Cerro El Volador', lat: 6.265, lon: -75.581, model: 'cerro', category: 'Naturaleza',
    station: 'suramericana', clear: 26,
    desc: 'Cerro tutelar y parque natural regional metropolitano, con senderos y vista de 360° sobre el valle.',
  },
  {
    id: 'olaya', name: 'Aeropuerto Olaya Herrera', lat: 6.2197, lon: -75.5905, model: 'aeropuerto', category: 'Transporte',
    station: 'poblado', clear: 32,
    desc: 'Aeropuerto regional con una terminal art déco que es Monumento Nacional. Está entre El Poblado y Guayabal.',
  },
  {
    id: 'milla_oro', name: 'Parque Lleras y Milla de Oro', lat: 6.2092, lon: -75.567, model: 'poblado', category: 'Gastronomía',
    station: 'poblado', clear: 10,
    desc: 'Zona gastronómica y de vida nocturna de El Poblado, rodeada por las torres de la Milla de Oro.',
  },
  {
    id: 'castillo', name: 'Museo El Castillo', lat: 6.1985, lon: -75.5705, model: 'castillo', category: 'Museo',
    station: 'aguacatala', clear: 6,
    desc: 'Castillo de estilo gótico medieval rodeado de jardines, abierto como museo.',
  },
  {
    id: 'mamm', name: 'Museo de Arte Moderno (MAMM)', lat: 6.2233, lon: -75.5738, model: 'mamm', category: 'Arte',
    station: 'industriales', clear: 6,
    desc: 'Museo en un antiguo edificio industrial de Ciudad del Río, cerca del Mercado del Río.',
  },
];
