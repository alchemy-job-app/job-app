import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import { getJobs } from '../../services/jobs';
import Complete from './Complete';
import InProgress from './InProgress';

export default function JobList({ isComplete }) {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const resp = await getJobs({ user_id: user.id });
        setJobs(resp);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [user]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  const complete = [],
    inprogress = [];
  console.log('complete', complete);
  console.log('inprogress', inprogress);
  return (
    <div>
      {/* {isComplete ? <Complete jobs={jobs} /> : <InProgress jobs={jobs} />} */}
      {/* {jobs.forEach((job) => {
        if (job.completion == true) {
          complete.push(job);
        } else {
          inprogress.push(job);
        }
      })} */}
      {complete.length > 1 && <Complete complete={complete} />}
      {inprogress.length > 1 && <InProgress inprogress={inprogress} />}
      <Complete jobs={jobs} />
    </div>
  );
}
