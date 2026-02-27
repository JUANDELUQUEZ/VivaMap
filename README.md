# VivaMap

Prototipo para _Innovation Meet‑Up_ de Viva Aerobús.

Esta mini‑aplicación reproduce un mapa interactivo del Aeropuerto
Internacional de Guadalajara. Permite seleccionar un punto de origen y uno
de destino, mostrar pines sobre un plano y calcular tiempos de espera y de
caminata simulados. A partir de febrero de 2026 se añadieron:

- **Panel superior** con selección de ruta y datos de “vuelo” (número, asiento,
  hora, puerta, overbooking y recordatorio).
- **Botón de acción** siempre visible en la parte inferior de la ventana.
- Código completamente comentado, estructura limpia y mocks de datos para dar
  dinamismo.
- Colores y bordes redondeados alineados con la imagen corporativa de Viva
  Aerobús.

## Estructura del proyecto

```
/VivaMap
	├─ assets/            # imágenes, iconos, plano
	├─ mapData.js         # base estática de nodos
	├─ main.js            # lógica de UI y cálculos
	├─ index.html         # markup
	├─ style.css          # estilos generales
	└─ README.md
```

## Puesta en marcha

1. Abrir `index.html` en un navegador moderno (Chrome, Edge, Firefox).
2. Seleccionar un origen y un destino en los menús desplegables.
3. Observar actualización de pines y panel inferior de información.
4. El botón **Trazar ruta** permanece fijo y se habilita cuando hay ruta válida.

> El proyecto es 100 % cliente; no requiere servidor ni compilación.

## Notas

- Los valores de tiempo de espera, caminata y datos de vuelo son simulados
  (mock) y se regeneran en cada cambio de selección.
- El CSS está comentado y estructurado para facilitar futuras mejoras.
