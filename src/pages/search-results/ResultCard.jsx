import React from 'react';
import { StyledResultCard } from './style';
import StarRating from '../../components/star-rating';

const ResultCard = ({ searchResult }) => {
  const { title, phone, address } = searchResult;
  return (
    <StyledResultCard>
      <h2>{title}</h2>
      <div className='rating-reviews'>
        <span>4.6</span>
        <StarRating />
        <span>(109)</span>
      </div>
      <p className='address'>{address.street}</p>
      <p className='phone'>{phone}</p>
    </StyledResultCard>
  );
};

export default ResultCard;
