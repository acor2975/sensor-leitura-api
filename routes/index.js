var express = require('express')
var router = express.Router()

var leitura = require('./leitura')

router.use('/leitura', leitura)

module.exports = router