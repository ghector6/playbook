const express = require('express')
const app = express()
const port = 3000
//El uso de la diagonal vacía me recibe el parametro de trabajar en local host3000
app.get('/', (req, res) => {
    res.send("Hola a Hector")
})

app.listen(port, () => {
    console.log("Server Listo!")
})