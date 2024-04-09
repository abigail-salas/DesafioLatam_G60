/* CONDICIONALES */

/* let edad = Number(prompt("Decime tu edad"));

if (edad < 18) {
  console.log("No podés entrar");
} */

/* ---------OPERADORES----------- */

//========> OPERADORES DE ASIGNACION <========
let nn = "Hola";
nn = "Chau";

//========> OPERADORES DE COMPARACION <========
//===> DE IGUALDAD
// SIMPLE // solo compara el contenido
12 == 12;
//devuelve ---> true
"HOLA" == "hola";
//devuelve ---> false
"HOLA" == "HOLA";
//devuelve ---> true
"23" == 23;
//devuelve ---> true

//ESTRICTA // compara el contenido Y EL TIPO DE DATO
12 === 12;
//devuelve ---> true
"HOLA" === "hola";
//devuelve ---> false
"HOLA" === "HOLA";
//devuelve ---> true
"23" === 23;
//devuelve ---> false

//===> DE DESIGUALDAD
// SIMPLE // solo compara el contenido
56 != 56;
//devuelve ---> false
"Hola" != "hola";
//devuelve ---> true
"34" != 34;
//devuelve ---> false
23 != 12;
//devuelve ---> true

//ESTRICTA // compara el contenido Y EL TIPO DE DATO
56 !== 56;
//devuelve ---> false
"Hola" != "hola";
//devuelve ---> true
"34" !== 34;
//devuelve ---> true
23 !== 12;
//devuelve ---> true

/* let contrasenia = 1424;
let ingreso = Number(prompt("Ingresa una contraseña"));

if (contrasenia === ingreso) {
  console.log("felicidades, entraste al usuario");
} */

/* ----------IF-----ELSE----------- */

let pedazosDeTorta = 8;
let invitados = 40;
let cantidadDePedazosPorInvitado = pedazosDeTorta / invitados;

if (cantidadDePedazosPorInvitado >= 1) {
  console.log("Hay suficientes porciones de torta para cada invitado");
} else {
  console.log("Hay más invitados que porciones de torta");
}

/* ----------IF-----ELSE IF-------ELSE----------- */

if (false) {
  console.log("Acá no entro");
} else if (false) {
  console.log("Acá TAMPOCO entro");
} else if (false) {
  console.log("Pase a la siguiente");
} else if (true) {
  console.log("ACÁ SI ENTRO :D");
} else {
}

/* EJERCICIOS */

/* let grados = parseInt(prompt("Cuantos grados hace en tu ciudad?"));

if (grados > 30) {
  console.log("uff que calor");
} */

let px = prompt("Ingresa un número de pixeles");


if (px < 576) {
  console.log(`${px} equivalen al tamaño de pantalla en XS`);
} else if (px >= 962) {
  console.log(`${px} equivalen al tamaño de pantalla en XL`);
} else if (px >= 768) {
  console.log(`${px} equivalen al tamaño de pantalla en MD`);
} else if (px >= 576) {
  console.log(`${px} equivalen al tamaño de pantalla en SM`);
} else {
  console.log("Ingresa un número valido");
}
