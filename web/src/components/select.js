import React from 'react';
import ReactSelect, { components as SelectComponents } from 'react-select';

const Select = props => {
  return (
    <ReactSelect
      styles={{
        control: provided => ({
          ...provided,
          borderRadius: 0,
        }),
        menu: provided => ({
          ...provided,
          borderRadius: 0,
        }),
      }}
      {...props}
    />
  );
};

export { Select, SelectComponents };
