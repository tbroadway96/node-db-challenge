const db = require('../../data/db-config');
const helpers = require('../helpers');

const addProject = (project) => {
    return db('projects').insert(project);
}

const getProjects = () => {
    return db.select('id', 'name', 'description', 'completed').from('projects')
        .then(projects => {
            return projects.map(project => helpers.projectToBody(project))
        })
        .catch(err => console.log(err))
}

module.exports = { addProject, getProjects };
