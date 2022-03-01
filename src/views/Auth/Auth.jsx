import React from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Link, useHistory } from 'react-router-dom';
import { signUpUser, signInUser } from '../../services/users';

export default function Auth({ isSigningUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    try {
      // if you are signing up, use signUp services fxn and push to confirm email
      if (isSigningUp) {
        console.log('isSigningUp', isSigningUp);
        await signUpUser(email, password);
      } else {
        // signing in, set the current user with the API call response.
        const resp = await signInUser(email, password);
        setUser({ id: resp.id, email: resp.email });
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
      <div className="bg-gunmetal text-gunmetal h-screen w-full">
        <h2 className="text-white">
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
          <p className="text-white">
            Already have an account? <Link to="/sign-in"> Sign In Here</Link>
          </p>
        ) : (
          <p className="text-white">
            Need an account? <Link to="/sign-up">Sign Up Here</Link>
          </p>
        )}
      </div>
    </>
  );
}
