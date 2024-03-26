/* VALORES PRIMITIVOS */

/* Números */
(3 + 2) * 3 + 1;
//devuelve ---> 16;
3 + 2 * 3 + 1;
//devuelve ---> 10;

/* string */
// "Hola";
// "100";
// "true";
// "Hola, soy un string";

/* Booleanos */
true;
false;

typeof 12;
//devuelve ---> 'number'
typeof "hola";
//devuelve ---> 'string'
typeof true;
//devuelve ---> 'boolean'
typeof "12";
//devuelve ---> 'string'

/* MENSAJES DE CONSOLA */
console.log("Soy un mensaje de consola");

/* ALERTAS */
/* alert("Soy una alerta");
confirm("Acepta los terminos y condiciones");
prompt("Decime como te llamas"); */

/* VARIABLES */
let numero = 23;
console.log(numero, "<---- solo numero");
console.log(numero * 10, "<---- numero multiplicado por 10");

numero = 245; //redeclarar el valor
console.log("Variable numero modificada ------>", numero);

let persona = "Macarena";
//alert(persona);

/* -------------------------- */

// let nombre = prompt("cómo te llamas?");
// let edad = prompt("Decime tu edad");
/* prompt SIEMPRE va a devolver un STRING ↑↑↑↑↑↑ */
// console.log(nombre);

/* CONCATENACION */
// console.log("Hola " + nombre);
// console.log("Tenes " + edad + " años");
// console.log("En 10 años vas a tener " + edad + 10 + " años");

console.log(5 + 5);
console.log("5" + "5");
console.log(5 + "5");
console.log("5 + 5");

/* Se debe trasformar el resultado en un valor tipo numero ↓↓↓↓↓ */
// let sumaDeAnios = Number(edad) + 10;
// console.log("En 10 años vas a tener" + sumaDeAnios + " años");

// /* TEMPLATE LITERAL */
// console.log(`Hola, soy ${nombre}`);
// console.log(`Tengo ${edad} años`);
// console.log(`En 10 años voy a tener ${Number(edad) + 10} años de edad`);

/* ------------------------------------ */

/* DOM ---> Document Objet Model */

let elemento = document.querySelector("p");
console.log(elemento);

let menu = document.querySelector(".navbar");
let cardSection = document.querySelector("#card-section");
let footer = document.querySelector("footer");

/* ------------------------------------------- */

/* MANIPULAR EL DOM */

/* Agregar o cambiar el texto */
cardSection.innerHTML = "Agregando contenido desde JS";
menu.innerHTML = "Cambiando texto desde JS";

/* Cambiar o agregar estilos */
elemento.style.backgroundColor = "#7ba238";
elemento.style.color = "black";
elemento.style.fontFamily = "Fantasy";
elemento.style.fontSize = "25px";

/* EJERCICIO */
/* let ubicacionElem = document.querySelector("#ubicacion");
let dptoElem = document.querySelector("#dpto");
let ciudadElem = document.querySelector("#ciudad");

let ubicacionInput = prompt("Ingresa tu calle y número");
let dptoInput = prompt("Ingresa tu número de departamento");
let ciudadInput = prompt("Ingresa la ciudad");

ubicacionElem.innerHTML = ubicacionInput;
dptoElem.innerHTML = dptoInput;
ciudadElem.innerHTML = ciudadInput; */

let imgElem = document.querySelector("img");
imgElem.style.width = "400px";
imgElem.style.height = "400px";

let radius = prompt("Cuanto % de radio querés que tenga la imagen. Ej: 20");
// console.log(typeof radius);
// imgElem.style.borderRadius = radius;
imgElem.style.borderRadius = `${Number(radius)}%`;
console.log(typeof Number(radius));
