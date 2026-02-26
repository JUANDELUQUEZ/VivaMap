import { nodosMapa } from "./mapData.js";

const pinsLayer = document.getElementById("pins-layer");
const origenSelect = document.getElementById("origen-select");
const destinoSelect = document.getElementById("destino-select");
const actionBtn = document.getElementById("btn-trazar");

const poiName = document.getElementById("poi-name");
const poiCategory = document.getElementById("poi-category");
const waitTime = document.getElementById("wait-time");
const walkTime = document.getElementById("walk-time");

let nodoOrigen = null;
let nodoDestino = null;

// 1. Poblar los menús desplegables
const inicializarMenus = () => {
  nodosMapa.forEach((nodo) => {
    const option1 = document.createElement("option");
    option1.value = nodo.id;
    option1.textContent = nodo.nombre;
    origenSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = nodo.id;
    option2.textContent = nodo.nombre;
    destinoSelect.appendChild(option2);
  });
};

// 2. Renderizar solo los pines seleccionados
const actualizarMapa = () => {
  pinsLayer.innerHTML = "";

  if (nodoOrigen) {
    crearPin(nodoOrigen, "origen");
  }

  if (nodoDestino) {
    crearPin(nodoDestino, "destino");
  }
};

const crearPin = (nodo, tipo) => {
  const pin = document.createElement("div");
  pin.className = `pin ${tipo}`;
  pin.style.left = nodo.coordenadasX;
  pin.style.top = nodo.coordenadasY;
  pin.title = `${tipo === "origen" ? "Tu ubicación: " : "Destino: "} ${nodo.nombre}`;
  pinsLayer.appendChild(pin);
};

// 3. Evaluar y mostrar la ruta
const procesarRuta = () => {
  if (nodoOrigen && nodoDestino) {
    if (nodoOrigen.id === nodoDestino.id) {
      poiName.textContent = "Ya estás en este lugar";
      poiCategory.textContent = "---";
      waitTime.textContent = "--";
      walkTime.textContent = "--";
      actionBtn.setAttribute("disabled", "true");
      return;
    }

    poiName.textContent = `Hacia: ${nodoDestino.nombre}`;
    poiCategory.textContent = `Desde: ${nodoOrigen.nombre}`;
    waitTime.textContent = nodoDestino.tiempoEsperaMock;

    // Mock de caminata entre 5 y 15 min
    const mockCaminata = Math.floor(Math.random() * 11) + 5;
    walkTime.textContent = `${mockCaminata} min`;

    actionBtn.removeAttribute("disabled");
  } else {
    actionBtn.setAttribute("disabled", "true");
  }
};

// 4. Event Listeners
origenSelect.addEventListener("change", (e) => {
  nodoOrigen = nodosMapa.find((n) => n.id === e.target.value);
  actualizarMapa();
  procesarRuta();
});

destinoSelect.addEventListener("change", (e) => {
  nodoDestino = nodosMapa.find((n) => n.id === e.target.value);
  actualizarMapa();
  procesarRuta();
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  inicializarMenus();
});
