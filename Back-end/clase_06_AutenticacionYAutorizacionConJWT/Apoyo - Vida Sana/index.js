const express = require('express')
const app = express()
const cors = require('cors')
const { getEventos, deleteEvento } = require('./consultas')

app.listen(3000, console.log("SERVER ON"))
app.use(cors())
app.use(express.json())

app.get("/eventos", async (req, res) => {
    try {
        const eventos = await getEventos()
        res.json(eventos)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})