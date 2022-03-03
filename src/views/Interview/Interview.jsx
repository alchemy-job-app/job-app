import React, { useEffect, useState } from 'react';
import InterviewForm from '../../components/InterviewForm/InterviewForm';
import InterviewList from '../../components/InterviewForm/InterviewList';
import { useUser } from '../../context/UserContext/UserContext';
import { getInterview } from '../../services/profiles';

export default function Interview() {
  const [interview, setInterview] = useState([]);
  const [loading2, setLoading2] = useState(true);
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

  if (loading2) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <InterviewForm interview={interview} setInterview={setInterview} />
      <InterviewList interview={interview} />
    </div>
  );
}
