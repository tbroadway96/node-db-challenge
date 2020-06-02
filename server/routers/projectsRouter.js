const express = require('express');

const projects = require('../models/project-model');

const projectsRouter = express.Router();

//GET PROJECTS
projectsRouter.get('/', async (req, res) => {
    const projectList = await projects.getProjects();

    if (projectList) {
        res.status(200).json(projectList);
    } else {
        res.status(500).json({ message: 'There was an issue with fetching the project list.' });
    }
})

//CREATE PROJECT
projectsRouter.post('/', async (req, res) => {
    const body = req.body;
    console.log('body', body)
    
    if (!body.name) {
        res.status(500).json({ message: 'You must provide a name.' });
    }

    const project = await projects.addProject(body);

    if (project) {
        res.status(200).json(project);
    } else {
        res.status(500).json({ message: 'There was an issue with creating the project.' });
    }
})

module.exports = projectsRouter;
