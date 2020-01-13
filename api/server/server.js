var express = require('express');
var apiFunctions = require('../src/apiFunctions.js')

console.log("------------- API_Crous - nodejs running -------------")
// Set up the express app

const app = express();
// get all todos

app.get('/', (req, res) => {
  apiFunctions.getRepas();
  res.status(200).send({
    success: 'true',
    verssion: '1.0.0',
    type: 'json',
    data: 'khapta stenda',
  })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

