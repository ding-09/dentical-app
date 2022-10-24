import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLoadScript } from '@react-google-maps/api';
// components
import Header from './components/header';

// pages
import Home from './pages/home';
import SearchResults from './pages/search-results';
import Details from './pages/details';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Profile from './pages/profile';

// context
import { useAuth } from './providers/AuthProvider';
import { ListProvider } from './providers/ListProvider';

// const libraries = ['places'];
const App = () => {
  // Google Maps API script loader
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_API_KEY,
  //   libraries,
  // });

  // use authContect
  const auth = useAuth();
  return (
    <ListProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='results' element={<SearchResults />} />
            <Route path='dentists' element={<SearchResults />} />
            <Route path='dentist/:id' element={<Details />} />
            <Route
              path='signin'
              element={auth.user ? <Profile /> : <SignIn />}
            />
            <Route path='signup' element={<SignUp />} />
            <Route
              path='profile'
              element={ <Profile /> }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </ListProvider>
  );
};

export default App;
