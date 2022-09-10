import React from 'react';
import { SearchResultsPage, Header, Label, Results } from './style';
import { BiChevronRight } from 'react-icons/bi';
import Sort from '../../components/sort'
import ResultCard from './ResultCard'

const SearchResults = () => {
  return (
    <SearchResultsPage>
      <Header>
        <Label>
          <span>Dentist</span>
          <BiChevronRight />
          <span>93313</span>
        </Label>
        <Sort />
      </Header>
      <Results>
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </Results>
    </SearchResultsPage>
  );
};

export default SearchResults;
