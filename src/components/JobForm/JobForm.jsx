import React, { useEffect, useState } from 'react';
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
      if (isEditing) {
        await completedJob(job.id, !job.completion);
        await onSubmit({ id, notes, deadline, company, position, completion });
        const resp = await getJobById(job.id);
        setJob(resp);
        history.replace(`/profile`);
      } else {
        await onSubmit({ notes, deadline, company, position, completion });
        history.replace(`/profile`);
      }
    } catch (error) {
      setFormError('Please add a deadline!');
    }
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
        onChange={() => setFormState(!job.completion)}
      />
    </>
  );

  return (
    // a form that a signed in user can fill out
    // when they type in the input, it will update
    // when they submit the form, the profile info will be set into context for that user
    <>
      <form onSubmit={handleSubmit}>

        <div class="text-gunmetal min-h-screen md:px-20 pt-6">
          <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            {isEditing ? (
              <h1 class="text-center text-2xl font-bold text-gunmetal-500 mb-10">
                Edit Job
              </h1>
            ) : (
              <h1 class="text-center text-2xl font-bold text-gunmetal-500 mb-10">
                Add Job
              </h1>
            )}
            <div class="space-y-4">
              <div>
                <label className="text-lg ">Company:</label>
                <input
                  className="text-gunmetal ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  id="company"
                  name="company"
                  type="text"
                  value={formState.company}
                  onChange={handleForm}
                />
              </div>
              <div>
                <label for="description" class="block mb-2 text-lg">
                  Notes:
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  type="text"
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="whrite here.."
                  class="w-full p-4 rounded-md border-2"
                  value={formState.notes}
                  onChange={handleForm}
                ></textarea>
              </div>
              <div>
                <label className="text-lg">Deadline: </label>
                <input
                  className="text-gunmetal text-lg border-2 rounded-md"
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formState.deadline}
                  onChange={handleForm}
                />
              </div>
              <div>
                <label className="text-lg">Position:</label>
                <input
                  className="text-gunmetal ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  id="position"
                  name="position"
                  type="text"
                  value={formState.position}
                  onChange={handleForm}
                />
              </div>
              <div className="text-lg">{isEditing ? checkBox : null}</div>
              <button
                type="submit"
                class="hover:text-white hover:bg-gunmetal px-4 py-1 mx-auto block rounded-md text-lg font-semibold text-white border-2 border-white bg-teal"
              >
                Save
              </button>
              {isEditing ? (
                <button
                  className="hover:text-white hover:bg-gunmetal px-4 py-1 mx-auto block rounded-md text-lg font-semibold text-charcoal border-2 border-manatee bg-pink"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </form>
      {formError}
    </>
  );
}
