import React from 'react';
import { createInterview } from '../../services/profiles';

export default function InterviewForm({ interview, updateInterview }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createInterview(interview);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      InterviewForm
      <form onSubmit={handleSubmit}>
        <label>Interview questions: </label>
        <input
          type="text"
          value={interview.interview_q}
          name="interview_q"
          onChange={(e) => updateInterview('interview_q', e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
