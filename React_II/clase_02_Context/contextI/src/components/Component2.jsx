import React, { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

function Component2() {
  const { infoM } = useContext(InfoContext);
  return (
    <div>
      <h1>Component 2</h1>
      <hr />
      <p>{infoM}</p>
    </div>
  );
}

export default Component2;
