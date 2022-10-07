import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { SearchResultsPage, Header, Label, Results } from './style';
import { BiChevronRight } from 'react-icons/bi';
import Sort from '../../components/sort';
import ResultCard from './ResultCard';

const SearchResults = () => {
  // state to hold search results
  const [searchResults, setSearchResults] = useState(null);

  // fetch dentists data from x zipcode
  // get zipcode from params
  let [searchParams, setSearchParams] = useSearchParams();
  let zipcode = searchParams.get('zipcode');
  const baseUrl = 'http://localhost:8000/dentists';
  let url = zipcode === null ? baseUrl : `${baseUrl}?zipcode=${zipcode}`;

  // fetch function
  const getResults = async () => {
    const results = await axios.get(url);
    setSearchResults(results.data);
  };

  // fetch on initial page load
  useEffect(() => {
    getResults();
  }, []);

  // conditionally render content
  // depending on if searchResults is true or false
  return searchResults ? (
    <SearchResultsPage>
      <Header>
        <Label>
          <span>Dentists</span>
          <BiChevronRight />
          <span>{zipcode ? zipcode : 'All'}</span>
        </Label>
        <Sort />
      </Header>
      <Results>
        {/* map over data from search results */}
        {searchResults.map((searchResult) => (
          <ResultCard searchResult={searchResult} key={uuidv4()} />
        ))}
      </Results>
    </SearchResultsPage>
  ) : (
    <></>
  );
};

export default SearchResults;
