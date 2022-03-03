import React, { useEffect, useState } from 'react';
import ViewResume from '../../components/ViewResume/ViewResume';
import { useUser } from '../../context/UserContext/UserContext';
import { getResume, uploadResume } from '../../services/resume';

export default function Resume() {
  const [file, setFile] = useState(null);
  const { user } = useUser();
  //   const { user_id } = user;
  const [resume, setResume] = useState([]);

  useEffect(() => {
    const fetchResume = async () => {
      const data = await getResume(user.id);
      setResume(data);
    };
    fetchResume();
  }, []);

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
      <ViewResume resume={resume} />
    </div>
  );
}
