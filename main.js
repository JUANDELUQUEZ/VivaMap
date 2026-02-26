// Importamos los datos y la lógica de filtrado desde nuestro módulo de datos
import { nodosMapa, filtrarNodosPorCategoria } from "./mapData.js";

// 1. Referencias y caché del DOM (Evita buscar elementos múltiples veces)
const pinsLayer = document.getElementById("pins-layer");
const filterBtns = document.querySelectorAll(".filter-btn");
const infoPanel = document.getElementById("poi-detail");
const closeBtn = document.querySelector(".close-btn");

// Elementos internos del panel de detalles
const poiName = document.getElementById("poi-name");
const poiCategory = document.getElementById("poi-category");
const waitTime = document.getElementById("wait-time");
const walkTime = document.getElementById("walk-time");

// 2. Función de Renderizado Dinámico
const renderPines = (datos) => {
  // Limpiar el contenedor antes de inyectar nuevos nodos
  pinsLayer.innerHTML = "";

  datos.forEach((nodo) => {
    // Creación del nodo DOM
    const pin = document.createElement("div");
    pin.className = "pin";

    // Inyección de coordenadas absolutas extraídas de la base de datos estática
    pin.style.left = nodo.coordenadasX;
    pin.style.top = nodo.coordenadasY;

    // Atributo para accesibilidad básica
    pin.title = nodo.nombre;

    // Event Listener de Interacción (Clic en el pin)
    pin.addEventListener("click", () => {
      mostrarDetalles(nodo);
    });

    // Anexar al DOM
    pinsLayer.appendChild(pin);
  });
};

// 3. Control del Panel de Detalles
const mostrarDetalles = (nodo) => {
  // Inyección de datos al HTML
  poiName.textContent = nodo.nombre;
  poiCategory.textContent = nodo.categoria.replace("-", " ");
  waitTime.textContent = nodo.tiempoEsperaMock;

  // Mock para el Wayfinding Predictivo: Generar un tiempo de caminata aleatorio entre 2 y 12 min
  const mockCaminata = Math.floor(Math.random() * 11) + 2;
  walkTime.textContent = `${mockCaminata} min`;

  // Desplegar el panel usando la clase CSS
  infoPanel.classList.add("show");
};

// Cerrar el panel
closeBtn.addEventListener("click", () => {
  infoPanel.classList.remove("show");
});

// 4. Lógica de Filtros de Navegación
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Resetear clases activas en los botones
    filterBtns.forEach((b) => b.classList.remove("active"));
    // Asignar clase activa al botón clickeado
    e.target.classList.add("active");

    // Forzar el cierre del panel de información si estaba abierto
    infoPanel.classList.remove("show");

    // Extraer la categoría del atributo data-category del HTML
    const categoria = e.target.getAttribute("data-category");

    // Ejecutar lógica de filtrado y re-renderizar
    const datosFiltrados = filtrarNodosPorCategoria(categoria);
    renderPines(datosFiltrados);
  });
});

// 5. Inicialización del Prototipo
// Asegurar que el DOM esté completamente cargado antes de inyectar el mapa
document.addEventListener("DOMContentLoaded", () => {
  renderPines(nodosMapa);
});
