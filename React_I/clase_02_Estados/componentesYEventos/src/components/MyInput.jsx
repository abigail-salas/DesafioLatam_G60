import React, { useState } from "react";
import "../assets/css/myinput.css";

function MyInput() {
  const [nombre, setNombre] = useState("");

  return (
    <div>
      <div className="input-btn">
        {/*  <input type="text" onChange={(e) => console.log(e.target.value)} /> */}

        <input type="text" onChange={(e) => setNombre(e.target.value)} />

        <p>Entrada: {nombre}</p>
      </div>
    </div>
  );
}

export default MyInput;
