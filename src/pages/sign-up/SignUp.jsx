import React from 'react';
import { SignUpPage, Wrapper } from './style';
import Form from '../../components/form';

const SignUp = () => {
  const inputs = ['email', 'full name', 'password'];

  return (
    <SignUpPage>
      <Wrapper>
        <h2>Sign up</h2>
        <Form inputs={inputs} btnText='Sign in' />
      </Wrapper>
    </SignUpPage>
  );
};

export default SignUp;
