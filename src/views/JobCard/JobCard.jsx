import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useJob } from '../../context/JobContext/JobContext';

export default function JobCard() {
  const { id } = useParams();
  const { job } = useJob(id);
  // const handleClick = () => {
  //   history.push(`/profile/${job.id}/`);
  // };

  return (
    <>
      <div>Company: {job.company}</div>
      <div>Deadline: {job.deadline}</div>
      <div>Position: {job.position}</div>
      <div>Notes: {job.notes}</div>
    </>
  );
}
