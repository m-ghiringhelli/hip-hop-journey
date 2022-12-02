import React from 'react';
import './AuthForm.css';

export default function AuthForm() {
  return (
    <form className='auth-form'>
      <label>
        email:
        <input 
          name='email' 
          type='email' 
          placeholder='email' />
      </label>
      <label>
        password:
        <input 
          name='password'
          type='password' 
          placeholder='password'
        />
      </label>
      <button>submit</button>
    </form>
  );
}
