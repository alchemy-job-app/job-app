import { client, parseData } from './client';

export async function getJobs() {
  const request = await client.from('jobs').select().match({ user_id });
  return parseData(request);
}

export async function updateJob({ notes, deadline, company, position, completion }) {
  const request = await client
    .from('jobs')
    .update({ notes, deadline, company, position, completion  })
    .match({ id });
  return parseData(request);
}

export async function createJob({ notes, deadline, company, position, completion  }) {
  const request = await client
    .from('jobs')
    .insert({ notes, deadline, company, position, completion  });
  return parseData(request);
}
