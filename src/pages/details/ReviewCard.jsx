import React from 'react';
import { StyledReviewCard } from './style';
import StarRating from '../../components/star-rating';

const ReviewCard = () => {
  return (
    <StyledReviewCard>
      <div className='rating-date'>
        <StarRating />
        <span className='date'>09/01/22</span>
      </div>
      <p className='review-desc'>
        The most gentle dentist I’ve ever met! Very friendly staff as well.
        Overall a very pleasant experience.
      </p>
    </StyledReviewCard>
  );
};

export default ReviewCard;
