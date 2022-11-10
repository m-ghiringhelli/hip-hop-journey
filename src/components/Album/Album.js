import React, { useState } from 'react';
import './Album.css';

export default function Album({ album }) {

  return (
    <div className="album">
      <p>{album.artist}</p>
      <p>{album.title}</p>
      <p>{album.released}</p>
    </div>
  );
}
