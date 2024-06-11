import React, { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    document.title = `Clickeaste ${count} veces`;

    console.log("contador de nombre");
  }, [nombre]);

  return (
    <div>
      <p>Clicks dados {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <br />
      <input
        type="text"
        name={nombre}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
    </div>
  );
}

export default Example;
