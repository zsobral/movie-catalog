export const getMovies = options => {
  return fetch('/api/movies', { method: 'GET', ...options }).then(response =>
    response.json()
  );
};

export const getOmdbMovies = ({ search }, options) => {
  return fetch(`/api/movies/omdb?search=${search}`, {
    method: 'GET',
    ...options,
  }).then(response => response.json());
};

export const getOmdbMovieByImdbId = ({ imdbId }, options) => {
  return fetch(`/api/movies/omdb/${imdbId}`, { ...options }).then(response =>
    response.json()
  );
};

export const login = ({ username, password }, options) => {
  return fetch(`/users/sign-in`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    ...options,
  }).then(response => response.json());
};
