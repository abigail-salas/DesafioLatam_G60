import React, { useState } from "react";
import { tareasConObjetos } from "../utils/TareasIniciales";

function TareaConObjetos() {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTarea, setListaTarea] = useState(tareasConObjetos);
  const [idTarea, setIdTarea] = useState(
    tareasConObjetos[tareasConObjetos.length - 1].id
  );

  function handleSubmit(e) {
    e.preventDefault();

    /* Generar un nuevo ID único */
    const nuevoId = idTarea + 1;

    /* agregar la tarea */
    setListaTarea([
      ...listaTarea,
      { id: nuevoId, nombre: nombreTarea, completada: false },
    ]);

    /* Actualizar el ID */
    setIdTarea(nuevoId);

    /* vaciamos el formulario */
    setNombreTarea("");
  }

  /* -------- Funcion para renderizar el formulario ----------- */

  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }

  /* -------- Funcion para completar la tarea ----------- */

  function completarTarea(e) {
    const nuevasTareas = [...listaTarea];

    /* Buscar una condicion única */
    const encontrado = nuevasTareas.findIndex((obj) => obj.id === e.id);

    /* Cambiamos el valor a true */
    nuevasTareas[encontrado].completada = true;

    /* Actualizamos el setter de lista */
    setListaTarea(nuevasTareas);
  }

  /* -------- Funcion para eliminar la tarea ----------- */

  function eliminarTarea(e) {
    /* Filtrar el arreglo de tarea para excluir la tarea con el ID dado */
    const nuevasTareas = listaTarea.filter((tarea) => tarea.id !== e.id);

    /* Actualizar el estado del arreglo de tareas con las nuevas tareas */
    setListaTarea(nuevasTareas);
  }

  /* -------- Mapeo de items ---------- */

  let mapeoTareas = listaTarea.map((t) => (
    <li
      key={t.id}
      style={t.completada === true ? { textDecoration: "line-through" } : {}}
    >
      {`${t.id}: ${t.nombre}`}

      {t.completada === false ? (
        <button onClick={() => completarTarea(t)}>Completar</button>
      ) : (
        ""
      )}

      <button onClick={() => eliminarTarea(t)}>Borrar</button>
    </li>
  ));

  return (
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

      <ul>{mapeoTareas}</ul>
    </div>
  );
}

export default TareaConObjetos;
