'use strict';

const express = require('express');

const app = express();

app.get('/healthz', (req, res) => {
  res.send("I'm okay!");
});

app.get('/number', (req, res) => {
  res.json({ number: Math.random() * 10 });
});

module.exports = app;
