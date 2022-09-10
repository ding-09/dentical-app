import React from 'react';
import { StyledSearchBar } from './style';
import { GrSearch } from 'react-icons/gr';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <input
        type='text'
        name='zipcode'
        id='zipcode'
        placeholder='Search by zipcode e.x. 93307'
      />
      <GrSearch />
    </StyledSearchBar>
  );
};

export default SearchBar;
