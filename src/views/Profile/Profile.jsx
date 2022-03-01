import React from 'react';
import { useUser } from '../../context/UserContext/UserContext';

export default function Profile() {
  const { user } = useUser();
  return <div>Profile</div>;
}

// STRETCH GOAL:
// reordering means that you would have to track the order of the cards
// readjusting the positioning for all the cards
