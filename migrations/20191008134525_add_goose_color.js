
exports.up = function(knex) {
  return knex.schema.table('geece', tbl => {
      tbl.string('color', 48)
  })
};

exports.down = function(knex) {
  return knex.schema.table('geece', tbl => {
      tbl.dropColumn('color')
  })
};
