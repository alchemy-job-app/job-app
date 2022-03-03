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
  console.log('id', id);
  const ext = file[0].name.split('.').pop();
  await client.storage
    .from('resume-image')
    .upload(`resume/${id}.${ext}`, file, { upsert: true });
  //   const { publicURL } = client.storage
  //     .from('resume-image')
  //     .getPublicUrl(`resume/${id}.${ext}`);
  //   const resp = await client
  // .from('profiles')
  // .insert({ resume: publicURL, user_id: client.auth.user().id })
  // .eq('user_id', id)
  // .single();
  //   return parseData(resp);
}
