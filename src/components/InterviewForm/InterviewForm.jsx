import React from 'react';
import { useForm } from '../../hooks/useForm';
import { createInterview } from '../../services/profiles';

export default function InterviewForm({ interview, updateInterview }) {
  console.log('interview', interview);
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
          name="interview"
          onChange={(e) => updateInterview('interview_q', e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
