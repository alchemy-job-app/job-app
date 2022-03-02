import React from 'react';
import { useHistory } from 'react-router-dom';

export default function JobCard({ job }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/profile/${job.id}/edit`);
  };

  return (
    <>
      <div>Company: {job.company}</div>
      <div>Deadline: {job.deadline}</div>
      <div>Position: {job.position}</div>
      <div>Notes: {job.notes}</div>
      <button onClick={handleClick}>Edit</button>
    </>
  );
}
