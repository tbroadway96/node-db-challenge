const express = require('express');
const Tasks = require('../models/task-model');
const tasksRouter = express.Router();

// GET PROJECT TASKS
tasksRouter.get('/:id/tasks', async (req, res) => {
    const id = req.params.id;

    const taskList = await Tasks.getTasks(id)

    if (taskList) {
        res.status(200).json(taskList);
    } else {
        res.status(500).json({ message: 'There was an issue with getting the project tasks.' });
    }
})

// CREATE TASK
tasksRouter.post('/:id/tasks', async (req, res) => {

    if (!req.body.description && !req.body.completed) {
        res.status(500).json({ message: 'You must provide a description and completed status.' });
    }

    const task = await Tasks.addTask({
        description: req.body.description,
        completed: req.body.completed
    });

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(500).json({ message: 'There was an issue with adding a task.' });
    }
})

module.exports = tasksRouter;
