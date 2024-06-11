import "./App.css";
import Example from "./components/Example";
import ConsumoAPI from "./components/ConsumoAPI";
import EjemplouseRef from "./components/Ejemplo_useRef";
import EjercicioTime from "./components/EjercicioTime";

function App() {
  return (
    <>
      <div>
        Example
        <Example />
      </div>

      <div>
        Consumo de API
        <ConsumoAPI />
      </div>

      <div>
        UseRef
        <EjemplouseRef />
      </div>

      <div>
        Ejercicio
        <EjercicioTime />
      </div>
    </>
  );
}

export default App;
