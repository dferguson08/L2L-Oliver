const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World with DB!');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE requests at /user');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
