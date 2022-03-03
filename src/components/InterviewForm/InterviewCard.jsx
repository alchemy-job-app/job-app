import React from 'react';
import { deleteInterview } from '../../services/interview';

export default function InterviewCard({ item }) {
  const handleDelete = async () => {
    await deleteInterview(item.id);
    window.location.reload();
  };
  return (
    <>
      <p>{item.interview_q}</p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
