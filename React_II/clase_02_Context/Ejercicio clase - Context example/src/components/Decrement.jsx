import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Decrement = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <button onClick={() => setCounter(counter - 1)}>
      Decrement: {counter}
    </button>
  );
};
export default Decrement;
