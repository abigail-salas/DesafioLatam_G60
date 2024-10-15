const pool = require("../config/config");

// Obtener todos los viajes

const obtenerViajes = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM viajes");

    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Error al obtener los viajes");
  }
};

const modificarPresupuesto = async (req, res) => {
  const { id } = req.params;
  const { presupuesto } = req.query;

  try {
    const consulta = "UPDATE viajes SET presupuesto = $1 WHERE id = $2";

    const values = [presupuesto, id];

    await pool.query(consulta, values);

    res.send("Presupuesto modificado con exito");
  } catch (error) {
    res.status(500).send("Error al modificar presupuesto");
  }
};

const eliminarViaje = async (req, res) => {
  const { id } = req.params;
  try {
    const consulta = "DELETE FROM viajes WHERE id = $1";

    const values = [id];

    await pool.query(consulta, values);

    res.send("Viaje eliminado con exito");
  } catch (error) {
    res.status(500).send("Error al eliminar el viaje");
  }
};

module.exports = { obtenerViajes, modificarPresupuesto, eliminarViaje };
