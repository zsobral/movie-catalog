'use strict';

const request = require('request-promise-native');

const Movie = require('./movies-schema');

exports.create = async ({
  title,
  genres,
  releaseDate,
  actors,
  plot,
  trailerUrl,
  posterUrl,
}) => {
  const movie = new Movie({
    title,
    genres,
    releaseDate,
    actors,
    plot,
    trailerUrl,
    posterUrl,
  });
  const result = await movie.save();
  return result._id;
};

exports.update = async (
  id,
  { title, genres, releaseDate, actors, plot, trailerUrl, posterUrl }
) => {
  const movie = await Movie.findById(id).exec();

  if (!movie) {
    return null;
  }

  movie.title = title || movie.title;
  movie.genres = genres || movie.genres;
  movie.releaseDate = releaseDate || movie.releaseDate;
  movie.actors = actors || movie.actors;
  movie.plot = plot || movie.plot;
  movie.trailerUrl = trailerUrl || movie.trailerUrl;
  movie.posterUrl = posterUrl || movie.trailerUrl;

  const result = await movie.save();
  return result._id;
};

exports.findAll = async () => {
  const movies = await Movie.find({}).exec();
  return movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    genres: movie.genres,
    releaseDate: movie.releaseDate,
    actors: movie.actors,
    plot: movie.plot,
    trailerUrl: movie.trailerUrl,
    posterUrl: movie.posterUrl,
  }));
};

exports.findOmdbMovie = async search => {
  const baseUrl = 'http://www.omdbapi.com'; // ?t=teste&plot=full'
  const options = {
    qs: {
      s: search,
      apikey: process.env.OMDB_API_KEY,
      type: 'movie',
      r: 'json',
      page: 1,
    },
    json: true,
  };
  const response = await request.get(baseUrl, options);
  return response['Search'].map(movie => ({
    imdbId: movie['imdbID'],
    title: movie['Title'],
    posterUrl: movie['Poster'],
  }));
};

exports.findOmdbMovieDetails = async imdbId => {
  const baseUrl = 'http://www.omdbapi.com';
  const options = {
    qs: {
      i: imdbId,
      plot: 'full',
      r: 'json',
      apikey: process.env.OMDB_API_KEY,
    },
    json: true,
  };
  const response = await request.get(baseUrl, options);
  return {
    imdbId: response['imdbID'],
    title: response['Title'],
    releaseDate: response['Released'],
    genres: response['Genre'].split(',').map(genre => genre.trim()),
    actors: response['Actors'].split(',').map(actor => actor.trim()),
    plot: response['Plot'],
    posterUrl: response['Poster'],
  };
};
