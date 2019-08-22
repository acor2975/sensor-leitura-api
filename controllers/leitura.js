var Leitura = require('../models/leitura')

function criar (umidade) {
    console.log(umidade)
    var model = new Leitura(leitura = {dataColeta: Date.now(), umidadeSolo: new Number(umidade.umidadeSolo)})
    return model.save()
}

function encontrarRecente () {
    return Leitura.findOne().sort('-dataColeta')
}

module.exports = {
    criar: criar,
    encontrarRecente: encontrarRecente

}
