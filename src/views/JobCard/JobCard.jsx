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
      <div className="bg-calm bg-no-repeat bg-cover h-screen w-full text-teal">
        <div className="flex w-full justify-center pt-12 content-center">
          <div className="rounded">
            <div className="w-96 h-fit flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="mb-3">
                  <span className="font-bold text-3xl m-1">Company:</span>
                  <span className="text-manatee text-3xl">{job.company}</span>
                </h4>

                <p name="text-sm">
                  <span className="font-bold text-2xl m-1">Position:</span>
                  <span className="text-manatee text-2xl">{job.position}</span>
                </p>

                <p className="text-sm">
                  <span className="font-bold text-2xl m-1">Notes:</span>
                  <span className="text-manatee text-2xl">{job.notes}</span>
                </p>

                <p className="font-bold text-2xl m-1">
                  Status:{' '}
                  <span className="text-manatee text-2xl">
                    {job.completion === true ? 'Completed' : 'In Progress'}
                  </span>
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="font-bold text-lg m-1">Deadline:</span>
                    <span className="text-manatee text-lg">{job.deadline}</span>
                  </p>
                  <div className="flex flex-row">
                    <button
                      onClick={handleBack}
                      className="w-8 h-8 rounded-full text-teal hover:text-pink flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        aria-labelledby="title"
                        aria-describedby="desc"
                        role="img"
                      >
                        <path
                          data-name="layer1"
                          d="M43.998 14H7a3 3 0 0 0 0 6h36.998a12 12 0 1 1 0 24H13.672l7.363-6.795a3 3 0 0 0-4.07-4.41L2 47l14.965 14.205a3 3 0 0 0 4.07-4.41L13.672 50h30.326a18 18 0 1 0 0-36z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="3"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="w-8 h-8 rounded-full text-teal hover:text-pink flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                      aria-label="edit note"
                      role="button"
                      onClick={handleClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-pencil"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
      </div>
    </>
  );
}
