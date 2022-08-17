const express = require('express');
const launchesRouter = express.Router();
const { getAllLaunches, httpAddNewLaunch } = require('../launches/launches.controller');

launchesRouter.get('/launches', getAllLaunches);
launchesRouter.post('/launches', httpAddNewLaunch);

module.exports = launchesRouter;
