import React, { useState } from 'react';
import { signUp } from '../../services/user.js';
import './AuthForm.css';

export default function AuthForm() {
  const [authType, setAuthType] = useState('signup');
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(userInfo);
  };

  return (
    <form 
      className='auth-form'
      onSubmit={handleSubmit}
    >
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
          authType === 'signup'
            ? <p>Need to make an account?</p>
            : <p>Already have an account?</p>
        }
      </div>
    </form>
  );
}
