const express = require('express');
const projectsRouter = require('./routers/projectsRouter');
const tasksRouter = require('./routers/tasksRouter');
const resourcesRouter = require('./routers/resourcesRouter');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/projects', tasksRouter);
server.use('/api/projects', resourcesRouter);

module.exports = server;
