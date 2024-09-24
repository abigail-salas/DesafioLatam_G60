const saludar = () => console.log("Hola desde otro archivo");

let num1 = 10;
let num2 = 20;

const suma = () => console.log(num1 + num2);

let nombreCompleto = "Macarena Osses";

const saludoConNombre = () => console.log(`Hola! ${nombreCompleto}`);

module.exports = { saludar, suma, saludoConNombre };
