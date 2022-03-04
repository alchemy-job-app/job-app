import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// form will be used for both register and login, depending on
export default function AuthForm({ onSubmit, label, isSigningUp }) {
  const { formState, handleForm, setFormError } = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  // onSubmit is the handleAuth from Auth.js, API call will depend on
  // which type of form it is (sign in or sign up)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;
    try {
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        {loading ? (
          'Loading'
        ) : (
          <div>
            <section className="min-h-screen flex items-stretch text-white bg-gunmetal">
              <div className="lg:flex w-5/12 hidden relative items-center">
                <div className="absolute opacity-70 inset-0 z-0 bg-beach2 bg-no-repeat bg-cover"></div>
                <div className="w-full px-12 z-10 lg:text-center">
                  <h1 className="text-5xl font-bold text-left tracking-wide z-10 text-white lg:text-center w-full">
                    You{' '}
                    <span className="text-white underline decoration-manatee decoration-8 underline-offset-4">
                      can
                    </span>{' '}
                    do it!
                  </h1>
                  <p className="text-3xl my-4 text-white">
                    <span>
                      Take the <span className="text-pink">first steps</span> to
                    </span>
                    acheiving your <span className="text-pink">dream job</span>
                  </p>
                </div>
              </div>
              <div className="lg:w-7/12 w-full flex justify-center items-center text-center md:px-16 px-0 z-0">
                <div className="absolute lg:hidden z-10 inset-0 items-center bg-beach2 bg-cover bg-top h-screen opacity-70"></div>
                <div className="w-full py-6 z-20">
                  <h2 className="text-white mb-12 text-2xl">
                    {isSigningUp
                      ? 'Glad you are here - Sign up!'
                      : 'Great to see you again - Sign in!'}
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="w-1/2 px-4 lg:px-0 mx-auto"
                  >
                    <p className="text-5xl mb-12 font-bold">
                      Good<span className="text-pink">Job</span>
                    </p>
                    <div className="pb-2 pt-4">
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleForm}
                        placeholder="Email"
                        className="block w-full p-4 text-lg rounded-sm bg-black text-gunmetal"
                      />
                    </div>
                    <div className="pb-2 pt-4">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formState.password}
                        onChange={handleForm}
                        className="block w-full p-4 text-lg rounded-sm bg-black text-gunmetal"
                      />
                    </div>
                    <div className="px-4 pb-2 pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-block text-sm px-4 py-2 ml-4 leading-none border rounded text-white border-white hover:border-transparent bg-gunmetal hover:text-gunmetal hover:bg-pink hover:border-gunmetal mt-4 lg:mt-0 z-10"
                      >
                        {label}
                      </button>
                    </div>
                    <div className="mt-12">
                      {isSigningUp ? (
                        <p className="text-white text-2xl">
                          <span>Already have an account?</span>
                          <Link to="/sign-in">
                            <span className="text-pink hover:text-manatee">
                              Sign In
                            </span>{' '}
                          </Link>
                          Here
                        </p>
                      ) : (
                        <p className="text-white text-2xl">
                          <span>Need an account? </span>
                          <Link to="/sign-up">
                            <span className="text-pink hover:text-manatee">
                              Sign Up
                            </span>{' '}
                          </Link>
                          Here
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
