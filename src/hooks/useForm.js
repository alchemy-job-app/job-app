import { useState } from 'react';
// takes form and handles according to input
// handleForm connected to Auth view

export function useForm(inputs = {}) {
  const [formState, setFormState] = useState(inputs);
  const [formError, setFormError] = useState('');

  const handleForm = (e) => {
    // set target values to name, value type key value pair.
    const { name, value } = e.target;
    setFormState((prevState) => {
      // take prevState of form, whatever it may be, and add this new [name]: value pair
      // [name] will set up what onSubmit will pass in for ex. password, email, etc.
      return { ...prevState, [name]: value };
    });
  };

  const clearForm = () => {
    setFormState(inputs);
  };
  // handleForm will be dynamic

  return {
    formState,
    setFormState,
    formError,
    setFormError,
    handleForm,
    clearForm,
  };
}
