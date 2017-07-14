
exports.up = function (knex, Promise) {
  return knex.schema.alterTable('vehicles', (table) => {
    table.string('make', 50).notNullable().alter();
    table.string('model', 50).notNullable().alter();
    table.integer('year').notNullable().alter();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('vehicles', (table) => {
    table.string('make', 50).nullable().alter();
    table.string('model', 50).nullable().alter();
    table.integer('year').nullable().alter();
  });
};
