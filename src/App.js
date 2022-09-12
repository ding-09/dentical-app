import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import SearchResults from './pages/search-results';
import Details from './pages/details'

const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Home /> */}
        {/* <SearchResults/> */}
        <Details/>
      </main>
    </>
  );
};

export default App;
