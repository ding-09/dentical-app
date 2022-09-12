import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
  min-height: 6rem;
  background: var(--primaryBlue);
  > * {
    color: #fff;
  }
  button {
    background: none;
    border: none;
  }
  svg {
    font-size: 2rem;
  }
  a {
    text-decoration: none;
  }
`