import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled/macro';

import breakpoints from '../breakpoints';
import { useMovies } from '../contexts/movies-context';
import { MovieCard } from '../components/movie-card';

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
  const [state, actions] = useMovies();

  useEffect(() => {
    actions.getMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledGrid>
      {state.allIds.map(id => (
        <Link key={id} style={{ display: 'flex' }} to={`/movies/${id}`}>
          <MovieCard
            posterUrl={state.byId[id].posterUrl}
            alt={state.byId[id].title}
          />
        </Link>
      ))}
    </StyledGrid>
  );
};

export default Movies;
