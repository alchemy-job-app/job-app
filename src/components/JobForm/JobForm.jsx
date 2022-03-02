import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useJob } from '../../hooks/useJob';
import { completedJob, getJobById } from '../../services/jobs';

export default function JobForm({ onSubmit, isEditing }) {
  const { id } = useParams();
  const { job, setJob, loading } = useJob(id);
  console.log('job', job);
  const { formState, handleForm } = useForm(
    job.id
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
          completion: false,
        }
  );
  // useEffect to set edit state into form

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

  const handleClick = async (job) => {
    await completedJob(job.id, !job.completion);
    const resp = await getJobById();
    setJob(resp);
  };

  const checkBox = (
    <>
      <label>Complete:</label>
      <input
        type="checkbox"
        checked={formState.completion}
        name="completion"
        onChange={() => {
          handleClick(formState.completion);
        }}
      />
    </>
  );

  // if (loading) {
  //   return <h1>Loading</h1>;
  // }
  return (
    // a form that a signed in user can fill out
    // when they type in the input, it will update
    // when they submit the form, the profile info will be set into context for that user
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
        {isEditing ? checkBox : null}
        <button type="submit">Save</button>
      </form>
    </>
  );
}
