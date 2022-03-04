import React from 'react';
import { useHistory } from 'react-router-dom';
import JobForm from '../../components/JobForm/JobForm';
import { createJob, updateJob } from '../../services/jobs';

export default function CreateEdit({ isEditing = false }) {
  const history = useHistory();
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
    <div className="text-white bg-gunmetal h-screen w-full">
      <JobForm onSubmit={handleJobForm} isEditing={isEditing} />
    </div>
  );
}
