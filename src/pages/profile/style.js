import styled from 'styled-components';

export const ProfilePage = styled.section`
  > section {
    padding: 2rem 2.4rem 2.8rem;
    border-bottom: 1px solid var(--grayAccentColor);
  }
`;

export const Header = styled.header`
  padding: 2.8rem 2.4rem 2rem;
  border-bottom: 1px solid var(--grayAccentColor);
`;

export const SubHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
  a {
    font-size: 1.2rem;
    color: var(--secondaryTextColor);
  }
`;

export const RecentlyViewed = styled.section``;

export const Bookmarks = styled.section``;

export const Reviews = styled.section``;

export const StyledDentistCard = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
  padding: 1.6rem 2rem;
  border: 1px solid var(--grayAccentColor);
  border-radius: 0.5rem;
  p {
    color: var(--secondaryTextColor);
  }
  svg {
    font-size: 2.4rem;
    color: var(--secondaryBlue);
  }
`;
