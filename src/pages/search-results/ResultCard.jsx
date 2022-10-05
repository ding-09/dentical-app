import React from 'react';
import { Link } from 'react-router-dom';
import { StyledResultCard } from './style';
import StarRating from '../../components/star-rating';

const ResultCard = ({ searchResult }) => {
  const { title, phone, address, _id } = searchResult;

  return (
    <StyledResultCard>
      <Link to={`/dentist/${_id}`}>
        <div className='container'>
          <h2>{title}</h2>
          <div className='rating-reviews'>
            <span>4.6</span>
            <StarRating />
            <span>(109)</span>
          </div>
          <p className='address'>{address.street}</p>
          <p className='phone'>{phone}</p>
        </div>
      </Link>
    </StyledResultCard>
  );
};

export default ResultCard;
