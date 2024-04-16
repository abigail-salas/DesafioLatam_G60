/* let nombre1 = "Rebeca";
let nombre2 = "Ulises";
let nombre3 = "Damaris";
let nombre4 = "Carlos"; */

/* -------ARREGLOS------- */

let nombres = [
  "Rebeca",
  "Ulises",
  "Damaris",
  "Carlos",
  "Rebeca",
  "Arturo",
  "Jorge",
  "Sofia",
];

/* ACCEDER A LOS VALORES */

nombres[0];
//devuelve ---> 'Rebeca'
console.log(nombres[1]);
//devuelve ---> 'Ulises'
nombres[3];
//devuelve ---> 'Carlos'
nombres[4];
//devuelve ---> undefined

/* CANTIDAD DE ELEMENTOS */
nombres.length;
//devuelve ---> 4

nombres[nombres.length - 1];
//devuelve el ultimo valor

/* --------BUCLES--------- */

//FOR LOOP
for (let i = 0; i < nombres.length; i++) {
  const element = nombres[i];
  console.log(element, "<--- FOR LOOP");
}

//FOR OF
for (const iterator of nombres) {
  console.log(iterator, "<--- FOR OF");
}

/* ---------OPERADORES ARITMETICOS-------- */
let numero = 0;

// ===> SUMA DE A 1
numero++;
//devuelve ---> 0
numero++;
//devuelve ---> 1
numero++;
//devuelve ---> 2
numero;
//devuelve ---> 3

// ===> RESTA DE A 1
numero = 10;
//devuelve ---> 10
numero--;
//devuelve ---> 10
numero--;
//devuelve ---> 9
numero--;
//devuelve ---> 8
numero;
//devuelve ---> 7

// ===> SUMA, RESTA, MULTIPLICA, ETC EN BASE AL VALOR ASIGNADO
numero = 100;
//devuelve ---> 100
numero += 20;
//devuelve ---> 120
numero -= 20;
//devuelve ---> 100
numero *= 2;
//devuelve ---> 200
numero /= 3;
//devuelve ---> 66.66666666666667
numero;
//devuelve ---> 66.66666666666667

/* ------BUCLES + TEMPLATE LITERAL------ */

const data = ["Damaris", "Carlos", "Rebeca", "Arturo", "Jorge"];

const dynamic = document.querySelector("#dynamic-content");
let item = "";

for (const iterator of data) {
  //console.log(iterator, "<--- iterador de data");
  /*  dynamic.innerHTML += `<li>${iterator}</li>`; */
  item += `<li>${iterator}</li>`;
}

dynamic.innerHTML = item;

/* ----------OBJETOS--------- */

let datos = [
  "Maria",
  "Fernandez",
  45,
  "Uruguay",
  ["Pepe", "Toto"],
  () => {
    console.log("Hola soy Mari");
  },
];

let persona = {
  nombre: "Maria",
  apellido: "Fernandez",
  edad: 45,
  paisDeResidencia: "Uruguay",
  mascotas: ["Pepe", "Toto"],
  saludo: () => {
    console.log("Hola soy Mari");
  },
};

/* ===> ACCEDER A LOS VALORES <=== */
//BRACKET NOTATION
persona["nombre"];
//devuelve ---> 'Maria'
persona["saludo"]();
//devuelve ---> Hola soy Mari
persona["mascotas"][0];
//devuelve ---> 'Pepe'
persona["mascotas"][1];
//devuelve ---> 'Toto'

//NO ACEPTA VARIABLES
//DOT NOTATION
persona.edad;
//devuelve ---> 45
persona.saludo();
//devuelve ---> Hola soy Mari
persona.mascotas[1];
//devuelve ---> 'Toto'

/* ===> AGREGAR VALORES <=== */
//BRACKET NOTATION
persona["profesion"] = "Maestra";

//DOT NOTATION
persona.pasatiempo = "Pintura";

/* ===> MODIFICAR VALORES <=== */
//BRACKET NOTATION
persona["paisDeResidencia"] = "Chile";

//DOT NOTATION
persona.edad = persona.edad + 1;

/* ===> RECORRER EL OBJETO <=== */

for (const key in persona) {
  console.log(key, "<--- KEY");
  console.log(persona[key], "<--- VALORES");
}

/* ----------DOM + OBJETOS-------- */

const articulo = {
  id: 31,
  titulo: "Autos Nuevos",
  subtitulo: "El mercado se normaliza",
  descripcion:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nemo.",
};

const articulosSection = document.querySelector(".articulos");

articulosSection.innerHTML = `
<h4>${articulo.titulo}</h4>
<h6>${articulo.subtitulo}</h6>
<p>${articulo.descripcion}</p>
<a href="./articulo/${articulo.id}">
    <button>Ver más</button>
</a>`;

/* -------------ARREGLOS DE OBJETOS----------- */

const productos = [
  {
    id: 1,
    nombre: "Item 1",
    valor: 1200,
  },
  {
    id: 2,
    nombre: "Item 2",
    valor: 2345,
  },
  {
    id: 3,
    nombre: "Item 3",
    valor: 456,
  },
  {
    id: 4,
    nombre: "Item 4",
    valor: 1230,
  },
  {
    id: 5,
    nombre: "Item 5",
    valor: 5467,
  },
  {
    id: 6,
    nombre: "Item 6",
    valor: 67,
  },
  {
    id: 7,
    nombre: "Item 7",
    valor: 234,
  },
];

let html = "";

const ele = document.querySelector("#productos");

for (const iterator of productos) {
  //console.log(iterator, "<---iterador de objetos");
  html += ` <div id="${iterator.id}">
   <h2>${iterator.nombre}</h2>
   <p>$${iterator.valor}</p>
</div>`;
}

ele.innerHTML = html;
