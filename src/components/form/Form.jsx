import React, { useState, useEffect } from 'react';
import { StyledForm } from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../providers/AuthProvider';
import { signInUser } from '../../utils/user';

const Form = ({ inputs, btnText, action }) => {
  let navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`http://localhost:8000/${action}`, values);
      // update context
      setUser(res.data);

      // update localStorage
      signInUser(res.data.name, res.data.token);

      // navigate to profile page
      navigate('/profile');
    } catch (e) {
      console.log(e);
    }
  };

  // dynamically initialize values with input fields name
  const [initialVals, setInitialVals] = useState({});
  useEffect(() => {
    let tempObj = {};
    inputs.forEach((input) => {
      tempObj[input] = '';
    });
    setInitialVals(tempObj);
  }, []);

  const [values, handleChange] = useForm(initialVals);

  return (
    <StyledForm onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <div className='input-group' key={input}>
          <label htmlFor={input}>{input}</label>
          <input
            type={input}
            name={input}
            id={input}
            required
            onChange={handleChange}
          />
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
