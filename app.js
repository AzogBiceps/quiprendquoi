const express = require('express');
const app = express()

require('dotenv').config();

app.get('/', function(req, res) {
  res.send('Hola papii');
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));