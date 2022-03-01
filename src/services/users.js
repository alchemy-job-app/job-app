import { client } from './client';

export async function getUser() {
  const session = client.auth.session();
  if (!session) {
    return null;
  }
  const { data, error } = await client
    .from('profiles')
    .select('*')
    .match({ id: session.user.id })
    .single();
  if (error) {
    throw error;
  }
  if (data) {
    return { ...session.user, ...data };
  }
}

export async function signUpUser(username, email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  const resp = await client
    .from('profiles')
    .insert({ id: user.id, username })
    .single();
  if (resp.error) {
    throw error;
  }
  return { ...user, ...resp.data };
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });

  if (error) {
    throw error;
  }
  const resp = await client
    .from('profiles')
    .select()
    .match({ id: user.id })
    .single();

  return { ...user, ...resp.data };
}

export async function signOutUser() {
  return client.auth.signOut();
}
