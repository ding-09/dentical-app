import React from 'react';
import { StyledForm } from './style';

const Form = ({ inputs, btnText }) => {
  return (
    <StyledForm>
      {inputs.map((input) => (
        <div className='input-group'>
          <label htmlFor={input}>{input}</label>
          <input type={input} name={input} id={input} />
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
