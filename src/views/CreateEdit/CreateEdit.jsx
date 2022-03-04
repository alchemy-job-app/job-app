import React from 'react';
import JobForm from '../../components/JobForm/JobForm';
import { createJob, updateJob } from '../../services/jobs';

export default function CreateEdit({ isEditing = false }) {
  const handleJobForm = async ({
    id,
    notes,
    deadline,
    company,
    completion,
    position,
  }) => {
    try {
      if (isEditing) {
        await updateJob({
          id,
          notes,
          deadline,
          company,
          completion,
          position,
        });
      } else {
        await createJob({ notes, deadline, company, completion, position });
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="text-white h-screen w-full bg-calm bg-no-repeat bg-cover">
      <JobForm onSubmit={handleJobForm} isEditing={isEditing} />
    </div>
  );
}
