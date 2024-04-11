/* ---------- DIFERENCIA ENTRE TIPOS DE VARIABLES ---------- */

/* VAR */
//Se repetir su declaracion
var prueba = "Aquí se declara";
console.log(prueba, "<----- Primera Declaracion");
var prueba = "Acá tambien se declara pero rompe todo";
console.log(prueba, "<----- Segunda Declaracion");

/* LET */
//Se declara una sola vez y despues puede cambiar su valor PERO NO CAMBIAR SU VALOR
let intento = "acá declaro let";
console.log(intento, "<----- Primera Declaracion let");
//let intento = ""
intento = "modificando let";
console.log(intento, "<----- Segunda Declaracion let");

/* CONST */
//Se declara y no puede modificar su valor
const fija = "Soy un valor fijo";
console.log(fija, "<----- Primera Declaracion const");

/* -----su alcance------ */

let variableGlobal = "Existo en todas partes";

if (true) {
  let variableLocal = "Solo existo en la condicion";

  console.log(variableLocal, "<--- Dentro del bloque de código");
  console.log(variableGlobal, "<--- Dentro del bloque de código");
}

console.log(variableGlobal, "<--- Fuera del bloque de código");
//console.log(variableLocal, "<--- Fuera del bloque de código");

/* ---------------FUNCIONES------------------ */
//Es una maquina perfecta donde uno le va a dar instrucciones y la misma se va a repetir las veces que uno la llame

function pintarMorado() {
  let elemento = document.querySelector("body");
  elemento.style.backgroundColor = "rgb(50, 18, 121)";
}
//Ejecutar la funcion ↓↓↓
//pintarMorado();

function pintarTitulo() {
  let elemento = document.querySelector("h1");
  elemento.style.color = "rgb(122, 4, 4)";
}

function pintarParrafo() {
  let elemento = document.querySelector("p");
  elemento.style.color = "rgb(0, 163, 200)";
}

/* Utilizando parametros */

function pintarFondoP(color) {
  let elemento = document.querySelector("p");
  elemento.style.backgroundColor = color;
}

/* más de 1 parametro */
/* function pintar(color, tag) {
  let elemento = document.querySelector(tag);
  elemento.style.backgroundColor = color;
} */

/* Valores por defecto */

function pintar(color = "red", tag = "body") {
  let elemento = document.querySelector(tag);
  elemento.style.backgroundColor = color;
}

/* Orden de los parametros */
function presentacion(nombreCompleto, edad, ciudad, vocacion) {
  console.log(
    `Hola! Soy ${nombreCompleto}, tengo ${edad} años. Me dedico a ${vocacion} en la ciudad de ${ciudad}`
  );
}

presentacion("Carlos Aguirre", 23, "Salta", "Pintor");
//devuelve ---> Hola! Soy Carlos Aguirre, tengo 23 años. Me dedico a Pintor en la ciudad de Salta

presentacion(23, "Salta", "Pintar", "Carlos Aguirre");
//devuelve ---> Hola! Soy 23, tengo Salta años. Me dedico a Carlos Aguirre en la ciudad de Pintar

/* ----RETORNO DE FUNCIONES */

function suma(a, b) {
  // console.log(a + b);
  return a + b;
}
console.log(`Soy la funcion SUMA y devuelvo ${suma(2, 2)}`);

/* ARROW FUNCTION */

/* const resta = (a, b) => {
  return a - b;
}; */
//Cuando está en la misma linea de codig, tanto las llaves como el return están implicitos en la funcion
const resta = (a, b) => a - b;

resta(10, 200);

/* EJERCICIOS */

function sumaParametros(num1, num2 = 2, num3 = 2) {
  console.log(num2 + num3);
}
//suma(3);
//devuelve ---> 4
//suma(3, 1);
//devuelve ---> 3
//suma(3, 1, 1);
//devuelve ---> 2

function getBkgColor(params) {
  let element = document.querySelector(params);
  let color = element.style.backgroundColor;
  console.log(color, "<--- soy el color");
  console.log(element, "<--- soy el elemento");

  return color;
}
//console.log(`El elemento tiene un color de fondo ${getBkgColor()}`);

console.log(getBkgColor("#elemento"));
