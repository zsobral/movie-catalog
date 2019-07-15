import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';

import { MovieCard } from '../components/movie-card';
import breakpoints from '../breakpoints';
import * as api from '../api';

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 16px;

  ${breakpoints.medium} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  ${breakpoints.large} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <StyledGrid>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          posterUrl={movie.posterUrl}
          alt={movie.title}
        />
      ))}
    </StyledGrid>
  );
};

export default Movies;
