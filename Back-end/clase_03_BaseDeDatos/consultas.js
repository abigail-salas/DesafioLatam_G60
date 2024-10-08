const { Pool } = require("pg");

/* sql
CREATE DATABASE plan_de_viajes;

\c plan_de_viajes;

CREATE TABLE viajes (
    id SERIAL PRIMARY KEY,
    destino VARCHAR(50) NOT NULL,
    presupuesto INT NOT NULL
);
 */

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "plan_de_viajes",
  allowExitOnIdle: true,
});

const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
  console.log(result.rows);
};

getDate(); // Si devuelve la fecha de hoy, indica que hubo una conexion a la base de datos

const agregarViajes = async (destino, presupuesto) => {
  const consulta = "INSERT INTO viajes (destino, presupuesto) VALUES ($1, $2)";

  const values = [destino, presupuesto];
  const result = await pool.query(consulta, values);

  console.log("Viaje agregado", result.rowCount);
};

//agregarViajes("Argentina", 1300000);

const obtenerViajes = async () => {
  const result = await pool.query("SELECT * FROM viajes");

  console.log(result.rows);

  return result.rows;
};

obtenerViajes();

// Exportar ambas funciones

module.exports = { agregarViajes, obtenerViajes };
