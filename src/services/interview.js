import { client, parseData } from './client';

export async function getInterview(user_id) {
  const request = await client.from('interview').select('*').match({ user_id });
  return parseData(request);
}

export async function createInterview(interview) {
  const request = await client.from('interview').insert({
    interview_q: interview.interview_q,
    type: interview.type,
    company: interview.company,
    answer: interview.answer,
    user_id: client.auth.user().id,
  });
  return parseData(request);
}

export async function deleteInterview(id) {
  const request = await client
    .from('interview')
    .delete()
    .match({ id })
    .single();
  return parseData(request);
}
