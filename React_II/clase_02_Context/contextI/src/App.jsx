// import { useState } from "react";
// import BotonCambio from "./components/BotonCambio";
// import Component1 from "./components/Component1";
// import Component2 from "./components/Component2";

// const infoMasculino = ["Ignacio", "Esteban", "Carlos", "Enrique"];

// function App() {
//   const [infoM, setInfoM] = useState(infoMasculino);

//   return (
//     <div className="text-center">
//       <Component1 info={`${infoM}`} setInfoM={setInfoM} />
//       <Component2 info={`${infoM}`} />

//       {/* primer cambio, movemos el boton al componente 2 */}
//       {/*  <BotonCambio setInfoM={setInfoM} /> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { InfoProvider } from "./context/InfoContext";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  return (
    <InfoProvider>
      <div className="text-center">
        <Component1 />
        <Component2 />
      </div>
    </InfoProvider>
  );
}

export default App;
