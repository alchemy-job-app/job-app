import React from 'react';
import { createInterview } from '../../services/interview';

export default function InterviewForm({
  interview,
  updateInterview,
  question,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createInterview(question);
    } catch (error) {
      throw error;
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen md:px-20 pt-12 bg-gunmetal">
        <div className="bg-charcoal rounded-md px-6 py-10 max-w-2xl mx-auto">
          <h1 className="text-center text-2xl font-bold text-gray-500 mb-10 text-pink">
            Interview Questions
          </h1>
          <h2 className="text-center text-lg font-bold text-gray-500 mb-5 text-white">
            Keep track of potential questions here
          </h2>
          <div className="space-y-4">
            <div>
              <label
                for="description"
                className="block mb-2 text-lg font-serif text-white"
              >
                Questions:
              </label>
              <textarea
                type="textarea"
                placeholder="Sample Question: What is “Agile” software development and what are your thoughts on it?"
                value={interview.interview_q}
                name="interview_q"
                onChange={(e) => updateInterview('interview_q', e.target.value)}
                className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
            </div>
            <button className=" px-4 py-1 mx-auto block rounded-md text-lg font-semibold text-charcoal border-2 border-charcoal bg-pink">
              ADD
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
