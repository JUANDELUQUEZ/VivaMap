import { nodosMapa, filtrarNodosPorCategoria } from "./mapData.js";

const pinsLayer = document.getElementById("pins-layer");
const filterBtns = document.querySelectorAll(".filter-tab");
const actionBtn = document.querySelector(".action-btn");

// Nodos del panel de info
const poiName = document.getElementById("poi-name");
const poiCategory = document.getElementById("poi-category");
const waitTime = document.getElementById("wait-time");
const walkTime = document.getElementById("walk-time");

const renderPines = (datos) => {
  pinsLayer.innerHTML = "";
  datos.forEach((nodo) => {
    const pin = document.createElement("div");
    pin.className = "pin";
    pin.style.left = nodo.coordenadasX;
    pin.style.top = nodo.coordenadasY;
    pin.title = nodo.nombre;

    pin.addEventListener("click", () => {
      mostrarDetalles(nodo);
    });
    pinsLayer.appendChild(pin);
  });
};

const mostrarDetalles = (nodo) => {
  // Solo se actualizan los textos, ya no hay manipulación de clases 'show'
  poiName.textContent = nodo.nombre;
  poiCategory.textContent = nodo.categoria.replace("-", " ");
  waitTime.textContent = nodo.tiempoEsperaMock;

  const mockCaminata = Math.floor(Math.random() * 11) + 2;
  walkTime.textContent = `${mockCaminata} min`;

  // Habilitamos el botón cuando se selecciona un punto válido
  actionBtn.removeAttribute("disabled");
};

const resetPanelDetalles = () => {
  poiName.textContent = "Selecciona un punto en el mapa";
  poiCategory.textContent = "---";
  waitTime.textContent = "--";
  walkTime.textContent = "--";
  actionBtn.setAttribute("disabled", "true");
};

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");

    const categoria = e.target.getAttribute("data-category");
    const datosFiltrados = filtrarNodosPorCategoria(categoria);

    renderPines(datosFiltrados);
    resetPanelDetalles(); // Limpia los datos de lectura al cambiar de filtro
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderPines(nodosMapa);
});
