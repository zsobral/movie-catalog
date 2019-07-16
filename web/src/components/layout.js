import React from 'react';
import styled from '@emotion/styled/macro';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContainer = styled.div`
  max-width: 960px;
  padding: 0px 16px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const StyledHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const StyledBody = styled.div`
  flex-grow: 1;
  background-color: #f3f3f3;
`;

const Layout = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const LayoutHeader = ({ children }) => (
  <StyledHeader>
    <StyledContainer>{children}</StyledContainer>
  </StyledHeader>
);

const LayoutBody = ({ children }) => (
  <StyledBody>
    <StyledContainer>{children}</StyledContainer>
  </StyledBody>
);

export { Layout, LayoutHeader, LayoutBody };
