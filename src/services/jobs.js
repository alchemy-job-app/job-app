import { client, parseData } from './client';

export async function getJobs() {
  const request = await client.from('jobs').select();
  return parseData(request);
}

export async function updateJob({ name, email, bio, birthday }) {
  const request = await client
    .from('jobs')
    .update({ name, bio, birthday })
    .match({ email });
  return parseData(request);
}

export async function createJob({ name, email, bio, birthday }) {
  const request = await client
    .from('jobs')
    .insert({ name, email, bio, birthday });
  return parseData(request);
}
