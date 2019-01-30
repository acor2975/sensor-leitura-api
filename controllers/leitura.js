var Leitura = require('../models/leitura')

function criar (leitura) {
    var model = new Leitura(leitura)
    return model.save()
}

function encontrarRecente () {
    return Leitura.findOne().sort('-dataColeta')
}

module.exports = {
    criar: criar,
    encontrarRecente: encontrarRecente
}
