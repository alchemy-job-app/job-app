import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useJob } from '../../hooks/useJob';

export default function JobCard() {
  const history = useHistory();
  const { id } = useParams();
  const { job } = useJob(id);

  const handleClick = () => {
    history.push(`/profile/${job.id}/edit`);
  };

  const handleBack = () => {
    history.push('/profile/');
  };

  return (
    <div className="bg-gunmetal h-screen w-full text-white ">
      <div>Company: {job.company}</div>
      <div>Deadline: {job.deadline}</div>
      <div>Position: {job.position}</div>
      <div>Notes: {job.notes}</div>
      <button onClick={handleClick}>Edit</button>
      <button onClick={handleBack}>Back to Profile</button>
    </div>
  );
}
