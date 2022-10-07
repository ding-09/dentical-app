import React from 'react';
import { Link } from 'react-router-dom';

// styles
import { StyledHeader } from './style';

// icons
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

import { useAuth } from '../../providers/AuthProvider';

const Header = () => {
  const { user } = useAuth();
  return (
    <StyledHeader>
      <button>
        <FiMenu />
      </button>
      <Link to='/'>
        <h1>Dentical</h1>
      </Link>
      <Link to={user ? 'profile' : 'signin'}>
        <FaUserCircle />
      </Link>
    </StyledHeader>
  );
};

export default Header;
