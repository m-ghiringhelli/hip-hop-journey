import React, { useState } from 'react';
import Album from '../Album/Album';

export default function Body() {
  const [currentAlbum, setCurrentAlbum] = useState({
    title: 'Current Title',
    artist: 'Current Artist',
    released: 'Current Released'
  });

  return (
    <div>
      <Album album={currentAlbum} />
    </div>
  );
}
