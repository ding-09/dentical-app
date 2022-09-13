import React from 'react';
import { StyledForm } from './style';

const Form = ({ inputs, btnText, action }) => {
  return (
    <StyledForm action={`http://localhost:8000/${action}`} method='post'>
      {inputs.map((input) => (
        <div className='input-group' key={input}>
          <label htmlFor={input}>{input}</label>
          <input type={input} name={input} id={input} required />
        </div>
      ))}
      <button>
        <span>{btnText}</span>
      </button>
      {btnText.toLowerCase() === 'sign in' ? (
        <p>
          <a href='signup'>Sign up</a> for an account{' '}
        </p>
      ) : (
        <p>
          <a href='signin'>Sign in</a> to your account
        </p>
      )}
    </StyledForm>
  );
};

export default Form;
