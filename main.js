// main.js - lógica de la aplicación VivaMap
// --------------------------------------------------
// Importamos datos estáticos de nodos (mapa del aeropuerto).
import { nodosMapa } from "./mapData.js";

/* ----------------- referencias DOM ----------------- */
const pinsLayer = document.getElementById("pins-layer");
const origenSelect = document.getElementById("origen-select");
const destinoSelect = document.getElementById("destino-select");
const actionBtn = document.getElementById("btn-trazar");

const poiName = document.getElementById("poi-name");
const poiCategory = document.getElementById("poi-category");
const waitTime = document.getElementById("wait-time");
const walkTime = document.getElementById("walk-time");

// campos nuevos de vuelo
const flightNumberEl = document.getElementById("flight-number");
const seatNumberEl = document.getElementById("seat-number");
const flightTimeEl = document.getElementById("flight-time");
const gateNumberEl = document.getElementById("gate-number");
const overbookingEl = document.getElementById("overbooking-percent");

/* ---------------- estado global -------------------- */
let nodoOrigen = null;
let nodoDestino = null;

/* -------------------------------------------------- */
/* 1. Población de menús desplegables                  */
/* -------------------------------------------------- */
const inicializarMenus = () => {
  nodosMapa.forEach((nodo) => {
    const opc1 = document.createElement("option");
    opc1.value = nodo.id;
    opc1.textContent = nodo.nombre;
    origenSelect.appendChild(opc1);

    const opc2 = document.createElement("option");
    opc2.value = nodo.id;
    opc2.textContent = nodo.nombre;
    destinoSelect.appendChild(opc2);
  });
};

/* -------------------------------------------------- */
/* 2. Manejo del mapa y pines                          */
/* -------------------------------------------------- */
const actualizarMapa = () => {
  pinsLayer.innerHTML = ""; // limpiamos capa previa

  if (nodoOrigen) crearPin(nodoOrigen, "origen");
  if (nodoDestino) crearPin(nodoDestino, "destino");
};

const crearPin = (nodo, tipo) => {
  const pin = document.createElement("div");
  pin.className = `pin ${tipo}`;
  pin.style.left = nodo.coordenadasX;
  pin.style.top = nodo.coordenadasY;
  pin.title = `${tipo === "origen" ? "Tu ubicación: " : "Destino: "}${
    nodo.nombre
  }`;
  pinsLayer.appendChild(pin);
};

/* -------------------------------------------------- */
/* 3. Cálculo de la ruta y actualización de panel     */
/* -------------------------------------------------- */
const procesarRuta = () => {
  if (nodoOrigen && nodoDestino) {
    if (nodoOrigen.id === nodoDestino.id) {
      // misma selección -> mensaje especial
      poiName.textContent = "Ya estás en este lugar";
      poiCategory.textContent = "---";
      waitTime.textContent = "--";
      walkTime.textContent = "--";
      actionBtn.setAttribute("disabled", "true");
      actualizarInfoVuelo();
      return;
    }

    poiName.textContent = `Hacia: ${nodoDestino.nombre}`;
    poiCategory.textContent = `Desde: ${nodoOrigen.nombre}`;
    waitTime.textContent = nodoDestino.tiempoEsperaMock;

    // caminata simulada 5‑15 min
    const mockCaminata = Math.floor(Math.random() * 11) + 5;
    walkTime.textContent = `${mockCaminata} min`;

    actionBtn.removeAttribute("disabled");
    actualizarInfoVuelo();
  } else {
    actionBtn.setAttribute("disabled", "true");
    actualizarInfoVuelo();
  }
};

/* -------------------------------------------------- */
/* 4. Datos de vuelo generados aleatoriamente         */
/* -------------------------------------------------- */
const generarVueloMock = () => {
  const num = "VB " + Math.floor(Math.random() * 900 + 100);
  const asiento =
    Math.floor(Math.random() * 30 + 1) +
    String.fromCharCode(65 + Math.floor(Math.random() * 6)); // 1A‑30F
  const hora = `${Math.floor(Math.random() * 3 + 18)}:${
    ["00", "15", "30", "45"][Math.floor(Math.random() * 4)]
  }`; // 18:00‑20:45
  const puerta = String.fromCharCode(66 + Math.floor(Math.random() * 6)); // B‑G
  const overbooking = Math.floor(Math.random() * 40 + 60) + "%"; // 60‑99%

  return { num, asiento, hora, puerta, overbooking };
};

const actualizarInfoVuelo = () => {
  if (nodoOrigen && nodoDestino && nodoOrigen.id !== nodoDestino.id) {
    const info = generarVueloMock();
    flightNumberEl.textContent = info.num;
    seatNumberEl.textContent = info.asiento;
    flightTimeEl.textContent = info.hora;
    gateNumberEl.textContent = info.puerta;
    overbookingEl.textContent = info.overbooking;
  } else {
    flightNumberEl.textContent = "--";
    seatNumberEl.textContent = "--";
    flightTimeEl.textContent = "--";
    gateNumberEl.textContent = "--";
    overbookingEl.textContent = "--";
  }
};

/* -------------------------------------------------- */
/* 5. Listeners                                        */
/* -------------------------------------------------- */
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

/* -------------------------------------------------- */
/* 6. Inicialización al cargar la página              */
/* -------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  inicializarMenus();
});
