import React, { useState } from 'react';

export default function Album() {
  const [album, setAlbum] = useState({
    artist: 'Some Artist',
    title: 'Album title',
    released: '5/7/1992',
  });

  return (
    <div>
      <p>{album.artist}</p>
      <p>{album.title}</p>
      <p>{album.released}</p>
    </div>
  );
}
