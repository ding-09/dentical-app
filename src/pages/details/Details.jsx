import React, { useState, useEffect } from 'react';
import {
  DetailsPage,
  Header,
  LocationAndHours,
  RatingsAndReviews,
} from './style';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarRating from '../../components/star-rating';
import Sort from '../../components/sort';
import ReviewCard from './ReviewCard';
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md';
import { useList } from '../../providers/ListProvider';

const Details = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(true);

  // manage bookmark state
  const [bookmarked, setBookmarked] = useState(false);

  // fetch data based on id from params
  let { id } = useParams();

  // use context
  const { addToList } = useList();

  const getData = async () => {
    const result = await axios.get(`http://localhost:8000/dentist/${id}`);
    setSearchResult(result.data.dentist);
    setLoading(false);
  };

  // fetch details on page load
  useEffect(() => {
    getData();
  }, []);

  // store data after user leaves page
  useEffect(() => {
    return () => {
      if (!loading) {
        addToList(searchResult);
      }
    };
  }, [loading]);

  // store bookmark after user leaves page
  useEffect(() => {
    return () => {
      if (!loading) {
        console.log('storing bookmark...');
        storeBookmark(
          searchResult._id,
          searchResult.title,
          searchResult.address
        );
      }
    };
  }, [bookmarked]);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const storeBookmark = async (id, title, address) => {
    // make a post request to backend
    const res = await axios.post('http://localhost:8000/bookmark', {
      id,
      title,
      address,
    });
    return res;
    // to store bookmark in user
    // get current user token
  };

  return searchResult ? (
    <DetailsPage>
      <Header>
        <h2>{searchResult.title}</h2>
        <div className='container'>
          <div className='rating-reviews'>
            <span>4.6</span>
            <StarRating />
            <a href='#reviews'>109 reviews</a>
          </div>
          {/* <button className='bookmark' onClick={toggleBookmark}>
            {bookmarked ? <MdBookmark /> : <MdBookmarkBorder />}
            <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button> */}
          <div className='bookmark-input'>
            <input
              type='checkbox'
              name='bookmark'
              id='bookmark'
              onChange={toggleBookmark}
            />
            <label htmlFor='bookmark'>Bookmark</label>
          </div>
        </div>
        <span className='phone'>{searchResult.phone}</span>
      </Header>
      <LocationAndHours>
        <h3>Location and hours</h3>
        <div className='map'>
          <iframe
            loading='lazy'
            frameBorder='0'
            style={{ border: '0' }}
            referrerPolicy='no-referrer-when-downgrade'
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&q=${searchResult.address.street}, ${searchResult.address.city}`}
            allowFullScreen
          ></iframe>
        </div>
        <p>
          {searchResult.address.street} <br />
          {searchResult.address.state} {searchResult.address.zipcode}
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
  ) : (
    <></>
  );
};

export default Details;
