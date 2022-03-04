import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import JobList from '../../components/JobList/JobList';

export default function Profile() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/profile/create');
  };

  return (
    <div className="text-white bg-gunmetal h-full sm:h-screen w-full">
      <button
        onClick={handleClick}
        className="bg-pink text-gunmetal mr-0 p-1 rounded-md hover:bg-manatee"
      >
        Add a Job!
      </button>
      <JobList />
    </div>
  );
}
// STRETCH GOAL:
// reordering means that you would have to track the order of the cards
// readjusting the positioning for all the cards
