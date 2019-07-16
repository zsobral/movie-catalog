import React from 'react';
import styled from '@emotion/styled/macro';
import css from '@emotion/css/macro';

const kinds = {
  danger: css`
    background-color: #e54937;
    color: #ffffff;
  `,
};

const StyledAlert = styled.div`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;

  ${props => kinds[props.kind] || kinds.danger}
`;

const Alert = ({ children, kind, ...props }) => (
  <StyledAlert kind={kind} {...props}>
    {children}
  </StyledAlert>
);

export { Alert, kinds };
