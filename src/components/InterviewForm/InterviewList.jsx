import React from 'react';

export default function InterviewList({ interview }) {
  console.log('interview', interview);
  return (
    <div>
      {interview.map((item) => (
        <div key={item.id}>
          <p>{item.interview_q}</p>
        </div>
      ))}
    </div>
  );
}
