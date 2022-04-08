import React from 'react';

export default function Complete({ jobs }) {
  return (
    <div>
      <h2 className="text-2xl mb-8 text-gunmetal">Complete:</h2>
      {jobs.map((item) => (
        <div
          key={item.id}
          className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6"
        >
          <div className="rounded">
            <div className="h-60 overflow-auto w-200 flex flex-col justify-between bg-charcoal rounded-lg border-2 border-manatee mb-6 py-5 px-4 hover:bg-teal hover:border-gunmetal">
              <div>
                <a href={`/profile/${item.id}/`}>
                  <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                    <p>
                      <span className="text-pink">Company: </span>
                      {item.company}
                    </p>
                  </h4>
                  <p>
                    <span className="text-pink text-sm font-bold">
                      Position applied for:{' '}
                    </span>
                    {item.position}
                  </p>

                  <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                    <p>
                      <span className="text-pink text-sm">
                        Application deadline:{' '}
                      </span>
                      {item.deadline}
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
