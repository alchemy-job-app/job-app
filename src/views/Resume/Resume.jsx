import React, { useState } from 'react';
import { uploadResume } from '../../services/resume';

export default function Resume() {
  const [file, setFile] = useState(null);

  const handleClick = async () => {
    try {
      const resp = await uploadResume({ file });
      setFile(resp);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      Upload Your Resume Here:
      <button onClick={handleClick}>Upload</button>
    </div>
  );
}
