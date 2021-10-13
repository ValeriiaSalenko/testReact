import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/select/MySelect";

const PosstFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      />

      <MySelect
        defaultValue="Sort by"
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        options={[
          {value: 'name', title: 'Name'},
          {value: 'description', title: 'Description'}
         ]}
      />
    </div>
  );
};

export default PosstFilter;
