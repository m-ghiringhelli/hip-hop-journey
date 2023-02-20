import React, { useState } from 'react';
import { signUp, signIn } from '../../services/user.js';
import './AuthForm.css';

export default function AuthForm() {
  const [authType, setAuthType] = useState('signup');
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    authType === 'signup' && signUp(userInfo);
    authType === 'signin' && signIn(userInfo);
  };

  return (
    <form 
      className='auth-form'
      onSubmit={handleSubmit}
    >
      <h1>{authType}</h1>
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
    </form>
  );
}
