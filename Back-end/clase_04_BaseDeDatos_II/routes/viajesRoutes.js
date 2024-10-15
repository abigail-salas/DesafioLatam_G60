const express = require("express");
const {
  obtenerViajes,
  modificarPresupuesto,
  eliminarViaje,
} = require("../controllers/viajesControllers");

const router = express.Router();

router.get("/viajes", obtenerViajes);

router.put("/viajes/:id", modificarPresupuesto);

router.delete("/viajes/:id", eliminarViaje);

module.exports = router;
