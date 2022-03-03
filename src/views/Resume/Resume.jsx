import React, { useState } from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import { uploadResume } from '../../services/resume';

export default function Resume({ file }) {
  const [file1, setFile] = useState(null);
  const { user } = useUser();
  //   const { user_id } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('e.target[0].files', e.target[0].files);
    try {
      const resp = await uploadResume(user.id, e.target[0].files[0]);
      setFile(resp);
    } catch (error) {
      throw error;
    }
  };

  // const onChange = ({ target }) => {
  //   switch (target.name) {
  //     case 'file':
  //       return setFile(target.files[0]);
  //     default:
  //       return false;
  //   }
  // };
  console.log('file', file);
  return (
    <div className="bg-gunmetal h-screen w-full text-white">
      Upload Your Resume Here:
      <form onSubmit={handleSubmit}>
        <label>Resume:</label>
        <input id="resume" name="resume" type="file" />
        <button type="submit">Upload</button>
      </form>
      {}
    </div>
  );
}
