import React from 'react';

export default function Complete({ jobs }) {
  return (
    <div>
      <h2>Complete List:</h2>
      {jobs.map((item) => (
        <a href={`/profile/${item.id}/`} key={item.id}>
          <ul>
            <li>{item.company}</li>
            <li>{item.deadline}</li>
            <li>{item.completion ? 'Completed' : 'In progress'}</li>
          </ul>
        </a>
      ))}
    </div>
  );
}
