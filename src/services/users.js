export const signUp = async ({ email, password }) => {
  console.log(`${process.env.REACT_APP_API_URL}`);
  console.log('in signup', email, password);
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) throw new Error('Invalid username or password');

  return resp.json();
};

export function signIn(user) {
  console.log('signin', user);
}