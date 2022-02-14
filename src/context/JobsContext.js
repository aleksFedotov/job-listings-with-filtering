import { createContext } from 'react';

const JobContext = createContext({
  data: [],
  filterTags: [],
  addTag: () => {},
  deleteTag: () => {},
  clearFitler: () => {},
});

export default JobContext;
