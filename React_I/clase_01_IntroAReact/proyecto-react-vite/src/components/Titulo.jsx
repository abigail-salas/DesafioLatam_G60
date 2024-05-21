import React from "react";
import Banner from "./Banner";

let nombre = "Abigail";

function Titulo() {
  return (
    <div>
      <h1>PROBANDO REACT</h1>

      <Banner />

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nisi
        cumque architecto repellendus possimus. Qui perferendis fugiat
        doloremque, accusamus minima voluptate minus quod corporis aliquid ut
        eveniet veniam necessitatibus repudiandae?
      </p>

      <h3>Mi nombre es {nombre}</h3>
    </div>
  );
}

export default Titulo;
