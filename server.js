const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.get('/inventory', function (req, res) {
  res.send({
    vehicles: [
      {
        vin: '111111111111111',
        make: 'Test',
        model: 'Test',
        year: 1988
      }
    ]
  });
});

app.post('/vehicles', function (req, res) {
  const { vin, make, model, year } = req.body;
  req.body.id = Math.ceil(Math.random() * 100);
  res.send(req.body).status(201);
});

app.put('/vehicles/:id', function (req, res) {
  // const id = req.params.id;
  // if (db.call(id)) {
  //   update(req.body);
  // }
  res.status(404);
});

app.delete('/vehicles/:id', function (req, res) {
  res.send('Got a DELETE requests at /user');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
