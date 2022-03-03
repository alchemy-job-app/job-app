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
    <div className="bg-gunmetal text-white h-screen w-full">
      <InterviewForm
        interview={{ ...interview }}
        question={question}
        updateInterview={updateInterview}
      />
      <InterviewList interview={interview} />
    </div>
  );
}
