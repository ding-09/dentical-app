import React from 'react';
import { StyledDentistCard } from './style';
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md';

const DentistCard = ({ bookmarked = false }) => {
  return (
    <StyledDentistCard>
      <div className='dentist-info'>
        <h4>East Town Family Dentistry</h4>
        <p>2010 Niles Street</p>
      </div>
      <div className='icon-container'>
        {bookmarked ? <MdBookmark /> : <MdBookmarkBorder />}
      </div>
    </StyledDentistCard>
  );
};

export default DentistCard;
