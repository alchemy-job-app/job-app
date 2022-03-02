import { client, parseData } from './client';

// export async function uploadResume({ file }) {
//   await client.storage
//     .from('resume-image')
//     .upload(`public/${file.name}`, file, { upsert: true });

//   const { publicURL } = await client.storage
//     .from('resume-image')
//     .getPublicUrl(`public/${file.name}`);

//   const resp = await client.from('resume').insert({ resume: publicURL });

//   return parseData(resp);
// }

export async function uploadResume(id, file) {
  const ext = file.name.split('.').pop();
  await client.storage
    .from(`resume-images`)
    .upload(`resume/${id}.${ext}`, file, { upsert: true });
  const { publicURL } = await client.storage
    .from(`resume-images`)
    .getPublicUrl(`resume/${userId}.${ext}`);
  const resp = await client
    .from(`profiles`)
    .update({ resume: publicURL })
    .eq(`id`, id)
    .single();
  return checkError(resp);
}
