import React from 'react';

export default function InProgress({ jobs }) {
  return (
    <div>
      <h2 className="text-2xl ">In Progress List:</h2>
      {jobs.map((job) => (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="rounded">
            <div className="w-fit h-fit flex flex-col justify-between dark:bg-gray-800 bg-pink bg-opacity-95 dark:border-gray-700 rounded-lg border-2 border-gray-400 mb-6 py-5 px-4 hover:bg-pinkcard hover:border-gunmetal">
              <div>
                <a href={`/profile/${job.id}/`} key={job.id}>
                  <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                    <p className="text-charcoal">
                      <span className="text-gunmetal">Company: </span>
                      {job.company}
                    </p>
                  </h4>
                  <p className="text-charcoal">
                    <span className="text-gunmetal text-sm font-bold">
                      Position applied for:{' '}
                    </span>
                    {job.position}
                  </p>

                  <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                    <p className="text-charcoal">
                      <span className="text-gunmetal text-sm">
                        Application deadline:{' '}
                      </span>
                      {job.deadline}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
