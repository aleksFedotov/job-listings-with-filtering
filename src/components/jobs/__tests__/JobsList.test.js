import { render, screen } from '@testing-library/react';

import JobContext from '../../../context/JobsContext';

import data from '../../../data.json';

import JobsList from '../JobsList';

const getTags = (job) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];
  job.tags = tags;
  return job;
};

const jodsData = [...data].map((job) => getTags(job));

test('Jobs list renders rigth amount of jobs', () => {
  render(
    <JobContext.Provider
      value={{
        data: jodsData,
        filterTags: [],
        addTag: jest.fn(),
        deleteTag: jest.fn(),
        clearFitler: jest.fn(),
      }}
    >
      <JobsList />
    </JobContext.Provider>
  );
  const jobs = screen.getAllByLabelText('job');
  expect(jobs.length).toEqual(10);
});
