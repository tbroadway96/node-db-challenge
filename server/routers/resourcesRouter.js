const express = require('express');
const Resources = require('../models/resource-model');
const resourcesRouter = express.Router();

// GET RESOURCES
resourcesRouter.get('/', async (req, res) => {
    const resourceList = await Resources.getResources();

    if (resourceList) {
        res.status(200).json(resourceList);
    } else {
        res.status(500).json({ message: 'There was an issue with fetching the resources.' });
    }
})

// ADD RESOURCES
resourcesRouter.post('/', async (req, res) => {
    const body = req.body;

    if (!body.name) {
        res.status(500).json({ message: 'You must provide a resource name.' });
    }

    const newResource = await Resources.addResource(body);

    if (newResource) {
        res.status(200).json(newResource);
    } else {
        res.status(500).json({ message: 'There was an issue with adding the resource.' });
    }
})

module.exports = resourcesRouter;
