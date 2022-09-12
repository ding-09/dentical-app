import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import SearchResults from './pages/search-results';
import Details from './pages/details';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Home /> */}
        {/* <SearchResults/> */}
        {/* <Details/> */}
        {/* <SignIn/> */}
        <SignUp />
      </main>
    </>
  );
};

export default App;
