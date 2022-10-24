import styled from 'styled-components';

export const DetailsPage = styled.section`
  > section {
    padding: 1.6rem 2rem;
  }
`;

export const Header = styled.header`
  margin-top: 2.4rem;
  padding: 0 1.6rem 1.6rem;
  border-bottom: 1px solid var(--grayAccentColor);
  h2 {
    margin-bottom: 0.4rem;
  }
  .container {
    display: flex;
    align-items: center;
    font-size: var(--labelFontSize);
    line-height: var(--labelLine);
  }
  .rating-reviews {
    display: flex;
    align-items: center;
    color: var(--secondaryTextColor);
    margin-bottom: 0.4rem;
  }
  .bookmark-input-group {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.1rem;
    margin-left: -0.2rem;
    cursor: pointer;
    input {
      opacity: 0;
    }
    .bookmark-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 1.6rem;
        color: var(--secondaryBlue);
        margin-right: 0.2rem;
      }
    }
    label {
      color: var(--textColor);
      opacity: 0.8;
    }
  }
  .phone {
    font-size: 1.3rem;
    color: var(--secondaryTextColor);
  }
`;

export const LocationAndHours = styled.section`
  border-bottom: 1px solid var(--grayAccentColor);
  h3 {
    margin-bottom: 1.2rem;
  }
  .map {
    margin-bottom: 1.6rem;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 2.5rem;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
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
      margin: 0.4rem 0;
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
    .date {
      font-size: 1.2rem;
      color: var(--secondaryTextColor);
    }
  }
`;
