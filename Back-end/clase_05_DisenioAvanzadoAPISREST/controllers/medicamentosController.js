const pool = require("../config/db");
const format = require("pg-format");

//Obtener medicamentos con limite
const obtenerMedicamentos = async ({ limit = 5 }) => {
  const consulta = "SELECT * FROM medicamentos LIMIT $1";

  const { rows: medicamentos } = await pool.query(consulta, [limit]);

  return medicamentos;
};

// Obtener medicamentos ordenados
const obtenerMedicamentosOrdenados = async ({
  limit = 5,
  order_by = "id_DESC",
}) => {
  const [campo, direccion] = order_by.split("_");

  const consulta = format(
    "SELECT * FROM medicamentos ORDER BY %s %s LIMIT %s",
    campo,
    direccion,
    limit
  );

  const { rows: medicamentos } = await pool.query(consulta);

  return medicamentos;
};

//Obtener los medicamentos páginados
const obtenerMedicamentosPaginados = async ({ limit = 2, page = 1 }) => {
  const offset = (page - 1) * limit;
  const consulta = format(
    "SELECT * FROM medicamentos LIMIT %s OFFSET %s",
    limit,
    offset
  );

  const { rows: medicamentos } = await pool.query(consulta);

  return medicamentos;
};

//Obtener medicamentos por filtro
const obtenerMedicamentosPorFiltros = async ({ precio_max, stock_min }) => {
  let filtros = [];

  if (precio_max) filtros.push(`precio <= ${precio_max}`);
  if (stock_min) filtros.push(`stock >= ${stock_min}`);

  let consulta = "SELECT * FROM medicamentos";

  if (filtros.length > 0) {
    consulta += ` WHERE ${filtros.join(" AND ")}`;
  }

  const { rows: medicamentos } = await pool.query(consulta);

  return medicamentos;
};

module.exports = {
  obtenerMedicamentos,
  obtenerMedicamentosOrdenados,
  obtenerMedicamentosPaginados,
  obtenerMedicamentosPorFiltros,
};
