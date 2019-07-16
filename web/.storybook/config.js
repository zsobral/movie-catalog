import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';

import GlobalStyle from '../src/global-style';

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(storyFn => (
  <div style={{ margin: 32 }}>
    <GlobalStyle />
    {storyFn()}
  </div>
));

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
