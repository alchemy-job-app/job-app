import React from 'react';

export default function InterviewList({ interview }) {
  return (
    <div>
      {interview.map((item) => (
        <p key={item.id}>{item.interview_q}</p>
      ))}
    </div>
  );
}
