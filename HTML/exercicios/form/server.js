const express = require('express') // importar o express
const app = express() // instanciar o express e associar a variável app
const bodyParser = require('body-parser') // fazer o import do body-parser

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003, function() {
    console.log("Servidor Rodando")
})