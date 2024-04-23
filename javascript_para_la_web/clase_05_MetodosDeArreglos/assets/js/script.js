/* ---------------- METODOS DE ARREGLOS-------------- */

let num = [1, 2, 3, 4, 5, 6];

/* AGREGAR ELEMENTOS */

// METODO array.push(parametro) ==> AGREGA UN ELEMENTO AL FINAL DEL ARRAY
num.push("Metodo Push");
// queda en ---> [1, 2, 3, 4, 5, 6, 'Metodo Push']

// METODO array.unshift(parametro) ==> AGREGA UN ELEMENTO AL INICIO DEL ARRAY
num.unshift("Metodo Unshift");
// queda en --->  ["Metodo Unshift", 1, 2, 3, 4, 5, 6, 'Metodo Push']

/* ELIMINAR ELEMENTOS */

// METODO array.pop() ==> QUITA UN ELEMENTO AL FINAL DEL ARRAY
let popEliminado = num.pop();
// console.log(num, "<--- ARREGLO");
// console.log(popEliminado, "<--- ELIMINADO");

// METODO array.shift() ==> QUITA UN ELEMENTO AL INICIO DEL ARRAY
let shiftEliminado = num.shift();
// console.log(num, "<--- ARREGLO");
// console.log(shiftEliminado, "<--- ELIMINADO");

// METODO array.splice(posicion, cantidadDeElementosABorrar) ==> QUITA DIFERENTES ELEMENTO DEL ARRAY
let spliceEliminado = num.splice(2, 1);
// console.log(num, "<--- ARREGLO");
// console.log(spliceEliminado, "<--- ELIMINADO");

/* BUSCAR SU POSICION */

// METODO array.findIndex(funcion) ==> VERIFICA LA POSICION DEL ELEMENTO EN EL ARRAY Y MEDIANTE UNA FUNCION, DEVUELVE SU POSICION
let indexFind = num.findIndex((e) => e == 5);
// console.log(num, "<--- ARREGLO FIND");
// console.log(indexFind, "<--- FIND");
// devuelve ---> 3

// METODO array.indexOf(funcion) ==> VERIFICA LA POSICION DEL ELEMENTO EN EL ARRAY y DEVUELVE SU POSICION
let ofIndex = num.indexOf(4);
// console.log(num, "<--- ARREGLO FIND");
// console.log(ofIndex, "<---  FIND");

/* --------- DOM + METODOS + EVENTOS --------- */

const listaDeInvitados = document.querySelector("#invitados");
const invitadosInput = document.querySelector("#nuevo-invitado");
const btnAgregarInvitado = document.querySelector("#agregar-invitado");

/* console.log(listaDeInvitados, "<--- listaDeInvitados");
console.log(invitadosInput, "<--- invitadosInput");
console.log(btnAgregarInvitado, "<--- btnAgregarInvitado"); */

const invitados = [];

btnAgregarInvitado.addEventListener("click", () => {
  const nuevoInvitado = invitadosInput.value;
  invitados.push(nuevoInvitado);
  invitadosInput.value = "";

  let html = "";
  for (const iterator of invitados) {
    html += `<li>${iterator}</li>`;
  }

  listaDeInvitados.innerHTML = html;
});

/* OPTIMIZANDO EL EJEMPLO ANTERIOR */

const listaDeItems = document.querySelector("#items");
const itemsInput = document.querySelector("#nuevo-item");
const btnAgregarItem = document.querySelector("#agregar-item");

const items = [
  { id: 100, nombre: "Jhonny Deep" },
  { id: 200, nombre: "Brad Pitt" },
  { id: 300, nombre: "Leonardo Dicaprio" },
  { id: 400, nombre: "Morgan Freeman" },
];

btnAgregarItem.addEventListener("click", () => {
  const nuevoItem = { id: Date.now(), nombre: itemsInput.value };
  items.push(nuevoItem);
  itemsInput.value = "";

  render();
});

function render() {
  let html = "";
  for (const iterator of items) {
    html += `<li>${iterator.nombre} <button onclick="borrar(${iterator.id})">X</button></li>`;
  }
  listaDeItems.innerHTML = html;
}

function borrar(id) {
  const index = items.findIndex((e) => e.id == id);
  items.splice(index, 1);

  render();
}

/* EJERCICIOS */

let heroes = [
  "Ironman",
  "Capitan America",
  "Viuda Negra",
  "Soldado del Invierno",
];

heroes.push("Hulk");
heroes.unshift("Thor", "Hawkeye");
