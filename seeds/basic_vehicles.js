
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        {vin: 'JM3KFADL2H0148770', year: '2017', make: 'Mazda', model: 'CX-5 Grand Touring' },
        {vin: 'JM3KFADL2H0148771', year: '2017', make: 'Mazda', model: 'CX-5 Grand Touring' }
      ]);
    });
};
