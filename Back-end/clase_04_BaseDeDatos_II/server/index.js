const express = require("express");
const app = express();
const viajesRoutes = require("../routes/viajesRoutes");

app.use(express.json());

app.use(viajesRoutes);

app.listen(3000, () => console.log("Servidor Levantado en el puerto 3000"));
