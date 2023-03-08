import React, { useState } from 'react';
import { signUp, signIn } from '../../services/users.js';
import './AuthForm.css';

export default function AuthForm({ setUser, setShow }) {
  const [authType, setAuthType] = useState('signup');
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (authType === 'signup') {
        await signUp(userInfo);
      }
      await signIn(userInfo);
      setUser(userInfo.email);
      setShow(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form 
      className='auth-form'
      onSubmit={handleSubmit}
    >
      <h1>{authType}</h1>
      {errorMessage ? <p>{errorMessage}</p> : (
        <div>
          <label>
          email:
            <input 
              name='email' 
              type='email' 
              placeholder='email'
              onChange={(e) => setUserInfo({
                ...userInfo,
                email: e.target.value
              })}
            />
          </label>
          <label>
          password:
            <input 
              name='password'
              type='password' 
              placeholder='password'
              onChange={(e) => setUserInfo({
                ...userInfo,
                password: e.target.value
              })}
            />
          </label>
          <button>submit</button>
          <div onClick={() => setAuthType(authType === 'signup' ? 'signin' : 'signup')}>
            {
              authType === 'signin'
                ? <p>Need to make an account?</p>
                : <p>Already have an account?</p>
            }
          </div>
        </div>
      )}
    </form>
  );
}
