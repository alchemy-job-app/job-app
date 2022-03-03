import React from 'react';

export default function Complete({ jobs }) {
  return (
    <div>
      <h2>Complete List:</h2>
      {jobs.map((item) => (
        <a href={`/profile/${item.id}/`} key={item.id}>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="rounded">
              <div className="w-fit h-fit flex flex-col justify-between dark:bg-gray-800 bg-charcoal dark:border-gray-700 rounded-lg border-2 border-gray-400 mb-6 py-5 px-4 hover:bg-teal hover:border-gunmetal">
                <div>
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
                </div>
                <div>
                  <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                    <p>
                      <span className="text-pink text-sm">
                        Application deadline:{' '}
                      </span>
                      {item.deadline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
