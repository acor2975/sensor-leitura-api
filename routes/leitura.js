var express = require('express')
var router = express.Router()

var LeituraController = require('../controllers/leitura')

router.get('/recente', async function (req, res) {
    var leitura = await LeituraController.encontrarRecente()
    res.send(leitura)
})

router.post('/', async function (req, res) {
    var leitura = await LeituraController.criar(req.body)
    res.send(leitura)
})

module.exports = router