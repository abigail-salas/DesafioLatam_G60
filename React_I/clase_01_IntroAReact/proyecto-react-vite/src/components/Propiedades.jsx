import React from "react";

function Propiedades({ title, price }) {
  let estilos = { backgroundColor: "#C4B9A5", color: "#725A2C" };

  /* Ejemplo de destructure */

  let usuario = {
    id: 2,
    nombre: "Luisa",
    apellido: "Medina",
  };
  //console.log(usuario.nombre, "<---- OBJETO NORMAL");

  let { id, nombre } = usuario;
  //console.log(id, "<---- DESTRUCTURE");

  /* Si dejamos -props- en el parametro de la funcion ↓↓↓↓↓ */
  /* return (
    <div style={estilos}>
      <h1>{props.title}</h1>
      <h2>{props.price}</h2>
    </div>
  ); */

  return (
    <div style={estilos}>
      <h1>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
}

export default Propiedades;
