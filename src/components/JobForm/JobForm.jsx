import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useJob } from '../../hooks/useJob';
import { completedJob, deleteJob, getJobById } from '../../services/jobs';

export default function JobForm({ onSubmit, isEditing }) {
  const { id } = useParams();
  const { job, setJob } = useJob(id);
  const history = useHistory();
  const { formState, handleForm, setFormState, setFormError, formError } =
    useForm({
      notes: '',
      deadline: '',
      company: '',
      position: '',
      completion: false,
    });

  useEffect(() => {
    setFormState(job);
  }, [job]);

  // useEffect to set edit state into form
  const handleSubmit = async (e) => {
    e.preventDefault();
    //when button clicked call onSubmit
    //define formState
    const { notes, deadline, company, position, completion } = formState;
    try {
      await onSubmit({ id, notes, deadline, company, position, completion });
      history.replace(`/profile`);
    } catch (error) {
      setFormError('Please add a deadline!');
    }
  };

  const handleClick = async () => {
    await completedJob(job.id, !job.completion);
    const resp = await getJobById(job.id);
    setJob(resp);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteJob(job.id);
    history.replace('/profile');
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
        {isEditing ? <button onClick={handleDelete}>Delete</button> : null}
        <button type="submit">Save</button>
      </form>
      {formError}
    </>
  );
}
