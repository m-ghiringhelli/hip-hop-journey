import React, { useEffect, useState } from 'react';
import Album from '../Album/Album';
import styles from './Body.css';
import './Body.css';
import { getAlbums } from '../../services/albums';

export default function Body() {
  const [previousAlbum, setPreviousAlbum] = useState({});
  const [currentAlbum, setCurrentAlbum] = useState({});
  const [nextAlbum, setNextAlbum] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlbums();
      setAlbums(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (albums.length === 3) {
      albums && setPreviousAlbum(albums[0]);
      albums && setCurrentAlbum(albums[1]);
      albums && setNextAlbum(albums[2]);
    }
  }, [albums]);

  return (
    <div className='albumContainer'>
      <Album album={previousAlbum} />
      <Album className={styles.currentAlbum} album={currentAlbum} />
      <Album album={nextAlbum} />
    </div>
  );
}
