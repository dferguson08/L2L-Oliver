
exports.up = function (knex, Promise) {
  return knex.schema.createTable('vehicles', (table) => {
    table.string('make', 50);
    table.string('model', 50);
    table.integer('year');
    table.string('vin', 17).primary();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('vehicles');
};
