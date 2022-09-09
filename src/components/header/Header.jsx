import React from 'react';

// styles
import { StyledHeader } from './style';
// icons
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <StyledHeader>
      <button>
        <FiMenu />
      </button>
      <h1>Dentical</h1>
      <a href='/signin'>
        <FaUserCircle />
      </a>
    </StyledHeader>
  );
};

export default Header;
