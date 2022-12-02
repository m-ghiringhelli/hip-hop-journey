import React from 'react';
import './Header.css';

export default function Header({ show, setShow }) {
  return (
    <header>
      <p>hip-hop journey</p>
      <button onClick={() => setShow(true)}>
        show modal
      </button>
    </header>
  );
}
