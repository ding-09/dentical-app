import React, { useEffect } from 'react';
import {
  ProfilePage,
  Header,
  RecentlyViewed,
  Bookmarks,
  Reviews,
  SubHeader,
} from './style';
import { Link, useNavigate } from 'react-router-dom';
import DentistCard from './DentistCard';
import { useAuth } from '../../providers/AuthProvider';
import { signOutUser } from '../../utils/user';

const Profile = () => {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();
  // if not authorized, route user to signin page
  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, []);

  const handleSignOut = () => {
    // set user in context to null
    setUser(null);

    // remove user from localStorage
    signOutUser();
  };

  return (
    <ProfilePage>
      <Header>
        <h2>Hi {user.name}</h2>
        <Link to='/' onClick={handleSignOut}>
          Sign out
        </Link>
      </Header>
      <RecentlyViewed>
        <SubHeader>
          <h3>Recently viewed</h3>
          <Link to='recently-viewed'>View all</Link>
        </SubHeader>
        <DentistCard />
        <DentistCard />
      </RecentlyViewed>
      <Bookmarks>
        <SubHeader>
          <h3>Bookmarks</h3>
          <Link to='bookmarks'>View all</Link>
        </SubHeader>
        <DentistCard bookmarked={true} />
        <DentistCard bookmarked={true} />
      </Bookmarks>
      <Reviews>
        <SubHeader>
          <h3>Reviews</h3>
          <Link to='reviews'>View all</Link>
        </SubHeader>
        <h4 className='empty'>There are currently no reviews</h4>
      </Reviews>
    </ProfilePage>
  );
};

export default Profile;
