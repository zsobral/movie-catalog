import React from 'react';
import styled from '@emotion/styled/macro';

import breakpoints from '../breakpoints';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.medium} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledPoster = styled.div`
  max-width: 300px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const StyledInfo = styled.div`
  margin-top: 16px;

  ${breakpoints.medium} {
    margin-top: 0;
    margin-left: 32px;
  }
`;

const StyledTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledSubtitle = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
`;

const StyledP = styled.p`
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 32px;
`;

const StyledTrailer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Movie = ({ movie }) => (
  <>
    <StyledWrapper>
      <StyledPoster>
        <img draggable={false} src={movie.posterUrl} alt={movie.title} />
      </StyledPoster>
      <StyledInfo>
        <div>
          <StyledTitle>{movie.title}</StyledTitle>
          <StyledP style={{ opacity: 0.6, marginBottom: 16 }}>
            {movie.genres.join(', ')}
          </StyledP>
          <StyledP>{movie.plot}</StyledP>
        </div>
        <div>
          <StyledSubtitle>Actors</StyledSubtitle>
          <StyledP style={{ marginBottom: 0 }}>
            {movie.actors.join(', ')}
          </StyledP>
        </div>
      </StyledInfo>
    </StyledWrapper>
    <div style={{ marginTop: 32, marginBottom: 32 }}>
      <StyledTrailer>
        <iframe
          title="trailer"
          type="text/html"
          src={movie.trailerUrl}
          frameBorder="0"
          allowFullScreen
        />
      </StyledTrailer>
    </div>
  </>
);

export { Movie };
