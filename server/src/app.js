'use strict';

const express = require('express');

const usersController = require('./users/users-controller');

const app = express();

app.use(express.json());

app.get('/healthz', (req, res) => {
  res.send("I'm okay!");
});

app.use(usersController);

module.exports = app;
