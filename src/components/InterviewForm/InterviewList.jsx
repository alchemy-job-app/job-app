import React from 'react';
import InterviewCard from '../InterviewCard/InterviewCard';

export default function InterviewList({ interview }) {
  return (
    <div>
      {interview.map((item) => (
        <li key={item.id}>
          <InterviewCard item={item} />
        </li>
      ))}
    </div>
  );
}
