import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [id, setId] = useState("");

  /* useNavigate. Este hook nos devuelve la función navigate, que nos permite hacer redirecciones programáticas. Con esta función, podemos hacer lo mismo que con el componente navigate. Es decir, redirigir una URL al resultado de otra ruta. */
  const navigate = useNavigate();

  const irAPersonaje = () => navigate(`/personaje/${id}`);

  return (
    <div>
      <h1>React Router II</h1>
      <input
        type="number"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />

      <button onClick={irAPersonaje}>Buscar</button>
    </div>
  );
}

export default Home;
