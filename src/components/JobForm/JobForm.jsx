import React from 'react';

export default function JobForm({ isEditing = false }) {
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
          id="company"
          name="company"
          type="text"
          value={company}
          onChange={handleForm}
        />
        <input
          id="deadline"
          name="deadline"
          type="date"
          value={deadline}
          onChange={handleForm}
        />
        <input
          id="position"
          name="position"
          type="text"
          value={position}
          onChange={handleForm}
        />
        <input
          id="notes"
          name="notes"
          type="text"
          value={notes}
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
