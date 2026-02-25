// Base de Datos Estática de Nodos del Mapa
const nodosMapa = [
  {
    id: "doc-5-6",
    nombre: "Mostradores de Documentación - Puertas 5 y 6",
    categoria: "documentacion",
    coordenadasX: "15%",
    coordenadasY: "20%",
    tiempoEsperaMock: "15 min",
  },
  {
    id: "bano-lucha",
    nombre: "Baño Temático Lucha Libre",
    categoria: "banos",
    coordenadasX: "40%",
    coordenadasY: "50%",
    tiempoEsperaMock: "0 min",
  },
  {
    id: "bano-chespirito",
    nombre: "Baño Temático Chespirito",
    categoria: "banos",
    coordenadasX: "65%",
    coordenadasY: "30%",
    tiempoEsperaMock: "2 min",
  },
  {
    id: "bano-cine",
    nombre: "Baño Temático Cine de Oro",
    categoria: "banos",
    coordenadasX: "80%",
    coordenadasY: "70%",
    tiempoEsperaMock: "0 min",
  },
  {
    id: "trans-vivabus",
    nombre: "Plataforma VivaBus (Terminal Intermodal)",
    categoria: "transporte",
    coordenadasX: "10%",
    coordenadasY: "85%",
    tiempoEsperaMock: "5 min",
  },
  {
    id: "trans-transfer",
    nombre: "Plataforma Viva Transfer",
    categoria: "transporte",
    coordenadasX: "25%",
    coordenadasY: "85%",
    tiempoEsperaMock: "10 min",
  },
];

// Lógica de Filtrado Funcional
// Se utiliza una arrow function y el método filter para retornar un nuevo arreglo sin mutar el original.
const filtrarNodosPorCategoria = (categoriaSeleccionada) => {
  // Manejo de error básico: si se pide "todos" o no se pasa categoría, retorna todo.
  if (!categoriaSeleccionada || categoriaSeleccionada === "todos") {
    return nodosMapa;
  }

  return nodosMapa.filter((nodo) => nodo.categoria === categoriaSeleccionada);
};

// Ejemplo de uso en consola para verificar que funciona antes de tocar el DOM:
// console.log(filtrarNodosPorCategoria("banos"));
