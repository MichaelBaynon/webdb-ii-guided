
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geece').del()
    .then(function () {
      // Inserts seed entries
      return knex('geece').insert([
        {name: 'ben aflack', color: 'white '},
        {name: 'howard', color: 'grey '},
        {name: 'steve', color: 'black '}
      ]);
    });
};
