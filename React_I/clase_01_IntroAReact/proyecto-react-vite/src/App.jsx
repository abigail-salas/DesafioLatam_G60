import { useState } from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import Propiedades from "./components/Propiedades";

function App() {
  return (
    <>
      <Titulo />

      <Propiedades title="Mouse" price="$400" />

      <Propiedades title="Gabinete" price="$6000" />

      <Propiedades title="Monitor" price="$7500" />
    </>
  );
}

export default App;
