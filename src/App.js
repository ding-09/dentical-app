import React from 'react';
import Header from './components/header';
import Home from './pages/home';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
};

export default App;
