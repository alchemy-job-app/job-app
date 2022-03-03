import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import { useJob } from '../../hooks/useJob';
import { getJobs } from '../../services/jobs';

export default function JobList() {
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

  return (
    <div>
      <div>
        Completed:
        {jobs.map((job) => {
          <a href={`/profile/${job.id}/`} key={job.id}>
            <ul>
              <li>{job.company}</li>
              <li>{job.deadline}</li>
              <li>{job.completion ? 'Completed' : 'In progress'}</li>
            </ul>
          </a>;
        })}
      </div>
      <div>
        In Progress:
        {jobs.map((job) => (
          <a href={`/profile/${job.id}/`} key={job.id}>
            <ul>
              <li>{job.company}</li>
              <li>{job.deadline}</li>
              <li>{job.completion ? 'Completed' : 'In progress'}</li>
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
}
