import React from 'react';
import JobForm from '../../components/JobForm/JobForm';
import { useUser } from '../../context/UserContext/UserContext';

export default function CreateEdit({ isEditing = false }) {
  const { user } = useUser();
  console.log('user', user);
  return (
    <div>
      <JobForm isEditing />
    </div>
  );
}
