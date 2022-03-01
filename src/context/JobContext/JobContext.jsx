import { createContext, useContext, useState, useEffect } from 'react';
import { getJobById } from '../../services/jobs';

const JobContext = createContext();

// gives the children access to the info for a job. To be used in editForm, jobCard, etc...
function JobProvider({ children }) {
  const [job, setJob] = useState({
    notes: '',
    deadline: '',
    company: '',
    position: '',
    completion: false,
  });
  const [loading, setLoading] = useState(false);

  // we might need to grab our user and put it into the dependency array
  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      try {
        const resp = await getJobById(id);
        setJob(resp);
      } catch (error) {
        setJob({
          notes: '',
          deadline: '',
          company: '',
          position: '',
          completion: false,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, []);

  return (
    <JobContext.Provider value={{ job, setJob, loading }}>
      {' '}
      {children}{' '}
    </JobContext.Provider>
  );
}

const useJob = () => {
  const context = useContext(JobContext);

  if (context === undefined) {
    throw new Error('useJob must be used within a JobProvider wrapper');
  }

  return context;
};

export { JobProvider, useJob };
