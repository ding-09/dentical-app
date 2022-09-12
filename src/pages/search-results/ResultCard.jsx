import React from 'react';
import { Article } from './style';
import StarRating from '../../components/star-rating'

const ResultCard = () => {
  return (
    <Article>
      <h2>East Town Family Dentistry</h2>
      <div className='rating-reviews'>
        <span>4.6</span>
        <StarRating/>
        <span>(109)</span>
      </div>
      <p className='address'>2010 Niles Street</p>
      <p className='phone'>(661) 323-1927</p>
    </Article>
  );
};

export default ResultCard;
