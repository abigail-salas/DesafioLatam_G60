import React, { useEffect, useState } from "react";

function ConsumoAPI() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultaDeAPI();

    console.log("SOY LA API");
  }, []);

  const consultaDeAPI = async () => {
    const url = "https://api.gameofthronesquotes.xyz/v1/random";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "<----DATA");
    setInfo(`${data.sentence} - ${data.character.name}`);
  };

  return (
    <div>
      <p>{info}</p>
    </div>
  );
}

export default ConsumoAPI;
