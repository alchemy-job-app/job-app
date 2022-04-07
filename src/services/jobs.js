import { client, parseData } from './client';

export async function getJobs({ user_id }) {
  const request = await client.from('jobs').select('*').match({ user_id });
  return parseData(request);
}

export async function updateJob({
  id,
  notes,
  deadline,
  company,
  position,
  completion,
  referrer,
  link,
}) {
  const { data } = await client
    .from('jobs')
    .update({ notes, deadline, company, position, completion, referrer, link })
    .match({ id });
  return parseData(data);
}

export async function createJob({
  notes,
  deadline,
  company,
  position,
  completion,
  referrer,
  link,
}) {
  const request = await client.from('jobs').insert({
    notes,
    deadline,
    company,
    position,
    completion,
    referrer,
    link,
    user_id: client.auth.user().id,
  });
  return parseData(request);
}

export async function getJobById(id) {
  const request = await client.from('jobs').select('*').match({ id }).single();
  return parseData(request);
}

export async function deleteJob(id) {
  const request = await client.from('jobs').delete().match({ id }).single();
  return parseData(request);
}

export async function completedJob(id, completion) {
  const request = await client
    .from('jobs')
    .update({ completion: completion })
    .eq('id', id);
  return parseData(request);
}
