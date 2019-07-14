'use strict';

const express = require('express');

const usersController = require('./users/users-controller');
const moviesController = require('./movies/movies-controller');

const app = express();

app.use(express.json());

app.get('/healthz', (req, res) => {
  res.send("I'm okay!");
});

app.use(usersController);
app.use(moviesController);

module.exports = app;
