'use strict';

const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genres: { type: [String], required: true },
  releaseDate: { type: String, required: true },
  actors: { type: [String], required: true },
  plot: { type: String, required: true },
  trailerUrl: { type: String, required: true },
  posterUrl: { type: String, required: true },
});

module.exports = mongoose.model('Movies', moviesSchema);
