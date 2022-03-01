import React from 'react';
import JobForm from '../../components/JobForm/JobForm';

export default function CreateEdit({ isEditing = false }) {
  return (
    <div>
      <JobForm isEditing />
    </div>
  );
}
