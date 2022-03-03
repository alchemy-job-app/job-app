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
      InterviewForm
      <form onSubmit={handleSubmit}>
        <label>Interview questions: </label>
        <input
          type="textarea"
          placeholder="enter interview q here"
          value={interview.interview_q}
          name="interview_q"
          onChange={(e) => updateInterview('interview_q', e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
