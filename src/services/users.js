import { client } from './client';
export function getUser() {
  return client.auth.session();
}

export function getSession() {
  return client.auth.session();
}

export async function signUpUser(email, password) {
  console.log('email', email);
  console.log('password', password);
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) throw error;
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) throw error;
  return user;
}

export async function signOutUser() {
  return client.auth.signOut();
}
