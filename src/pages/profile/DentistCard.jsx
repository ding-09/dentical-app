import React from 'react';
import { StyledDentistCard } from './style';
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md';

const DentistCard = ({ listItem, bookmarked = false }) => {
  const { title, address } = listItem;

  return (
    <StyledDentistCard>
      <div className='dentist-info'>
        <h4>{title}</h4>
        <p>{address.street}</p>
      </div>
      <div className='icon-container'>
        {bookmarked ? <MdBookmark /> : <MdBookmarkBorder />}
      </div>
    </StyledDentistCard>
  );
};

export default DentistCard;
