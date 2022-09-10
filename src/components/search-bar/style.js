import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  position: relative;
  min-height: 5rem;
  border-radius: 0.2rem;
  margin: 2.4rem 0 1.2rem;
  input {
    outline: 1px solid var(--secondaryTextColor);
    border: none;
    border-radius: 0.4rem;
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
  svg {
    position: absolute;
    left: 1.6rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.6rem;
    path {
      stroke: var(--textColor);
    }
  }
`;
