import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import Header from './components/header';

// pages
import Home from './pages/home';
import SearchResults from './pages/search-results';
import Details from './pages/details';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Profile from './pages/profile';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='results' element={<SearchResults />} />
          <Route path='details' element={<Details />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
