import React from 'react';
import { render } from '@testing-library/react';

import { FieldControl } from './field-control';
import { Input } from './input';

test('renders a text input with a label "Name"', () => {
  const { getByLabelText } = render(
    <FieldControl label="Name">
      <Input type="text" />
    </FieldControl>
  );
  const input = getByLabelText(/name/i);
  expect(input).toHaveAttribute('type', 'text');
});
