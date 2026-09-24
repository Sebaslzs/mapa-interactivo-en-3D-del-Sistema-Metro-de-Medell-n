# Aburrá 3D: movilidad del Valle de Aburrá en 3D

Aplicación web interactiva en 3D, de estilo *low poly*, del sistema de transporte masivo del Valle de Aburrá: 12 líneas en operación más la Línea E (Metro de la 80), que está en construcción. Simula de forma animada el recorrido de un pasajero entre dos estaciones cualesquiera.

> **Proyecto independiente y no oficial.** Aburrá 3D no está afiliado al Metro de Medellín ni cuenta con su respaldo. «Metro de Medellín», «Metrocable», «Metroplús» y «Cívica» son marcas de sus respectivos titulares y se mencionan solo con fines descriptivos. Para información oficial consulta [metrodemedellin.gov.co](https://www.metrodemedellin.gov.co).

**Licencia:** © 2026 Sebaslzs. Todos los derechos reservados. El código es visible, pero no puede copiarse, modificarse, redistribuirse ni usarse comercialmente sin permiso escrito del autor. Consulta [LICENSE](LICENSE).

## Cómo ejecutarla

**Opción 1, sin instalar nada.** Abre `index.html` con doble clic (o usa `iniciar.bat`). El proyecto ya incluye el paquete compilado `dist/app.js`, así que funciona sin conexión en Chrome, Edge o Firefox.

**Opción 2, servidor local** (requiere Node.js):

```bash
npm install
npm start        # compila y sirve en http://localhost:5173
npm run dev      # modo desarrollo: recompila al guardar
npm run build    # solo compila dist/app.js
```

## Qué incluye

| Requerimiento | Implementación |
|---|---|
| Mapa 3D con relieve | Valle de Aburrá con relieve procedural: fondo del valle, laderas de las comunas, altiplano de Santa Elena, cerros tutelares y el río Medellín. La altura se exagera ×1,7. |
| Estaciones clicables | Unas 93 estaciones y paradas con modelo 3D propio según el modo, más nombres flotantes según el nivel de zoom. |
| Lugares turísticos | 19 hitos modelados y clicables, visibles a lo lejos: Plaza Botero, Biblioteca España, Pueblito Paisa, Estadio, Comuna 13, Parque Arví, Coltejer, Explora, Orquideorama, etc. |
| Recorrido 3D | Ruta calculada con Dijkstra sobre la red, que suma los tiempos oficiales y la espera por frecuencia. Tiene cuatro momentos: **1)** un vuelo de la cámara por toda la ruta; **2)** el pasajero camina, valida la Cívica, espera y aborda; **3)** viaja parada a parada con cámara de seguimiento (cinemática o libre); **4)** hace los transbordos y llega, con resumen del viaje. |
| Fichas flotantes | Tarjeta anclada en 3D con nombre, conexiones y transbordos (directos o peatonales), rutas integradas, puntos de interés, eventos de ciudad, servicios y dirección. |
| Mapa 2D | El botón **Mapa 2D** cambia a un mapa plano estilo cartografía (calles, avenidas, río, parques y líneas oficiales) con cámara inclinada. El viaje se proyecta encima con el vehículo 3D, el avatar caminando y una estela roja del trayecto. Se puede alternar con la vista 3D incluso en medio de un viaje. |
| Puntos de interés | Los 111 sitios que el Metro publica por estación son clicables. Cada uno abre su ficha con descripción, categoría, pin en el mapa, estaciones cercanas y distancia a pie. |
| Modelos por sistema | Tren de 3 coches (con estela de partículas), tranvía con pantógrafo y chispas, telecabina con balanceo de péndulo y sombra, bus articulado (Línea 1), bus padrón (Líneas 2 y O), bus alimentador, tren ligero de la 80 y avión en el Olaya Herrera. |
| Personajes | Tres avatares animados (estudiante, turista, arriero paisa) y usuarios en estaciones y lugares turísticos. |
| Estética | Low poly con iluminación vibrante, ciclo día/noche (luces de la ciudad y estrellas), nubes con sombra y colores oficiales de cada línea. |

## Controles

- **Mover:** arrastrar con el botón izquierdo (un dedo en pantallas táctiles).
- **Girar o inclinar:** arrastrar con el botón derecho (dos dedos).
- **Zoom:** rueda del ratón o pellizco.
- **Durante el viaje:** pausa, velocidad (0,5× a 4×), cámara cinemática o libre, y terminar.

## Fuentes de datos

- **metrodemedellin.gov.co, sección Sistema integrado** (líneas A, B, T-A, H, J, K, L, M, P, 1, 2 y O): estaciones, direcciones, sitios de interés, servicios, rutas integradas, longitud, tiempo de recorrido, velocidad, frecuencia, flota, pilonas, capacidad y fecha de inicio. De la sección *Qué hacer y dónde ir en Medellín* salen los lugares turísticos y su estación sugerida.
- **metrodela80.gov.co:** 13,25 km, 17 accesos (3 estaciones y 14 paradas), trazado a nivel, San Germán subterránea, color rosado y avance de obra.

## Aproximaciones (para tenerlas presentes)

- Las coordenadas de las estaciones y el relieve son aproximaciones geográficas. No es un modelo topográfico oficial.
- Los vehículos se dibujan unas 2,5 veces más grandes que su tamaño real para que se lean en el mapa. La animación corre en *time-lapse*.
- El trazado de las **rutas alimentadoras** es ilustrativo. Los códigos de ruta sí son los oficiales.
- **Puntos de interés:** el nombre, la estación, la categoría (cuando existe) y los eventos salen del sitio oficial. Las descripciones son texto de referencia general, y la ubicación del pin y la distancia a pie son aproximadas. Los sitios sin ubicación conocida se señalan junto a su estación.
- El tiempo de recorrido de la **Línea E** (≈33 min) es una estimación de la simulación, porque el proyecto aún no publica ese dato. Puede excluirse del planificador.

## Estructura

```
index.html · styles.css · dist/app.js (compilado)
src/
  main.js              arranque, escena, luces, interacción, ciclo día/noche
  config.js · geo.js   escala, proyección lat/lon → escena, modelo de elevación
  data/                líneas, estaciones, lugares turísticos, alimentadoras
  world/               terreno, trazados de red, infraestructura, ciudad y cielo
  models/              vehículos, estaciones, personajes y lugares emblemáticos
  sim/                 enrutador, tráfico, partículas, cámara y viaje del pasajero
  ui/                  interfaz (planificador, leyenda, fichas, HUD, modales)
```

Tecnologías: [three.js](https://threejs.org) r186 y [esbuild](https://esbuild.github.io).
