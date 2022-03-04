import React from 'react';
import InterviewCard from './InterviewCard';

export default function InterviewList({ interview }) {
  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      role="list"
    >
      {interview.map((item) => (
        <div key={item.id}>
          <InterviewCard item={item} />
        </div>
      ))}
    </div>
  );
}
