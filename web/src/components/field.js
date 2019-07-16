import React from 'react';

import { FieldControl } from './field-control';
import { Input } from './input';
import { TextArea } from './text-area';

const createField = Component => ({ label, field, form, ...props }) => {
  return (
    <FieldControl label={label}>
      <Component {...field} {...props} />
    </FieldControl>
  );
};

const InputField = createField(Input);
const TextAreaField = createField(TextArea);

export { InputField, TextAreaField };
