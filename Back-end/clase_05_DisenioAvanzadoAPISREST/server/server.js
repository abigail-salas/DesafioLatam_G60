const express = require("express");
const app = express();
const medicamentosRoutes = require("../routes/medicamentosRoutes");

app.use(express.json());

app.use(medicamentosRoutes);

app.listen(3000, () => console.log("Servidor Levantado en el puerto 3000"));
