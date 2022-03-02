import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import JobForm from '../../components/JobForm/JobForm';
import { useJob } from '../../hooks/useJob';
import { createJob, updateJob } from '../../services/jobs';

export default function CreateEdit({ isEditing = false }) {
  const { id } = useParams();
  const { setJob, job } = useJob(id);
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
      <JobForm
        // notes={job?.notes}
        // deadline={job?.deadline}
        // company={job?.company}
        // completion={job?.completion}
        // position={job?.position}
        onSubmit={handleJobForm}
        isEditing={isEditing}
      />
    </div>
  );
}
