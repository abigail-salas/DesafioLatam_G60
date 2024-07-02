import CounterProvider from "./context/CounterContext";

import Decrement from "./components/Decrement";
import Increment from "./components/Increment";

const App = () => {
  return (
    <div>
      <CounterProvider>
        {/* Todos los componentes que estén anidados podran acceder al context */}
        <Increment />
        <Decrement />
      </CounterProvider>
    </div>
  );
};
export default App;
