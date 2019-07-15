import React from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  max-width: 300px;
  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.37);
  background-color: #000000;
`;

const StyledPoster = styled.div`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

const MovieCard = ({ posterUrl, alt }) => {
  return (
    <StyledCard>
      <StyledPoster>
        <img src={posterUrl} alt={alt} />
      </StyledPoster>
    </StyledCard>
  );
};

MovieCard.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export { MovieCard };
