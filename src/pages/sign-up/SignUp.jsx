import React from 'react';
import { SignUpPage, Wrapper } from './style';
import Form from '../../components/form';

const SignUp = () => {
  const inputs = ['email', 'name', 'password'];
  const action = 'signup'
  return (
    <SignUpPage>
      <Wrapper>
        <h2>Sign up</h2>
        <Form inputs={inputs} btnText='Sign up' action={action}/>
      </Wrapper>
    </SignUpPage>
  );
};

export default SignUp;
