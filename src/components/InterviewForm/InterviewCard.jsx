import React from 'react';
import { deleteInterview } from '../../services/interview';

export default function InterviewCard({ item }) {
  const handleDelete = async () => {
    await deleteInterview(item.id);
    window.location.reload();
  };
  return (
    <div>
      <div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        role="list"
      >
        <div className="rounded">
          <div className="w-fit h-fit flex flex-col justify-between dark:bg-gray-800 bg-charcoal dark:border-gray-700 rounded-lg border-2 border-gray-400 mb-6 py-5 px-4 hover:bg-teal hover:border-gunmetal">
            <div
              role="listitem"
              class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7 text-gunmetal truncate..."
            >
              <p>Question: {item.interview_q}</p>
              <p>Answer: {item.answer}</p>
              <p>Type: {item.type}</p>
              <p>Company: {item.company}</p>
              <button
                onClick={handleDelete}
                className="block rounded-md text-lg font-semibold text-charcoal border-charcoal bg-pink"
              >
                Delete
              </button>
              <div class="md:flex items-center justify-between">
                <h2 class="text-2xl font-semibold leading-6 text-gunmetal-800"></h2>
                <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gunmetal-800"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
