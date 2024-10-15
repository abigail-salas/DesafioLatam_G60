const express = require("express");
const { agregarViajes, obtenerViajes } = require("./consultas");
const app = express();

app.use(express.json());

app.get("/viajes", async (req, res) => {
  const viajes = await obtenerViajes();

  res.json(viajes);
});

app.post("/viajes", async (req, res) => {
  const { destino, presupuesto } = req.body;

  await agregarViajes(destino, presupuesto);

  res.send("Viaje Agregado desde POST");
});

app.listen(3000, () => console.log("Servidor Levantado en el puerto 3000"));
