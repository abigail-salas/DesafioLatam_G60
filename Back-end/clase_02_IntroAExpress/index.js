const express = require("express");
const app = express();
const fs = require("fs");

app.listen(3000, console.log("Servidor levantado!")); // Inicia el servidor

app.get("/", (req, res) => res.send("PRIMERA VISUALIZACION")); // Envio de solitud GET

app.get("/home", (req, res) => res.send("ACA ESTOY EN HOME"));

/* req (request): El objeto de solicitud
res (response): El objeto de respuesta */

app.get("/productos", (req, res) => {
  const productos = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
  res.json(productos);
});

app.use(express.json()); // Ejecucion del middleware

app.post("/productos", (req, res) => {
  const nuevoProducto = req.body; // Accedemos al payload de la consulta por medio del atributo body del request

  const productos = JSON.parse(fs.readFileSync("productos.json", "utf-8"));

  productos.push(nuevoProducto);

  fs.writeFileSync("productos.json", JSON.stringify(productos));

  res.send("Producto agregado");
});
