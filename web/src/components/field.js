import React from 'react';
import PropTypes from 'prop-types';

import { FieldControl } from './field-control';
import { Input } from './input';

const InputField = ({ label, field, form, ...props }) => {
  return (
    <FieldControl label={label}>
      <Input {...field} {...props} />
    </FieldControl>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object,
  form: PropTypes.object,
};

export { InputField };
