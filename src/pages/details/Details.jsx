import React from 'react';
import {
  DetailsPage,
  Header,
  LocationAndHours,
  RatingsAndReviews,
} from './style';
import StarRating from '../../components/star-rating';
import Sort from '../../components/sort';
import ReviewCard from './ReviewCard'

const Details = () => {
  return (
    <DetailsPage>
      <Header>
        <h2>East Town Family Dentistry</h2>
        <p className='rating-reviews'>
          <span>4.6</span>
          <StarRating />
          <a href='#reviews'>109 reviews</a>
        </p>
      </Header>
      <LocationAndHours>
        <h3>Location and hours</h3>
        <div className='map'></div>
        <p>
          2010 Niles Street Bakersfield, <br />
          CA 93305
        </p>
      </LocationAndHours>
      <RatingsAndReviews>
        <h3>Ratings and reviews</h3>
        <section className='overall-summary'>
          <span>Overall rating</span>
          <div className='rating'>
            <span className='stars'>
              4.6 <StarRating />
            </span>
            <span className='review-count'>109 reviews</span>
          </div>
        </section>
        <section id='reviews'>
          <header>
            <h4>Reviews</h4>
            <Sort />
          </header>
          <section className='review-cards'>
            <ReviewCard />
            <ReviewCard />
          </section>
        </section>
      </RatingsAndReviews>
    </DetailsPage>
  );
};

export default Details;
