import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map((option) =>
        <option value={option.value}>
          {option.title}
        </option>
      )}
    </select>
  );
};

export default MySelect;
