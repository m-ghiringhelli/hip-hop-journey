import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Auth.css';

export default function Auth({ show, setShow }) {
  if (!show) return null;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Modal Title</h4>
        </div>
        <div className='modal-body'>
          <AuthForm />
        </div>
        <div className='modal-footer'>
          <button 
            className='close-button'
            onClick={() => setShow(false)}>close</button>
        </div>
      </div>
    </div>
  );
}
