import React from 'react';
import { deleteInterview } from '../../services/interview';

export default function InterviewCard({ item }) {
  const handleDelete = async () => {
    await deleteInterview(item.id);
    window.location.reload();
  };
  return (
    <div>
      <div className="rounded">
        <div className="object-contain w-280 h-280 flex flex-col justify-between bg-charcoal rounded-lg mb-6 py-5 px-4 hover:bg-teal hover:border-gunmetal">
          <div
            role="listitem"
            class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 text-gunmetal break-all h-60 overflow-auto"
          >
            <p>Question: {item.interview_q}</p>
            <p>Answer: {item.answer}</p>
            <p>Type: {item.type}</p>
            <p>Company: {item.company}</p>
            <button
              onClick={handleDelete}
              className="block rounded-md text-md font-semibold text-charcoal border-charcoal bg-pink hover:text-white hover:bg-gunmetal px-2 py-2 mt-8"
            >
              DELETE
            </button>
            <div class="md:flex items-center justify-between">
              <h2 class="text-2xl font-semibold leading-6 text-gunmetal-800"></h2>
              <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gunmetal-800"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
