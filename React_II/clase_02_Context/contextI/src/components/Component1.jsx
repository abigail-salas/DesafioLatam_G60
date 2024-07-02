import React, { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

import BotonCambio from "./BotonCambio";

function Component1() {
  const { infoM } = useContext(InfoContext);
  return (
    <div>
      <h1>Component 1</h1>
      <hr />
      <p>{infoM}</p>

      <BotonCambio />
    </div>
  );
}

export default Component1;
