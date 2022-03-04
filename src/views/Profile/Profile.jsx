import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import JobList from '../../components/JobList/JobList';

export default function Profile() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/profile/create');
  };

  return (
    <div className="text-white bg-calm bg-no-repeat bg-cover h-full sm:h-screen w-full">
      <div className="pt-12">
        <button
          onClick={handleClick}
          className="bg-pink text-gunmetal justify-center p-2 rounded-md ml-28 mb-12 hover:bg-manatee mx-auto"
        >
          Add a Job!
        </button>
        <JobList />
      </div>
    </div>
  );
}
// STRETCH GOAL:
// reordering means that you would have to track the order of the cards
// readjusting the positioning for all the cards
