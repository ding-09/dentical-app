import React from 'react';
import { StyledSearchBar } from './style';
import { GrSearch } from 'react-icons/gr';

const SearchBar = () => {
  return (
    <StyledSearchBar action='results' method='get'>
      <input
        type='text'
        name='zipcode'
        id='zipcode'
        placeholder='Search by zipcode e.x. 93307'
        pattern="\b9\d{4}"
        title='Five number zipcode'
      />
      <button aria-label='search'>
        <GrSearch />
      </button>
    </StyledSearchBar>
  );
};

export default SearchBar;
