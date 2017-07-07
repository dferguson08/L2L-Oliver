const express = require('express')
const app = express()

const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  port : '3000',
  // user     : 'me',
  // password : 'secret'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

    console.log('connected as id ' + connection.threadId);
});

app.get('/', function (req, res) {
  res.send('Hello World with DB!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE requests at /user')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
