import React, { useEffect, useState } from 'react';
import Album from '../Album/Album';
import styles from './Body.css';
import './Body.css';
import { getAlbums, getId } from '../../services/albums';

export default function Body() {
  const [previousAlbum, setPreviousAlbum] = useState({});
  const [currentAlbum, setCurrentAlbum] = useState({});
  const [nextAlbum, setNextAlbum] = useState({});
  const [albums, setAlbums] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlbums();
      setAlbums(data);
    };
    fetchData();
    const fetchId = async () => {
      const data = await getId();
      setId(data);
    };
    fetchId();
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
      <img src={'./images/left-button.png'} />
      <Album album={previousAlbum} />
      <Album className={styles.currentAlbum} album={currentAlbum} />
      <Album album={nextAlbum} />
      <img src={'./images/right-button.png'} />
    </div>
  );
}
