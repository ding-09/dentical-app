import React from 'react';
import { SignInPage, Wrapper } from './style';
import Form from '../../components/form'

const SignIn = () => {
  const inputs = ['email', 'password'];

  return (
    <SignInPage>
      <Wrapper>
        <h2>Sign in</h2>
        <Form inputs={inputs} btnText='Sign in'/>
      </Wrapper>
    </SignInPage>
  );
};

export default SignIn;
