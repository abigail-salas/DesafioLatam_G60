import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Tarea from "./component/Tarea";

import TareaConObjetos from "./component/TareaConObjetos";

function App() {
  return (
    <>
      <div>
        Tarea con arreglos
        <Tarea />
      </div>

      <div>
        Tarea con objetos
        <TareaConObjetos />
      </div>
    </>
  );
}

export default App;
