import React from 'react';

export default function ViewResume({ resume }) {
  return (
    <div>
      {resume.map((item) => (
        <div key={item.id}>
          <img src={item.resume} />
        </div>
      ))}
    </div>
  );
}
