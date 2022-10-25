import React, { useState, useEffect } from 'react';
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
import { useList } from '../../providers/ListProvider';
import { signOutUser } from '../../utils/user';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();
  const [bookmarks, setBookmarks] = useState([]);

  // if not authorized, route user to signin page
  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, []);

  // fetch bookmarks
  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = async () => {
    const res = await axios.get('http://localhost:8000/bookmarks', {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setBookmarks(res.data);
  };

  const handleSignOut = () => {
    // set user in context to null
    setUser(null);

    // remove user from localStorage
    signOutUser();
  };

  // get list of recently viewd from context
  const { list } = useList();

  return (
    <>
      {user && (
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
            {Object.values(list)
              .slice(0, 2)
              .map((listItem) => (
                <DentistCard listItem={listItem} />
              ))}
          </RecentlyViewed>
          <Bookmarks>
            <SubHeader>
              <h3>Bookmarks</h3>
              <Link to='bookmarks'>View all</Link>
            </SubHeader>
            {bookmarks.slice(0, 2).map((listItem) => (
              <DentistCard listItem={listItem} bookmarked={true} />
            ))}
          </Bookmarks>
          <Reviews>
            <SubHeader>
              <h3>Reviews</h3>
              <Link to='reviews'>View all</Link>
            </SubHeader>
            <h4 className='empty'>There are currently no reviews</h4>
          </Reviews>
        </ProfilePage>
      )}
    </>
  );
};

export default Profile;
