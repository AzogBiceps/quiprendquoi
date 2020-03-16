const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
});

app.post('/party', function(req, res) {
  console.log(req.body);
  res.send('Post ok !');
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));