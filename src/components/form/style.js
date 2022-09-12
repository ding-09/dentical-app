import styled from 'styled-components';

export const StyledForm = styled.form`
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.6rem;
    label {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: capitalize;
    }
    input {
      min-height: 4.5rem;
      padding-left: 1.6rem;
      border: 1px solid var(--grayAccentColor);
      border-radius: 0.5rem;
    }
  }
  /* different margin for the last input of form */
  .input-group:last-of-type {
    margin-bottom: 2.8rem;
  }
  button {
    min-width: 100%;
    min-height: 4.8rem;
    margin-bottom: 1.2rem;
    background-color: var(--secondaryBlue);
    color: #fff;
    letter-spacing: 0.1rem;
    border: none;
    border-radius: 0.5rem;
  }
  p {
    text-align: center;
    a {
      text-decoration: none;
    }
  }
`;
