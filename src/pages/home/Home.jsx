import React from 'react';
import { HomePage, HeroSection, Wrapper, Headline } from './style';
import heroSvg from '../../assets/hero-3.svg';
import SearchBar from '../../components/search-bar'

const Home = () => {
  return (
    <HomePage>
      <HeroSection bgImg={heroSvg}>
        <Wrapper>
          <Headline>
            Find dentists in Bakersfield, CA who accept Medi-Cal/Denti-Cal
            insurance
          </Headline>
          <SearchBar/>
          <p>Or <a href="dentists">view all</a> participating dentists</p>
        </Wrapper>
      </HeroSection>
    </HomePage>
  );
};

export default Home;
