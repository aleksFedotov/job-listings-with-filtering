import React, { useState } from 'react';

import JobsContext from './JobsContext';
import data from '../../src/data.json';

const getTags = (job) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];
  job.tags = tags;
  return job;
};

const jodsData = [...data].map((job) => getTags(job));

const JobsContextProvider = (props) => {
  const [filterTags, setFilterTags] = useState([]);

  const addTag = (tag) => {
    if (!filterTags.includes(tag)) {
      setFilterTags((prevState) => prevState.concat(tag));
    }
  };

  const deleteTag = (tag) => {
    setFilterTags((prevState) => prevState.filter((item) => item !== tag));
  };

  const clearFitler = () => {
    setFilterTags([]);
  };

  return (
    <JobsContext.Provider
      value={{
        data: jodsData,
        filterTags,
        addTag,
        deleteTag,
        clearFitler,
      }}
    >
      {props.children}
    </JobsContext.Provider>
  );
};

export default JobsContextProvider;
