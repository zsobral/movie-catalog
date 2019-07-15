import React from 'react';
import { storiesOf } from '@storybook/react';

import { FieldControl } from './field-control';
import { Select } from './select';

const options = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
];

storiesOf('Select', module)
  .add('single', () => (
    <FieldControl label="Number">
      <Select options={options} />
    </FieldControl>
  ))
  .add('multiple', () => (
    <FieldControl label="Numbers">
      <Select options={options} isMulti />
    </FieldControl>
  ));
