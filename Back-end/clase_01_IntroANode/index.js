const fs = require("fs");

const { suma, saludar, saludoConNombre } = require("./Funciones.js");

/* CREAR ARCHIVOS CON FILE SYSTEM */

const tareas = `
1. Ir a caminar
2. Comprar la despensa
3. Pasear al perro
`;

fs.writeFileSync("tareas.txt", tareas);

const autos = [
  {
    marca: "Susuki",
    modelo: "Kicks",
  },
  {
    marca: "Toyota",
    modelo: "Corola",
  },
  {
    marca: "GAC",
    modelo: "GS4",
  },
  {
    marca: "Honda",
    modelo: "???",
  },
  {
    marca: "Ford",
    modelo: "???",
  },
];

fs.writeFileSync("autos.json", JSON.stringify(autos));

/* LEER ARCHIVOS CON FILE SYSTEM */

const lectura = fs.readFileSync("autos.json", "utf8");
console.log(lectura);

/* Leyendo Funciones desde otro archivo */

saludar();

suma();

saludoConNombre();
