import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(false);

  const validarForm = (e) => {
    e.preventDefault();

    if (nombre === "") {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <div>
      <form onSubmit={validarForm}>
        {error ? <p>Los input son obligatorios</p> : null}

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          />
          <p>Entrada: {nombre}</p>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
