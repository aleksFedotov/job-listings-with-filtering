import React from 'react';

import styled from 'styled-components';

import Job from './Job';
import jobsData from '../../data.json';

const Jobs = styled.li`
  list-style: none;
  margin: 0 auto;
  max-width: 110rem;
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const JobsList = () => {
  return (
    <Jobs>
      {jobsData.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </Jobs>
  );
};

export default JobsList;
