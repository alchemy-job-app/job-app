import React, { useState } from 'react';
import { uploadResume } from '../../services/resume';

export default function Resume() {
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    try {
      const resp = await uploadResume({ file });
      setFile(resp);
    } catch (error) {
      throw error;
    }
  };

  const onChange = ({ target }) => {
    switch (target.name) {
      case 'file':
        return setFile(target.files[0]);
      default:
        return false;
    }
  };

  return (
    <div>
      Upload Your Resume Here:
      <form onSubmit={handleSubmit}>
        <label>Resume:</label>
        <input
          id="resume"
          name="resume"
          type="file"
          onChange={(e) => onChange(e)}
        />
        <button type="submit">Upload</button>
      </form>
      {file}
    </div>
  );
}
