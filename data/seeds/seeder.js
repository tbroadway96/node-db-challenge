
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'pass sprint', 
          description: 'seed', 
          completed: false 
        },
        {
          id: 2, 
          name: 'hit stretch',
          description: 'more seeds',
          completed: false
        },
        {
          id: 3, 
          name: 'get job',
          description: 'have seeds',
          completed: false
        }
      ]);
    });
};
