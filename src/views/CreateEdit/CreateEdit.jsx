import React from 'react';
import { useHistory } from 'react-router-dom';
import JobForm from '../../components/JobForm/JobForm';
import { useJob } from '../../context/JobContext/JobContext';
import { useUser } from '../../context/UserContext/UserContext';
import { createJob, updateJob } from '../../services/jobs';

export default function CreateEdit({ isEditing = false }) {
  const { user } = useUser();
  const { setJob } = useJob();
  const history = useHistory();

  const handleJobForm = async (
    notes,
    deadline,
    company,
    completion,
    position
  ) => {
    try {
      if (isEditing) {
        const resp = await updateJob({
          notes,
          deadline,
          company,
          completion,
          position,
        });
        console.log('resp', resp);
        //when save changes is clicked, call updateJob function
        //set the results into context using setJob
        setJob({
          notes: resp.notes,
          deadline: resp.deadline,
          company: resp.company,
          completion: resp.completion,
          position: resp.position,
        });
      } else {
        await createJob(notes, deadline, company, completion, position);
        history.push('/profile');
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
