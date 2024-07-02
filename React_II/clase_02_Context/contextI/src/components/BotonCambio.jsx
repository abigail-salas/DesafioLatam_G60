import React, { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

function BotonCambio() {
  const { setInfoM } = useContext(InfoContext);
  const infoFemenino = ["Rocio", "Ayelen", "Laura", "Sandra"];

  return (
    <div>
      <button
        onClick={() => {
          setInfoM(infoFemenino);
        }}
      >
        Cambiar datos
      </button>
    </div>
  );
}

export default BotonCambio;
