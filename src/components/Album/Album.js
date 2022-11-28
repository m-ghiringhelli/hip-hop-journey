import React, { useEffect, useState } from 'react';
import './Album.css';

export default function Album({ className, album }) {

  useEffect(() => {
    album.is_current && console.log(album);
  }, []);

  return (
    <div className='album'>
      <div>
      </div>
      <div className='artist-title'>
        <p>{album.artist}</p>
        <p>{album.album}</p>
      </div>
      <div className='year-location'>
        <p>{album.released}</p>
        <p>{album.location}</p>
      </div>
      {album.is_current && (
        <button>
          farts
        </button>
      )}
    </div>
  );
}
