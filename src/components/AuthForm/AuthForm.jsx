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
    const { username, email, password } = formState;
    try {
      setFormError('');
      if (!email || password.length < 8 || !username)
        throw new Error(
          'Your username, email, and password with 8+ characters required'
        );
      setLoading(true);
      if (isSigningUp) {
        await onSubmit(username, email, password);
      } else {
        await onSubmit(email, password);
      }
    } catch (e) {
      setFormError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   clearForm();
  // }, [label]);

  const username = (
    <div>
      <label>Username: </label>
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={handleForm}
      />
    </div>
  );

  return (
    <>
      {loading ? (
        'Loading'
      ) : (
        <form onSubmit={handleSubmit}>
          {isSigningUp ? username : ''}
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
