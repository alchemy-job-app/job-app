import React from 'react';
import { useJob } from '../../context/JobContext/JobContext';
import { useUser } from '../../context/UserContext/UserContext';
import { useForm } from '../../hooks/useForm';

export default function JobForm() {
  const { user } = useUser();
  const { job } = useJob();

  const { formState, handleForm } = useForm({
    notes: '',
    deadline: '',
    company: '',
    position: '',
    completion: '',
  });

  return (
    // a form that a signed in user can fill out
    <>
      <form>
        <input
          className="text-gunmetal"
          id="company"
          name="company"
          type="text"
          value={formState.company}
          onChange={handleForm}
        />
        <input
          className="text-gunmetal"
          id="deadline"
          name="deadline"
          type="date"
          value={formState.deadline}
          onChange={handleForm}
        />
        <input
          className="text-gunmetal"
          id="position"
          name="position"
          type="text"
          value={formState.position}
          onChange={handleForm}
        />
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
