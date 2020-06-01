const db = require('../../data/db-config');

const addResource = (resource) => {
    return db('resources').insert(resource);
}

const getResources = () => {
    return db.select('name', 'description').from('resources');
}

module.exports = { addResource, getResources };
