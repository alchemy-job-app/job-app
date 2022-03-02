import React from 'react';
import { useHistory } from 'react-router-dom';

export default function JobCard({ job }) {
  const history = useHistory();
  console.log('job.id', job.id);
  // const handleClick = () => {
  //   history.push(`/profile/${job.id}/`);
  // };

  return (
    <>
      <a>
        <div>Company: {job.company}</div>
        <div>Deadline: {job.deadline}</div>
        <div>Position: {job.position}</div>
        <div>Notes: {job.notes}</div>
      </a>
    </>
  );
}
