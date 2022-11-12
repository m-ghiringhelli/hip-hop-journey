import React, { useEffect, useState } from 'react';
import Album from '../Album/Album';
import styles from './Body.css';
import './Body.css';
import { getAlbums } from '../../services/albums';

export default function Body() {
  const [previousAlbum, setPreviousAlbum] = useState({
    title: 'Previous Title',
    artist: 'Previous Artist',
    released: 'Previous Released',
    location: 'Previous Location'
  });
  const [currentAlbum, setCurrentAlbum] = useState({
    title: 'Current Title',
    artist: 'Current Artist',
    released: 'Current Released',
    location: 'Current Location'
  });
  const [nextAlbum, setNextAlbum] = useState({
    title: 'Next Title',
    artist: 'Next Artist',
    released: 'Next Released',
    location: 'Next Location'
  });
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlbums();
      setAlbums(data);
    };
    fetchData();
  }, []);

  return (
    <div className='albumContainer'>
      <Album album={previousAlbum} />
      <Album className={styles.currentAlbum} album={currentAlbum} />
      <Album album={nextAlbum} />
    </div>
  );
}
