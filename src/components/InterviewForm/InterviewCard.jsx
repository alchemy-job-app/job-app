import React from 'react';
import { deleteInterview } from '../../services/interview';

export default function InterviewCard({ item }) {
  const handleDelete = async () => {
    await deleteInterview(item.id);
    window.location.reload();
  };
  return (
    <div>
      {/* <p className="text-gunmetal">{item.interview_q}</p>
      <button
        onClick={handleDelete}
        className="block rounded-md text-lg font-semibold text-charcoal border-2 border-charcoal bg-pink"
      >
        Delete
      </button> */}
      <div
        class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
        role="list"
      >
        <div
          role="listitem"
          class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7 text-gunmetal"
        >
          <p>{item.interview_q}</p>
          <div class="md:flex items-center justify-between">
            <h2 class="text-2xl font-semibold leading-6 text-gunmetal-800"></h2>
            <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gunmetal-800"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
