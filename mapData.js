// Base de Datos Estática de Nodos del Mapa (GDL)
// Cada objeto representa un punto de interés sobre el plano con
// coordenadas relativas y un tiempo de espera ficticio.
const nodosMapa = [
  {
    id: "term-1",
    nombre: "Terminal Aeropuerto",
    categoria: "aeropuerto",
    coordenadasX: "35%",
    coordenadasY: "65%",
    tiempoEsperaMock: "N/A",
  },
  {
    id: "renta-1",
    nombre: "Renta de Autos - Módulo 1",
    categoria: "renta-autos",
    coordenadasX: "45%",
    coordenadasY: "25%",
    tiempoEsperaMock: "5 min",
  },
  {
    id: "renta-2",
    nombre: "Renta de Autos - Módulo 2",
    categoria: "renta-autos",
    coordenadasX: "55%",
    coordenadasY: "20%",
    tiempoEsperaMock: "10 min",
  },
  {
    id: "tienda-1",
    nombre: "Tienda de Autoservicio (Ingreso)",
    categoria: "autoservicio",
    coordenadasX: "38%",
    coordenadasY: "48%",
    tiempoEsperaMock: "0 min",
  },
  {
    id: "tienda-2",
    nombre: "Tienda de Autoservicio (Exterior)",
    categoria: "autoservicio",
    coordenadasX: "92%",
    coordenadasY: "25%",
    tiempoEsperaMock: "2 min",
  },
  {
    id: "paq-1",
    nombre: "Servicio de Paquetería A",
    categoria: "paqueteria",
    coordenadasX: "72%",
    coordenadasY: "58%",
    tiempoEsperaMock: "15 min",
  },
  {
    id: "paq-2",
    nombre: "Servicio de Paquetería B",
    categoria: "paqueteria",
    coordenadasX: "78%",
    coordenadasY: "65%",
    tiempoEsperaMock: "10 min",
  },
  {
    id: "gn-1",
    nombre: "Módulo Guardia Nacional",
    categoria: "seguridad",
    coordenadasX: "65%",
    coordenadasY: "68%",
    tiempoEsperaMock: "0 min",
  },
  {
    id: "bus-1",
    nombre: "Ruta Camión C-98",
    categoria: "transporte",
    coordenadasX: "82%",
    coordenadasY: "48%",
    tiempoEsperaMock: "12 min",
  },
  {
    id: "shuttle-1",
    nombre: "Bahía de Descenso Shuttle",
    categoria: "transporte",
    coordenadasX: "32%",
    coordenadasY: "58%",
    tiempoEsperaMock: "3 min",
  },
];

const filtrarNodosPorCategoria = (categoriaSeleccionada) => {
  if (!categoriaSeleccionada || categoriaSeleccionada === "todos") {
    return nodosMapa;
  }
  return nodosMapa.filter((nodo) => nodo.categoria === categoriaSeleccionada);
};

// Exportamos la información para poder usarla en el script principal
export { nodosMapa, filtrarNodosPorCategoria };
