import React from 'react';

export default function InProgress({ jobs }) {
  return (
    <div>
      <h2 className="text-2xl mb-8 text-gunmetal">In Progress:</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6">
            <div className="rounded">
              <div className="h-60 overflow-auto w-200 flex flex-col justify-between bg-pink rounded-lg border-2 mb-6 py-5 px-4 hover:bg-pinkcard hover:border-gunmetal">
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
        </div>
      ))}
    </div>
  );
}
