import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import { useMovies } from '../contexts/movies-context';
import { Movie as StatelessMovie } from '../components/movie';

const Movie = ({ id }) => {
  const [state, actions] = useMovies();
  const movie = state.byId[id];

  useEffect(() => {
    if (!movie) {
      actions.getMovieById(id);
    }
  }, [id, movie]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!movie) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Movie Catalog - {movie.title}</title>
      </Helmet>
      <StatelessMovie movie={movie} />
    </>
  );
};

export default Movie;
