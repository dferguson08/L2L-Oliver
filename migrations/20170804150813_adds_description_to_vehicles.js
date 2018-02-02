
exports.up = function (knex, Promise) {
  return knex.schema.table('vehicles', (table) => {
    table.text('description');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table('vehicles', (table) => {
    table.dropColumn('description');
  });
};
