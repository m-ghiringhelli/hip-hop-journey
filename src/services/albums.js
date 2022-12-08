/* tslint:disable */
import { client, checkError } from './client';
// will have to change all this to hit my own backend
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
  return albums;
}

export async function updateCurrent(id, type) {
  let response1;
  let response2;
  response1 = await client.from('albums').update({ is_current: false }).match({ id });
  if (type === 'next') {
    response2 = await client.from('albums').update({ is_current: true }).match({ id: (id + 1) });
  }
  if (type === 'prev') {
    response2 = await client.from('albums').update({ is_current: true }).match({ id: (id - 1) });
  }
  return [response1, response2];
}