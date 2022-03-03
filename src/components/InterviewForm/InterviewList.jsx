import React from 'react';
import InterviewCard from './InterviewCard';

export default function InterviewList({ interview }) {
  return (
    <div>
      {interview.map((item) => (
        <div key={item.id}>
          <InterviewCard item={item} />
        </div>
      ))}
    </div>
  );
}
