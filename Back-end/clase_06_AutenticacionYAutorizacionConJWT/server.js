const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(express.json());

const {
  getEventos,
  verificarCredenciales,
  deleteEvento,
} = require("./consultas");

app.listen(port, () => console.log("Servidor levantado en el puerto 3000"));

app.get("/eventos", async (req, res) => {
  try {
    const eventos = await getEventos();
    res.json(eventos);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    await verificarCredenciales(email, password);
    const token = jwt.sign({ email }, "clave_secreta");
    res.send(token);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
});

/* app.get("/eventos", (req, res) => {
  try {
    const Authorization = req.header("Authorization");
    const token = Authorization.split("Bearer ")[1];

    jwt.verify(token, "clave_secreta");

    const payload = jwt.decode(token);

    res.json({ message: `Acceso autorizado para ${payload.email}` });
  } catch (error) {
    res.status(401).send("Token invalido o no proporcionado");
  }
}); */

app.delete("/eventos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const Authorization = req.header("Authorization");
    const token = Authorization.split("Bearer ")[1];

    jwt.verify(token, "clave_secreta");
    const { email } = jwt.decode(token);

    await deleteEvento(id);

    res.send(`El usuario ${email} ha eliminado el evento con id ${id}`);
  } catch (error) {
    console.log(error, "<--- ERROR EN CATCH");
    res.status(error.code || 500).send(error);
  }
});
