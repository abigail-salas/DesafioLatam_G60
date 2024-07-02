import React, { createContext, useState } from "react";

export const InfoContext = createContext();

const infoMasculino = ["Ignacio", "Esteban", "Carlos", "Enrique"];

export const InfoProvider = ({ children }) => {
  const [infoM, setInfoM] = useState(infoMasculino);

  return (
    <InfoContext.Provider value={{ infoM, setInfoM }}>
      {children}
    </InfoContext.Provider>
  );
};
