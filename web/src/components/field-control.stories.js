import React from 'react';
import { storiesOf } from '@storybook/react';

import { FieldControl } from './field-control';
import { Input } from './input';

storiesOf('FieldControl', module).add('with an input', () => (
  <FieldControl label="Name">
    <Input />
  </FieldControl>
));
