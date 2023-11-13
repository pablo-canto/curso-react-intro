import React from 'react';
import './TodoSearch.css';
import react from 'react';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan ToDos de: ' + searchValue);

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value = {searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };