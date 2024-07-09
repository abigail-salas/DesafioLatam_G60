import React from "react";
import { useParams } from "react-router-dom";

function Personajes() {
  /* La función de esta herramienta es simplificar la creación, redirección y anidación de rutas para crear una navegación dinámica */
  const { id } = useParams();

  return (
    <div>
      <h1>Personaje {id}</h1>
    </div>
  );
}

export default Personajes;
