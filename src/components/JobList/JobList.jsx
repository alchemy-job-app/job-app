import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import { useJob } from '../../hooks/useJob';
import { getJobs } from '../../services/jobs';
import JobCard from '../../views/JobCard/JobCard';

export default function JobList() {
  const { user } = useUser();
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
  }, [user]);

  return (
    <div>
      {jobs.map((job) => (
        <a href={`/profile/${job.id}/`} key={job.id}>
          <ul>
            <li>{job.company}</li>
            <li>{job.deadline}</li>
          </ul>
        </a>
      ))}
    </div>
  );
}
