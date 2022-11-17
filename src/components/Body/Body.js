import React, { useEffect, useState } from 'react';
import { getAlbums, getId, updateCurrent } from '../../services/albums';
import Album from '../Album/Album';
import './Body.css';

export default function Body() {
  let [id, setId] = useState();
  let [albums, setAlbums] = useState([]);
  let [loading, setLoading] = useState(false);

  const fetchId = async () => {
    const data = await getId();
    setId(data);
  };

  useEffect(() => {
    fetchId();
  }, []);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      const data = await getAlbums(id);
      setAlbums(data);
      setLoading(false);
    };
    fetchAlbums();
  }, [id]);

  async function nextAlbum(type) {
    setLoading(true);
    await updateCurrent(id, type);
    fetchId();
    // setLoading(false);
  }

  if (loading) return <p>loading...</p>;

  return (
    <div className='albumContainer'>
      <img src={'./images/left-button.png'} onClick={() => nextAlbum('prev')} />
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
      <img src={'./images/right-button.png'} onClick={() => nextAlbum('next')} />
    </div>
  );
}
