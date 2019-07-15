'use strict';

const express = require('express');
const { query, body } = require('express-validator');

const validate = require('../middlewares/validate-middleware');
const authGuard = require('../middlewares/auth-guard-middleware');
const moviesServices = require('./movies-service');

const router = express.Router();

router.get('/movies', async (req, res) => {
  try {
    const movies = await moviesServices.findAll();
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.post(
  '/movies',
  [
    validate([
      body('title').exists(),
      body('genres')
        .isArray()
        .exists(),
      body('releaseDate').exists(),
      body('actors')
        .isArray()
        .exists(),
      body('plot').exists(),
      body('trailerUrl').exists(),
      body('posterUrl').exists(),
    ]),
    authGuard,
  ],
  async (req, res) => {
    try {
      const movieId = await moviesServices.create({
        title: req.body.title,
        genres: req.body.genres,
        releaseDate: req.body.releaseDate,
        actors: req.body.actors,
        plot: req.body.plot,
        trailerUrl: req.body.trailerUrl,
        posterUrl: req.body.posterUrl,
      });
      res.status(201).json({ id: movieId });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

router.patch(
  '/movies/:id',
  [
    validate([
      body('actors')
        .optional()
        .isArray(),
      body('genres')
        .optional()
        .isArray(),
    ]),
    authGuard,
  ],
  async (req, res) => {
    try {
      const movieId = await moviesServices.update(req.params.id, {
        actors: req.body.actors,
        genres: req.body.genres,
        plot: req.body.plot,
        posterUrl: req.body.posterUrl,
        releaseDate: req.body.releaseDate,
        title: req.body.title,
        trailerUrl: req.body.trailerUrl,
      });
      if (!movieId) {
        return res.status(404).json({ error: { msg: 'movie not found' } });
      }
      res.json({ id: movieId });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

router.get(
  '/movies/omdb',
  [validate([query('search').exists()]), authGuard],
  async (req, res) => {
    try {
      const movies = await moviesServices.findOmdbMovie(req.query.search);
      res.json(movies);
    } catch (error) {
      res.sendStatus(500);
    }
  }
);

router.get('/movies/omdb/:imdbId', [authGuard], async (req, res) => {
  try {
    const movie = await moviesServices.findOmdbMovieDetails(req.params.imdbId);
    res.json(movie);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
