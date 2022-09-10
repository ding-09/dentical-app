import styled from 'styled-components';

export const HomePage = styled.section`
  padding: 2.8rem 1.6rem;
  background-color: #d8e8f3;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url(${(props) => props.bgImg}) no-repeat;
  background-size: contain;
  background-position: center 50%;
`;

export const Wrapper = styled.div`
  p {
    color: var(--secondaryTextColor);
    a {
      font-weight: 500;
    }
  }
`;

export const Headline = styled.h1`

`;
