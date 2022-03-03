import { client, parseData } from './client';

export async function getResume(user_id) {
  const request = await client.from('profiles').select('*').match({ user_id });
  return parseData(request);
}

export async function uploadResume(id, file) {
  const ext = file.name.split('.').pop();
  await client.storage
    .from('resume-image')
    .upload(`resume/${id}`, file, { upsert: true });
  console.log('file', file);
  const { publicURL } = client.storage
    .from('resume-image')
    .getPublicUrl(`resume/${id}`);
  const resp = await client
    .from('profiles')
    .insert({ resume: publicURL, user_id: client.auth.user().id })
    .eq('id', id)
    .single();
  return parseData(resp);
}
