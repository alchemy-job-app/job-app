import React from 'react';

export default function InterviewList({ interview }) {
  console.log('interview', interview);
  return (
    <div>
      {interview.map((item) => (
        <li key={item.id}>{item.interview_q}</li>
      ))}
    </div>
  );
}
