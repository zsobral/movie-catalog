import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './button';

storiesOf('Button', module).add('default', () => (
  <div style={{ margin: 30 }}>
    <Button>text</Button>
  </div>
));
