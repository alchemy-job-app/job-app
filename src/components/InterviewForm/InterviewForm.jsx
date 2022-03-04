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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen md:px-20 pt-12 bg-road bg-no-repeat bg-center bg-cover">
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
                  Question:
                  <textarea
                    type="textarea"
                    placeholder="Sample Question: What is “Agile” software development and what are your thoughts on it?"
                    value={interview.interview_q}
                    name="interview_q"
                    aria-label="Question"
                    onChange={(e) =>
                      updateInterview('interview_q', e.target.value)
                    }
                    className="w-full font-serif p-4 text-gunmetal outline-none rounded-md"
                  />
                </label>
              </div>
              <div>
                <label
                  for="description"
                  className="block mb-2 text-lg font-serif text-white"
                >
                  Answer:
                </label>
                <textarea
                  type="textarea"
                  placeholder="I love Agile software development: it's efficient and "
                  value={interview.answer}
                  name="answer"
                  aria-label="Answer"
                  onChange={(e) => updateInterview('answer', e.target.value)}
                  className="w-full font-serif p-4 text-gunmetal outline-none rounded-md"
                />
              </div>

              <div className="flex space-x-4 justify-around">
                <div>
                  <label
                    for="description"
                    className="block mb-2 text-lg font-serif text-white"
                  >
                    Type:
                  </label>
                  <textarea
                    type="text"
                    placeholder="Sample Type: Data Model Question"
                    value={interview.type}
                    name="interview_q"
                    aria-label="Type"
                    onChange={(e) => updateInterview('type', e.target.value)}
                    className="w-half font-serif p-4 text-gunmetal outline-none rounded-md"
                  />
                </div>
                <div>
                  <label
                    for="description"
                    className="block mb-2 text-lg font-serif text-white"
                  >
                    Company:
                  </label>
                  <textarea
                    type="text"
                    placeholder="Optional: Company it's from"
                    value={interview.company}
                    name="company"
                    aria-label="Company"
                    onChange={(e) => updateInterview('company', e.target.value)}
                    className="w-half font-serif p-4 text-gunmetal outline-none rounded-md"
                  />
                </div>
              </div>
              <button className=" hover:text-white hover:bg-gunmetal px-4 py-1 mx-auto block rounded-md text-lg font-semibold text-charcoal border-2 border-charcoal bg-pink">
                ADD
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

