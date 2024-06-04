import React, { useState } from "react";

function Tarea() {
  const colores = ["red", "green", "blue", "violet", "yellow"];
  let mapeoColores = colores.map((t) => (
    <li key={t} style={{ color: t }}>
      {t}
    </li>
  ));

  let arrayTarea = ["Estudiar", "Limpiar", "Entrenar"];
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTarea, setListaTarea] = useState(arrayTarea);

  /* Ejemplo del operador spreed */

  /*  let a = [1, 2, 3, 4, 5];
  a.push("a", "e", "i");
  console.log(a, "Arreglo original modificado");

  let b = [...a, "o", "u"];
  console.log(a, "Arreglo original");
  console.log(b, "Arreglo nuevo modificado"); */

  /* -------- Funcion para enviar el formulario ----------- */

  function handleSubmit(e) {
    e.preventDefault();

    /* agregar la tarea */
    setListaTarea([...listaTarea, nombreTarea]);

    /* vaciamos el formulario */
    setNombreTarea("");
  }

  /* -------- Funcion para renderizar el formulario ----------- */

  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }

  return (
    <div>
      <div>
        <ol>{mapeoColores}</ol>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombreTarea"
            value={nombreTarea}
            onChange={mostrarInput}
          />
          <button>Agregar Tarea</button>
        </form>

        <ul>
          {listaTarea.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tarea;
