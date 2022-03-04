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
        {/* <label>Company:</label>
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
        <button type="submit">Save</button> */}

        <div class="bg-indigo-50 text-gunmetal min-h-screen md:px-20 pt-6">
          <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 class="text-center text-2xl font-bold text-gunmetal-500 mb-10">
              Edit Job
            </h1>
            <div class="space-y-4">
              <div>
                <label className="text-lx font-serif ">Company:</label>
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
                <label for="description" class="block mb-2 text-lg font-serif">
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
                  class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md "
                  value={formState.notes}
                  onChange={handleForm}
                ></textarea>
              </div>
              <div>
                <label className="text-lx font-serif">Deadline: </label>
                <input
                  className="text-gunmetal text-lx font-serif border-2 rounded-md"
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formState.deadline}
                  onChange={handleForm}
                />
              </div>
              <div>
                <label className="text-lx font-serif">Position:</label>
                <input
                  className="text-gunmetal ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  id="position"
                  name="position"
                  type="text"
                  value={formState.position}
                  onChange={handleForm}
                />
              </div>

              <button
                type="submit"
                class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "
              >
                Save
              </button>

              {isEditing ? checkBox : null}
              {isEditing ? (
                <button
                  className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600"
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
