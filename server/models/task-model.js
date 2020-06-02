const db = require('../../data/db-config');
const helpers = require('../helpers');

const getTasks = (id) => {
    return db.select('id', 'description', 'note').from('tasks')
        .where("id", id)
        .then(tasks => {
            return tasks.map(task => helpers.taskToBody(task))
        })
        .catch(err => console.log(err));
}

const addTask = (task) => {
    return db('tasks')
        .insert(task, 'id')
}

module.exports = { getTasks, addTask };
