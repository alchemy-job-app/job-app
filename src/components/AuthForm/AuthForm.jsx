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
      <div>
        {loading ? (
          'Loading'
        ) : (
          <div>
            <section className="min-h-screen flex items-stretch text-white bg-gunmetal">
              <div className="lg:flex w-5/12 hidden relative bg-no-repeat bg-cover items-center bg-city bg-center">
                <div className="absolute opacity-60 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                  <h1 className="text-5xl font-bold text-left tracking-wide z-10 text-white">
                    You can do it!
                  </h1>
                  <p className="text-3xl my-4 text-white">
                    Take the first steps to acheiving your dream job
                  </p>
                </div>
              </div>
              <div className="lg:w-7/12 w-full flex justify-center items-center text-center md:px-16 px-0 z-0 bg-gunmetal">
                <div className="absolute lg:hidden z-10 inset-0 items-center bg-city bg-cover bg-right h-screen"></div>
                <div className="w-full py-6 z-20">
                  <form action="" className="w-1/2 px-4 lg:px-0 mx-auto">
                    <p className="text-4xl mb-12">GoodJob</p>
                    <div className="pb-2 pt-4">
                      <input
                        type="email"
                        name="email"
                        // value={formState.email}
                        // onChange={handleForm}
                        placeholder="Email"
                        className="block w-full p-4 text-lg rounded-sm bg-black"
                      />
                    </div>
                    <div className="pb-2 pt-4">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        // value={formState.password}
                        // onChange={handleForm}
                        className="block w-full p-4 text-lg rounded-sm bg-black"
                      />
                    </div>
                    <div className="text-right text-gray-400 hover:underline hover:text-gray-100"></div>
                    <div className="px-4 pb-2 pt-4">
                      <button className=" inline-block text-sm px-4 py-2 ml-4 leading-none border rounded text-white border-white hover:border-transparent bg-tealblue hover:text-gunmetal hover:bg-white mt-4 lg:mt-0 z-10">
                        Sign In
                        {/* {label} */}
                      </button>
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
