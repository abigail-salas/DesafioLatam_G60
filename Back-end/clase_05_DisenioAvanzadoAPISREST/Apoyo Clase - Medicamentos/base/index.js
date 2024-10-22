const express = require('express')
const app = express()
app.listen(3000, console.log('Server ON'))

const {  } = require('./consultas')

app.get('/medicamentos', async (req, res) => {
  res.json()
})

