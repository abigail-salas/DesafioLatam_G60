import React, { useEffect, useState } from "react";

function EjercicioTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    console.log("ejemplo reloj");

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Reloj en Tiempo Real</h3>
      <p>{time}</p>
    </div>
  );
}

export default EjercicioTime;
