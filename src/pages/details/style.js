import styled from 'styled-components';

export const DetailsPage = styled.section`
  > section {
    padding: 1.6rem 2rem;
  }
`;

export const Header = styled.header`
  margin-top: 2.8rem;
  padding: 0 1.6rem 2rem;
  border-bottom: 1px solid var(--grayAccentColor);
  h2 {
    margin-bottom: 0.4rem;
  }
  .rating-reviews {
    display: flex;
    align-items: center;
    font-size: var(--labelFontSize);
    font-weight: 500;
    line-height: var(--labelLine);
    color: var(--secondaryTextColor);
  }
`;

export const LocationAndHours = styled.section`
  border-bottom: 1px solid var(--grayAccentColor);
  h3 {
    margin-bottom: 1.2rem;
  }
  .map {
    min-width: 100%;
    height: 25rem;
    border: 1px solid lightgray;
    margin-bottom: 0.8rem;
  }
  p {
    font-weight: 500;
  }
`;

export const RatingsAndReviews = styled.section`
  h3 {
    margin-bottom: 0.8rem;
  }
  .rating {
    display: flex;
    flex-direction: column;
    .stars {
      display: flex;
    }
  }
  .overall-summary {
    border-bottom: 1px solid var(--grayAccentColor);
    padding-bottom: 2rem;
  }
  #reviews {
    padding-top: 2rem;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        font-size: var(--labelFontSize);
        line-height: var(--labelLine);
      }
    }
  }
`;

export const StyledReviewCard = styled.article`
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--grayAccentColor);
  .rating-date {
    display: flex;
    > div {
      margin-left: 0;
      margin-bottom: 0.8rem;
    }
  }
`;
