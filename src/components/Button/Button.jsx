import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext/UserContext';
import { signOutUser } from '../../services/users';

export default function Button() {
  const { user } = useUser();
  const history = useHistory();

  const handleSignOut = async () => {
    await signOutUser();
    history.replace('/');
    window.location.reload();
  };

  return (
    <>
      <div className="z-10 position: relative">
        <div className="group inline-block">
          <button className="outline-none focus:outline-none border px-3 py-1 bg-pink rounded-md flex items-center min-w-32">
            <span className="pr-2 font-semibold flex-1 text-gunmetal">
              Menu
            </span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
              transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-md transform scale-0 group-hover:scale-100 absolute 
    transition duration-150 ease-in-out origin-top min-w-32 text-sm"
          >
            {!user.id && (
              <a href="/sign-in">
                <li className="text-sm rounded-sm px-3 py-1 hover:text-white hover:bg-gunmetal">
                  Sign In
                </li>
              </a>
            )}
            <a href="/interview">
              <li className="rounded-sm px-3 py-1 hover:text-white hover:bg-gunmetal">
                Interview Prep
              </li>
            </a>

            <a href="/resume">
              <li className="rounded-sm px-3 py-1 hover:text-white hover:bg-gunmetal">
                Resume
              </li>
            </a>
            <a href="/about">
              <li className="text-sm rounded-sm px-3 py-1 hover:text-white hover:bg-gunmetal">
                About Us
              </li>
            </a>
            {user.id && (
              <a href="/" onClick={handleSignOut}>
                <li className="text-sm rounded-sm px-3 py-1 hover:text-white hover:bg-gunmetal">
                  Sign Out
                </li>
              </a>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
