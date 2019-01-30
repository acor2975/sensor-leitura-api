require('dotenv').config()

var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')

var routes = require('./routes')

var app = express()
var port = 3000
var mongoDB = process.env.MONGO_URI

mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.connection.on('error', console.error.bind(console, 'Não foi possivel conectar no banco.'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)

app.listen(port, function () {
    console.log(`App escutando na porta ${port}`)
})