import React from 'react';
import { useHistory } from 'react-router-dom';
import { useJob } from '../../context/JobContext/JobContext';

export default function () {
  const { job } = useJob();
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
