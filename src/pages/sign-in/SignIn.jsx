import React from 'react';
import { SignInPage, Wrapper } from './style';
import Form from '../../components/form'

const SignIn = () => {
  return (
    <SignInPage>
      <Wrapper>
        <h2>Sign in</h2>
        <Form/>
      </Wrapper>
    </SignInPage>
  );
};

export default SignIn;
