import styled from 'styled-components';

export const HomePage = styled.section`
  padding: 4rem 2.4rem;
  background-color: #d8e8f3;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  background: url(${(props) => props.bgImg}) no-repeat;
  background-size: contain;
  background-position: center 85%;
`;

export const Wrapper = styled.div`
  p {
    padding-left: 0.5rem;
    color: var(--secondaryTextColor);
    a {
      font-weight: 500;
    }
  }
`;

export const Headline = styled.h1`
  line-height: 3.2rem;
`;
