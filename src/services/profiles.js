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
  console.log('data', data);
  return data;
}

export async function getInterview(user_id) {
  const request = await client.from('profiles').select('*').match({ user_id });
  return parseData(request);
}

export async function createInterview(interview) {
  const request = await client.from('profiles').insert({
    interview_q: interview.interview_q,
    user_id: client.auth.user().id,
  });
  return parseData(request);
}

export async function deleteInterview(id) {
  const request = await client.from('profiles').delete().match({ id }).single();
  return parseData(request);
}
