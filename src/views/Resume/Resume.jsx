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
    } finally {
      window.location.reload();
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

  return (
    <div>
      <form className="text-white" onSubmit={handleSubmit}>
        <div className="bg-wave bg-no-repeat bg-cover bg-center min-h-screen text-white">
          <div className="pt-8">
            <div className="bg-charcoal rounded-md px-6 py-6 max-w-sm mx-auto">
              <h1 className="text-center text-2xl font-bold text-gray-500 mb-10 text-pink">
                ADD RESUME
              </h1>
              <div className="space-y-4">
                <div>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    className="sm:mx-16 mx-8 mb-4"
                  />
                </div>
                <button className=" hover:text-white hover:bg-gunmetal px-4 py-1 mx-auto block rounded-md text-lg font-semibold text-charcoal border-2 border-charcoal bg-pink">
                  ADD
                </button>
              </div>
            </div>
          </div>
          <div>
            <ViewResume resume={resume} />
          </div>
        </div>
      </form>
    </div>
  );
}
