import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from './input';
import { FieldControl } from './field-control';

storiesOf('Input', module).add('with field control', () => (
  <FieldControl label="Name">
    <Input />
  </FieldControl>
));
