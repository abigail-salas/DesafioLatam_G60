const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "farmacia",
    port: 5432,
    allowExitOnIdle: true
});


module.exports = {}