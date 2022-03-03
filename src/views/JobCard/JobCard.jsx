import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useJob } from '../../hooks/useJob';

export default function JobCard() {
  const history = useHistory();
  const { id } = useParams();
  const { job } = useJob(id);
  const handleClick = () => {
    history.push(`/profile/${job.id}/edit`);
  };

  const handleBack = () => {
    history.push('/profile/');
  };
  return (
    <>
      <div className="bg-gunmetal h-screen w-full text-teal">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div class="rounded">
            <div class="w-88 h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 class="text-gray-800 dark:text-gray-100  mb-3">
                  <span className="text-gray-800 dark:text-gray-100 font-bold text-bg m-1">
                    Company:
                  </span>
                  {job.company}
                </h4>

                <p class="text-gray-800 dark:text-gray-100 text-sm">
                  <span className="text-gray-800 dark:text-gray-100 font-bold text-sm m-1">
                    Position:
                  </span>
                  {job.position}
                </p>

                <p class="text-gray-800 dark:text-gray-100 text-sm">
                  <span className="text-gray-800 dark:text-gray-100 font-bold text-sm m-1">
                    Notes:
                  </span>
                  {job.notes}
                </p>

                <p class="text-gray-800 dark:text-gray-100 font-bold text-sm m-1">
                  Status:{' '}
                  {job.completion === true ? 'Completed' : 'In Progress'}
                </p>
              </div>

              <div>
                <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                  <p class="text-sm">
                    <span className="text-gray-800 dark:text-gray-100 font-bold text-sm m-1">
                      Deadline:
                    </span>
                    {job.deadline}
                  </p>
                  <button onClick={handleBack}>Back to Profile</button>
                  <button
                    class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-teal flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                    aria-label="edit note"
                    role="button"
                    onClick={handleClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-pencil"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
