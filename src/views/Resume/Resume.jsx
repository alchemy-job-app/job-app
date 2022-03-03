import React, { useEffect, useState } from 'react';
import ViewResume from '../../components/ViewResume/ViewResume';
import { useUser } from '../../context/UserContext/UserContext';
import { getResume, uploadResume } from '../../services/resume';

export default function Resume() {
  const [file, setFile] = useState(null);
  const { user } = useUser();
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
    <div className="bg-wave bg-no-repeat bg-cover bg-center h-screen sm:h-full text-white">
      <form className="text-white" onSubmit={handleSubmit}>
        <div className="px-20 pt-6 mb-12">
          <div className="bg-charcoal rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 className="text-center text-2xl font-bold mb-10 text-pink">
              ADD RESUME
            </h1>
            <div className="space-y-4 mx-auto">
              <input
                id="resume"
                name="resume"
                type="file"
                className="mx-auto"
              />
              <button className="px-4 py-2 mx-auto block rounded-md text-lg font-semibold text-gunmetal bg-pink hover:bg-gunmetal hover:text-white">
                UPLOAD
              </button>
            </div>
          </div>
        </div>
      </form>
      <div>
        <ViewResume resume={resume} />
      </div>
    </div>
  );
}
