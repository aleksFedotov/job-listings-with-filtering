import React from 'react';

import styled from 'styled-components';

import Job from './Job';

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

const DUMMY_DATA = [
  {
    id: 1,
    company: 'Photosnap',
    logo: './images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 2,
    company: 'Manage',
    logo: './images/manage.svg',
    new: true,
    featured: true,
    position: 'Fullstack Developer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    languages: ['Python'],
    tools: ['React'],
  },
];

const JobsList = () => {
  return (
    <Jobs>
      {DUMMY_DATA.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </Jobs>
  );
};

export default JobsList;
