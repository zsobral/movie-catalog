import React from 'react';
import styled from '@emotion/styled/macro';

const StyledButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  background-color: #2688ff;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  transition: box-shadow 200ms ease-in-out;
  text-transform: uppercase;
  font-weight: bold;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #9cc8ff;
  }
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export { Button };
