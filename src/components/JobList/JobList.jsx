import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import { getJobs } from '../../services/jobs';
import JobCard from '../../views/JobCard/JobCard';

export default function JobList() {
  //   const { jobs, loading } = useJob();
  const { user } = useUser();

  //   console.log('jobs', jobs);
  const [loading, setLoading] = useState(true);

  const [jobs, setJobs] = useState([]);
  // we might need to grab our user and put it into the dependency array

  console.log('loading', loading);

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
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <ul key={job.id}>
          <li>{job.company}</li>
          <li>{job.deadline}</li>
        </ul>
      ))}
    </div>
  );
}
