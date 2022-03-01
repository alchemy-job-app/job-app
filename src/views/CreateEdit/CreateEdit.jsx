import React from 'react';
import JobForm from '../../components/JobForm/JobForm';
import { useUser } from '../../context/UserContext/UserContext';

export default function CreateEdit() {
  const { user } = useUser();
  console.log('user', user);
  return (
    <div className="text-gunmetal">
      <h1>Hoolkeoeh</h1>
      <JobForm />
    </div>
  );
}
