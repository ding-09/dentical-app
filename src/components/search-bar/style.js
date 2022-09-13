import styled from 'styled-components';

export const StyledSearchBar = styled.form`
  position: relative;
  min-height: 5rem;
  margin: 2.4rem 0 1.2rem;
  max-width: 85%;
  input {
    border: 1px solid var(--grayAccentColor);
    border-radius: 1rem;
    min-width: 100%;
    height: 5rem;
    padding-left: 4rem;
    font-size: var(--labelFontSize);
    line-height: var(--labelLine);
    &::placeholder {
      color: var(--secondaryTextColor);
    }
    &:focus {
      outline: 1px solid var(--textColor);
      border: none;
    }
  }
  button {
    background: none;
    border: none;
    position: absolute;
    left: 1.6rem;
    top: 50%;
    transform: translateY(-42%);
    font-size: 1.6rem;
    path {
      stroke: var(--textColor);
    }
  }
`;
