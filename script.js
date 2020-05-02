const fs = require('fs')
const csv = require('csv-parser')
var moment = require('moment')
const axios = require('axios')

  fs.createReadStream('test_data.csv')
  .pipe(csv(['data', 'hora','valor']))
  .on('data', (row) => {
    var myDate = moment(row.data+row.hora, 'DD/MM/YYYY HH:mm:ss').toDate();
    var object = {dataColeta: myDate, umidadeSolo: new Number(row.valor)}
    axios.post('http://localhost:3000/leitura/', object)

  })
  .on('end', () => {
    console.log('CSV file successfully processed')
  });