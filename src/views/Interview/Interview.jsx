import React, { useEffect, useState } from 'react';
import InterviewForm from '../../components/InterviewForm/InterviewForm';
import InterviewList from '../../components/InterviewForm/InterviewList';
import { useUser } from '../../context/UserContext/UserContext';
import { getInterview } from '../../services/interview';

export default function Interview() {
  const [interview, setInterview] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const [question, setQuestion] = useState({});
  const { user } = useUser();

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const resp = await getInterview(user.id);
        setInterview(resp);
      } catch (error) {
        throw error;
      } finally {
        setLoading2(false);
      }
    };
    fetchInterview();
  }, []);

  const updateInterview = (key, value) => {
    question[key] = value;
    setQuestion({ ...question });
  };

  if (loading2) {
    return <h1>loading</h1>;
  }

  return (
    <div className="h-screen">
      <div className="text-white md:px-20 pt-12 min-h-screen w-full bg-road bg-no-repeat bg-center bg-cover ">
        <div>
          <InterviewForm
            interview={{ ...interview }}
            question={question}
            updateInterview={updateInterview}
          />
        </div>
        <div className="mt-12">
          <InterviewList interview={interview} />
        </div>
      </div>
    </div>
  );
}
