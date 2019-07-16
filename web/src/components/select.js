import React from 'react';
import ReactSelect, { components as SelectComponents } from 'react-select';
import ReactCreatableSelect from 'react-select/creatable';

const styles = {
  control: provided => ({
    ...provided,
    borderRadius: 0,
  }),
  menu: provided => ({
    ...provided,
    borderRadius: 0,
  }),
};

const Select = ({ creatable, ...props }) => {
  const Component = creatable ? ReactCreatableSelect : ReactSelect;
  return <Component styles={styles} {...props} />;
};

export { Select, SelectComponents };
