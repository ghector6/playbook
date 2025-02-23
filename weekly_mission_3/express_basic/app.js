const express = require('express')
const app = express()
const port = 3000
//El uso de la diagonal vacía me recibe el parametro de trabajar en local host3000
app.get('/', (req, res) => {
    res.send("Hola a Hector")
})
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a LaunchX')
})

app.get('/explorerInNode', (req, res) => {
    const explorer = { id: 1, name: "Explorer1", msg: `Hello Explorer`}
    res.send(explorer)
})

app.get('/explorers:explorer', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.listen(port, () => {
    console.log("Server Listo!")
})