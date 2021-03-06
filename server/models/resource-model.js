const db = require('../../data/db-config');

const addResource = (resource) => {
    return db('resources').insert(resource, 'id');
}

const getResources = () => {
    return db.select('name', 'description').from('resources');
}

module.exports = { addResource, getResources };
