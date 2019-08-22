var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Leitura = new Schema({
    dataColeta: Date,
    umidadeSolo: Number,
})

module.exports = mongoose.model('Leitura', Leitura)