import React from 'react';
import { Global } from '@emotion/core';
import css from '@emotion/css/macro';

const globalStyle = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const GlobalStyle = () => <Global styles={globalStyle} />;

export default GlobalStyle;
