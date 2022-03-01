import React from 'react';
import { useJob } from '../../context/JobContext/JobContext';
import { useUser } from '../../context/UserContext/UserContext';
import { useForm } from '../../hooks/useForm';

export default function JobForm({ onSubmit }) {
  const { job } = useJob();

  const { formState, handleForm } = useForm(
    job
      ? {
          notes: job.notes,
          deadline: job.deadline,
          company: job.company,
          completion: job.completion,
          position: job.position,
        }
      : {
          notes: '',
          deadline: '',
          company: '',
          position: '',
          completion: '',
        }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    //when button clicked call onSubmit
    //define formState
    const { notes, deadline, company, position, completion } = formState;
    try {
      await onSubmit({ notes, deadline, company, position, completion });
    } catch (error) {
      throw error;
    }
  };

  return (
    // a form that a signed in user can fill out
    <>
      <form onSubmit={handleSubmit}>
        <label>Company:</label>
        <input
          className="text-gunmetal"
          id="company"
          name="company"
          type="text"
          value={formState.company}
          onChange={handleForm}
        />
        <label>Deadline: </label>
        <input
          className="text-gunmetal"
          id="deadline"
          name="deadline"
          type="date"
          value={formState.deadline}
          onChange={handleForm}
        />
        <label>Position:</label>
        <input
          className="text-gunmetal"
          id="position"
          name="position"
          type="text"
          value={formState.position}
          onChange={handleForm}
        />
        <label>Notes:</label>
        <input
          className="text-gunmetal"
          id="notes"
          name="notes"
          type="text"
          value={formState.notes}
          onChange={handleForm}
        />
        {/* need something for completion, like a radio button or checkbox */}
        <button>Save Changes</button>
      </form>
    </>
    // when they type in the input, it will update
    // when they submit the form, the profile info will be set into context for that user
  );
}
