const projectsSeed = (knex) => {
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
}

const tasksSeed = (knex) => {
  return knex('tasks').del()
    .then(() => {
      return knex('tasks').insert([
        {
          id: 1,
          description: 'Do thing',
          note: 'Note',
          completed: false
        },
        {
          id: 2,
          description: 'Do another thing',
          note: 'Note 2',
          completed: false
        },
        {
          id: 3,
          description: 'Do last thing',
          note: 'Note 3',
          completed: false
        }
      ])
    })
}

exports.seed = { projectsSeed, tasksSeed };
