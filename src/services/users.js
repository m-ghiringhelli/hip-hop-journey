export const signUp = async ({ email, password }) => {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });
  const data = await resp.json();
  if (!resp.ok) {
    console.log('farts', data);
    throw new Error(data.message);
  } else {
    return data;
  }
};

export const signIn = async ({ email, password }) => {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) throw new Error('trouble signing in');

  return resp.json();
};