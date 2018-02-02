'use strict';

const chance = new (require('chance'))();

exports.seed = function (knex, Promise) {
  return knex('vehicles').del()
    .then(function () {
      const vehicles = [];

      while (vehicles.length < 10) {
        const newVehicle = {
          vin: chance.word({length: 17}).toUpperCase(),
          year: chance.year({min: 1950, max: 2017}),
          make: chance.city(),
          model: chance.country({full: true})
        };
        // array.push and push item into array
        vehicles.push(newVehicle);
      }
      return knex('vehicles').insert(vehicles);
    });
};
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('vehicles').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('vehicles').insert([
//         {vin: 'JM3KFADL2H0148770', year: '2017', make: 'Mazda', model: 'CX-5 Grand Touring' },
//         {vin: 'JM3KFADL2H0148771', year: '2017', make: 'Mazda', model: 'CX-5 Grand Touring' },
//         {vin: 'JM3KFADL2H0148772', year: '2016', make: 'Ford', model: 'F-150' }
//       ]);
//     });
// };
