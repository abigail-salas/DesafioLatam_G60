import React from "react";

function Banner() {
  /* + Crear una variable donde se guarden los estilos */
  let estilos = { color: "#62afb5", fontSize: "40px" };

  return (
    <div className="banner-css">
      {/* Aplicar CSS mediante un atributo className ↑↑↑↑ */}

      {/* Aplicar estilos en linea ↓↓↓↓ */}
      <h1 style={{ fontFamily: "fantasy" }}>Esto es un banner</h1>

      <img
        src="https://images.unsplash.com/photo-1710781944947-7cd4a381499f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width="500px"
        height="300px"
      />

      {/* + Aplicando los estilos mediante una variable ↓↓↓↓ */}
      <p style={estilos}>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default Banner;
