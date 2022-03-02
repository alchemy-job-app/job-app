import React from 'react';
import { useHistory } from 'react-router-dom';
import JobList from '../../components/JobList/JobList';
import { useUser } from '../../context/UserContext/UserContext';

export default function Profile() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile/create');
  };

  return (
    <div className="bg-gunmetal h-screen w-full">
      <button
        onClick={handleClick}
        className="bg-pink text-gunmetal mr-0 p-1 rounded-md hover:bg-manatee"
      >
        Add a Job!
      </button>
      Your Jobs:
      <JobList />
    </div>
  );
}

// STRETCH GOAL:
// reordering means that you would have to track the order of the cards
// readjusting the positioning for all the cards
