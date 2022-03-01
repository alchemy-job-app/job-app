import { useForm } from '../../hooks/useForm';
import React, { useEffect, useState } from 'react';
// form will be used for both register and login, depending on
export default function AuthForm({ onSubmit, label, isSigningUp }) {
  const { formState, handleForm, clearForm, setFormError, formError } = useForm(
    {
      email: '',
      password: '',
    }
  );
  const [loading, setLoading] = useState(false);
  // onSubmit is the handleAuth from Auth.js, API call will depend on
  // which type of form it is (sign in or sign up)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;
    try {
      setFormError('');
      if (!email || password.length < 8)
        throw new Error('Your email and password with 8+ characters required');
      setLoading(true);
      await onSubmit(email, password);
    } catch (e) {
      setFormError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        'Loading'
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleForm}
          />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleForm}
          />
          <button type="submit" disabled={loading}>
            {label}
          </button>
          <p>{formError}</p>
        </form>
      )}
    </>
  );
}
