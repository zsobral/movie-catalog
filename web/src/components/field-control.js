import React from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';

const StyledFieldControl = styled.div`
  margin-top: 8px;
`;

const StyledFieldControlLabel = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const FieldControl = ({ label, children }) => {
  return (
    <StyledFieldControlLabel>
      {label}
      <StyledFieldControl>{children}</StyledFieldControl>
    </StyledFieldControlLabel>
  );
};

FieldControl.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export { FieldControl };
