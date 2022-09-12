import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* COLORS */
    --primaryBlue: hsla(235, 86%, 62%, 1);
    --secondaryBlue: hsla(235, 60%, 54%, 1);
    --textColor: hsla(264, 7%, 29%, 1);
    --secondaryTextColor: hsla(264, 7%, 29%, 0.6);
    --grayAccentColor: hsla(264, 7%, 20%, 0.2);

    /* TYPOGRAPHY */
    --labelFontSize: 1.4rem;
    --labelLine: 2rem;
    --labelSpacing: 0.1rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Noto Sans', sans-serif;
    color: var(--textColor);
  }
  h1 {
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 2.8rem;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.4rem;
    letter-spacing: 0.15rem;
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.1rem;
  }
  a {
    color: var(--secondaryBlue);
  }
`;
