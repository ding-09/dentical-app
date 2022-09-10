import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import SearchResults from './pages/search-results';

const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Home /> */}
        <SearchResults/>
      </main>
    </>
  );
};

export default App;
