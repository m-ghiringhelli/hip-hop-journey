import React, { useState } from 'react';
import './AuthForm.css';

export default function AuthForm() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
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
    </form>
  );
}
