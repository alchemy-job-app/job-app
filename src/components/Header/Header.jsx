import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
        </svg>
        <span className="font-semibold text-3xl tracking-tight">
          Good<span className="text-pink">Job</span>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="dropdown-toggle flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          data-bs-toggle="dropdown"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            <ul>
              <li>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Interview Tips
                </a>
              </li>
            </ul>
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Interview Tips
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Resume
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Personal
          </a>
          <p>
            <Link to="/about"> About Us</Link>
          </p>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-gunmetal border-gunmetal hover:border-transparent bg-white hover:text-white hover:bg-gunmetal mt-4 lg:mt-0"
          >
            Sign In
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 ml-4 leading-none border rounded text-white border-gunmetal hover:border-transparent bg-gunmetal hover:text-gunmetal hover:bg-white mt-4 lg:mt-0"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
