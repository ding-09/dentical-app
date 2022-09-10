import React from 'react';
import { SearchResultsPage, Header, Label } from './style';
import { BiChevronRight } from 'react-icons/bi';
import Sort from '../../components/sort'

const SearchResults = () => {
  return (
    <SearchResultsPage>
      <Header>
        <Label>
          <span>Dentist</span>
          <BiChevronRight />
          <span>93313</span>
        </Label>
        <Sort/>
      </Header>
    </SearchResultsPage>
  );
};

export default SearchResults;
