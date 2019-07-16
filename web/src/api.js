import pickBy from 'lodash/fp/pickBy';

let token = null;

export const setToken = newToken => {
  token = newToken;
};

const authorizationHeader = () => {
  return token && { Authorization: `Bearer ${token}` };
};

export const getMovies = () => {
  return fetch('/api/movies').then(response => response.json());
};

export const getMovieById = id => {
  return fetch(`/api/movies/${id}`).then(response => response.json());
};

export const getOmdbMovies = ({ search }) => {
  return fetch(`/api/movies/omdb?search=${search}`, {
    headers: {
      ...authorizationHeader(),
    },
  }).then(response => response.json());
};

export const getOmdbMovieByImdbId = ({ imdbId }) => {
  return fetch(`/api/movies/omdb/${imdbId}`, {
    headers: {
      ...authorizationHeader(),
    },
  }).then(response => response.json());
};

export const updateMovie = (
  id,
  { title, plot, releaseDate, posterUrl, trailerUrl, actors, genres }
) => {
  return fetch(`/api/movies/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...authorizationHeader(),
    },
    body: JSON.stringify(
      pickBy(Boolean, {
        title,
        plot,
        releaseDate,
        posterUrl,
        trailerUrl,
        actors,
        genres,
      })
    ),
  }).then(response => response.json());
};

export const login = ({ username, password }) => {
  return fetch(`/api/users/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then(response => response.json());
};

export const logout = () => {
  token = null;
};
