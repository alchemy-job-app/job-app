import React from 'react';

export default function InProgress({ jobs }) {
  return (
    <div>
      <h2>In Progress List:</h2>
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
  );
}
