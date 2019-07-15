'use strict';

const express = require('express');

const usersController = require('./users/users-controller');
const moviesController = require('./movies/movies-controller');

const app = express();

app.disable('x-powered-by');

if (process.env.NODE_ENV === 'development') {
  app.use(require('cors')());
}

app.use(express.json());

app.get('/api/healthz', (req, res) => {
  res.send("I'm okay!");
});

app.use('/api', [usersController, moviesController]);

module.exports = app;
