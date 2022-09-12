import React from 'react';
import { StyledForm } from './style';

const Form = () => {
  return (
    <StyledForm>
      <div className='input-group'>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
      </div>
      <div className='input-group'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
      </div>
      <button>
        <span>Sign In</span>
      </button>
      <p>
        <a href='signup'>Sign up</a> for an account
      </p>
    </StyledForm>
  );
};

export default Form;
