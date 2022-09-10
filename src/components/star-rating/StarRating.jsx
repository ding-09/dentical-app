import React from 'react'
import {StyledStarRating} from './style'
import { FaStar, FaStarHalf } from 'react-icons/fa';

const StarRating = () => {
  return (
    <StyledStarRating>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalf />
    </StyledStarRating>
  );
}

export default StarRating
