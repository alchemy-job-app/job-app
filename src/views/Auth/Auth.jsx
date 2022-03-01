import React from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Link, useHistory } from 'react-router-dom';
import { signUpUser, signInUser } from '../../services/users';

export default function Auth({ isSigningUp = false }) {
  const { setCurrentUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    try {
      // if you are signing up, use signUp services fxn and push to confirm email
      if (isSigningUp) {
        await signUpUser(username, email, password);
        history.push('/');
      } else {
        // signing in, set the current user with the API call response.
        const resp = await signInUser(email, password);
        setCurrentUser({ id: resp.id, username: resp.name });
        // history.replace because you don't want to go back to log in page after you logged in
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  // depending on whether you are signing up or signing in, render AuthForm
  return (
    <>
      <h2>
        {isSigningUp
          ? 'Glad you are here - Sign up!'
          : 'Good to see you again - Sign in!'}
      </h2>
      <AuthForm
        onSubmit={handleAuth}
        // adding a label as a prop is cool
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
        isSigningUp={isSigningUp}
      />
      {isSigningUp ? (
        <p>
          Already have an account? <Link to="/sign-in"> Sign In Here</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/sign-up">Sign Up Here</Link>
        </p>
      )}
    </>
  );
}
