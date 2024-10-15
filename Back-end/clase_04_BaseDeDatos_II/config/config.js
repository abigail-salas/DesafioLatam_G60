const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "plan_de_viajes",
  port: "5432",
  allowExitOnIdle: true,
});

/* const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
  allowExitOnIdle: true,
});
 */

module.exports = pool;
