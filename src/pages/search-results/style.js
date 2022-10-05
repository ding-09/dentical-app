import styled from 'styled-components';

export const SearchResultsPage = styled.section``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 1.6rem 0.8rem;
`;

export const Label = styled.p`
  display: flex;
  color: var(--textColor);
  opacity: 0.8;
  svg {
    font-size: 1.6rem;
    padding-top: 0.1rem;
  }
`;

export const Results = styled.section``;

export const StyledResultCard = styled.article`
  padding: 1.6rem;
  border-bottom: 1px solid hsla(264, 7%, 20%, 0.2);
  .rating-reviews {
    display: flex;
    align-items: center;

  }
  .rating-reviews,
  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--secondaryTextColor);
    margin-bottom: 0.4rem;
  }
`;
