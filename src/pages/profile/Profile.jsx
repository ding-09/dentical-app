import React from 'react';
import {
  ProfilePage,
  Header,
  RecentlyViewed,
  Bookmarks,
  Reviews,
  SubHeader,
} from './style';
import { Link } from 'react-router-dom';
import DentistCard from './DentistCard';

const Profile = () => {
  return (
    <ProfilePage>
      <Header>
        <h2>Hi Tiffany D.</h2>
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
        <h4 className="empty">There are currently no reviews</h4>
      </Reviews>
    </ProfilePage>
  );
};

export default Profile;
