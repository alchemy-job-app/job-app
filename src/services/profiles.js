import { client, parseData } from './client';

export async function getProfile() {
  const session = client.auth.session();
  if (!session) {
    return null;
  }
  const { data, error } = await client
    .from('profiles')
    .select('*')
    .match({ user_id: session.user.id })
    .single();
  if (error) {
    throw error;
  }
  return data;
  //   if (data) {
  //     return { ...session.user, ...data };
  //   }
}
