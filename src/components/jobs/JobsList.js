import React, { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Job from './Job';

import JobContext from '../../context/JobsContext';

const Jobs = styled(motion.div)`
  list-style: none;
  margin: 0 auto;

  max-width: 110rem;
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 1000px) {
    gap: 4rem;
  }
`;

const JobsList = () => {
  const jobCtx = useContext(JobContext);

  const jobArr = jobCtx.data.filter((job) =>
    jobCtx.filterTags.every((filter) => job.tags.includes(filter))
  );

  return (
    <Jobs layout>
      {jobArr.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </Jobs>
  );
};

export default JobsList;
