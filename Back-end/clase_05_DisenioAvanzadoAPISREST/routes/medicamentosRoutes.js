const express = require("express");
const {
  obtenerMedicamentos,
  obtenerMedicamentosOrdenados,
  obtenerMedicamentosPaginados,
  obtenerMedicamentosPorFiltros,
} = require("../controllers/medicamentosController");

const router = express.Router();

router.get("/medicamentos", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentos(req.query);

    res.json(medicamentos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los medicamentos" });
  }
});

router.get("/medicamentos/orden", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosOrdenados(req.query);

    res.json(medicamentos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los medicamentos ordenados" });
  }
});

router.get("/medicamentos/paginacion", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosPaginados(req.query);

    res.json(medicamentos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los medicamentos POR PAGINA" });
  }
});

router.get("/medicamentos/filtros", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosPorFiltros(req.query);

    res.json(medicamentos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los medicamentos FILTRADOS" });
  }
});

module.exports = router;
