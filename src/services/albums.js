/* tslint:disable */
import { client, checkError } from './client';

export async function getId() {
  const { data } = await client.from('albums').select('id').match({ is_current: true });
  const { id } = data[0];
  return id;
}

export async function getById(id) {
  const response = await client.from('albums').select('*').match({ id });
  return checkError(response);
}

export async function getAlbums(id) {
  let albums = [];
  for (let i = (id - 1); i <= (id + 1); i++) {
    const response = await getById(i);
    albums.push(response[0]);
  }
  console.log(albums);
  return albums;
}

// export async function getAlbums() {
//   let albums = [];
//   const currentResponse = await client.from('albums').select('*').match({ is_current: true });
//   const currentAlbum = currentResponse.data[0];
//   const prevId = currentAlbum.id - 1;
//   const nextId = currentAlbum.id + 1;
//   const previousAlbum = await getById(prevId);
//   const nextAlbum = await getById(nextId);
//   albums.push(previousAlbum[0]);
//   albums.push(currentAlbum);
//   albums.push(nextAlbum[0]);
//   return albums;
// }

