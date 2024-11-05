const express = require('express');
const app = express();

const productos = require("./productos.json")

app.listen(3000, console.log("SERVER ON"))

app.use(express.json())

app.get("/productos", (req, res) => {
    res.status(200).send(productos)
})

app.get("/productos/:id", (req, res) => {
    const { id } = req.params
    const producto = productos.find(p => p.id == id)
    if (producto) res.status(200).send(producto)
    else res.status(404).send({ message: "No se encontró ningún producto con ese id" })
})

app.post("/productos", (req, res) => {
    const producto = req.body
    const { id } = producto
    const existeUnProductoConEseId = productos.some(p => p.id == id)
    if (existeUnProductoConEseId) res.status(400).send({ message: "Ya existe un producto con ese id" })
    else {
        productos.push(producto)
        res.send(productos)
    }
})

app.put("/productos", (req, res) => {
    const producto = req.body
    const { id } = producto
    const productoIndexFound = productos.findIndex(p => p.id == id)
    if (productoIndexFound >= 0) {
        productos[productoIndexFound] = producto
        res.send(productos)
    } else {
        res.status(404).send({ message: "No se encontró ningún producto con ese id" })
    }
})

app.delete("/productos/:id", (req, res) => {
    const jwt = req.header("Authorization")
    if (jwt) {
        const { id } = req.params
        const productoIndexFound = productos.findIndex(p => p.id == id)

        if (productoIndexFound >= 0) {
            productos.splice(productoIndexFound, 1)
            console.log(productoIndexFound, productos)
            res.send(productos)
        } else {
            res.status(404).send({ message: "No se encontró ningún producto con ese id" })
        }

    } else res.status(400).send({ message: "No recibió ningún token en las cabeceras" })
})

app.use("*", (req, res) => {
    res.status(404).send({ message: "La ruta que intenta consultar no existe" })
})

module.exports = app
