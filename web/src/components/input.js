import React from 'react';
import styled from '@emotion/styled/macro';

const StyledInput = styled.input`
  background-color: #f3f3f3;
  border: none;
  font-size: 16px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #f3f3f3;
  transition: border 200ms ease;

  &:focus {
    outline: none;
    border-color: #2688ff;
  }
`;

const Input = props => {
  return <StyledInput {...props} />;
};

export { Input };
