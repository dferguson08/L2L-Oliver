const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const config = require('./knexfile');

const knex = require('knex')(config[process.env.NODE_ENV]);

const PORT = process.env.PORT;

async function fetchVehicleByVIN (vin) {
  const vehicle = await knex.select().from('vehicles')
    .where('vin', vin);

  if (vehicle.length === 0) {
    return null;
  }
  return vehicle[0];
}

app.get('/inventory', async function (req, res) {
  const vehicles = await knex.select().from('vehicles');

  res.send({
    vehicles
  });
});

app.get('/vehicles/:vin', async function (req, res) {
  const { vin } = req.params;
  const vehicle = await fetchVehicleByVIN(vin);

  if (!vehicle) {
    return res.status(404).send();
  }
  res.send(vehicle);
});

app.post('/vehicles', async function (req, res) {
  const { vin, make, model, year } = req.body;
  if (!make || !model || !year){
    return res.status(400).send({
      error: 'Request must contain make, model, and year'
    });
  }

  if (vin.length !== 17) {
    return res.send({
      error: 'VIN not the proper length'
    }).status(400);
  }

  try {
    await knex('vehicles').insert({
      vin,
      make,
      model,
      year
    });
    // inserting into DB
  } catch (ex) {
    if (ex.message.indexOf('duplicate key value violates unique constraint "vehicles+pkey"') > -1) {
      return res.status(400).send({
        error: 'VIN already exists in database'
      });
    }
    console.log(ex);
    return res.status(400).send({
      error: 'An error occurred'
    });
  }

  res.status(201).send(req.body);
});

app.put('/vehicles/:vin', async function (req, res) {
  const { vin } = req.params;
  // before we do any updating, we want to see if the vin exists
  const vehicle = await fetchVehicleByVIN(vin);

  if (!vehicle) {
    return res.status(404).send();
  }
  const { make, model, year } = req.body;
  if (!make || !model || !year) {
    return res.status(400).send({
      error: 'Request must contain make, model, and year'
    });
  }

  try {
    await knex('vehicles').update({
      make,
      model,
      year
    }).where('vin', vin);

    const updatedVehicle = await fetchVehicleByVIN(vin);

    return res.status(201).send(updatedVehicle);
  } catch (ex) {
    return res.status(400).send({
      error: 'An error occurred while entering vehicles into the DB'
    });
  }
  // const id = req.params.id;
  // if (db.call(id)) {
  //   update(req.body);
  // }
});
// generally you want to pass the entire object back, but updated

app.delete('/vehicles/:id', function (req, res) {
  res.send('Got a DELETE requests at /user');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
