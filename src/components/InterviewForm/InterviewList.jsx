import React from 'react';

export default function InterviewList({ interview }) {
  return (
    <div>
      {interview.map((item) => (
        <p>{item.interview_q}</p>
      ))}
    </div>
  );
}
