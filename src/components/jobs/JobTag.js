import React, { useContext } from 'react';
import styled from 'styled-components';
import JobContext from '../../context/JobsContext';

const Tag = styled.div.attrs({
  'aria-haspopup': 'tag',
})`
  color: var(--desaturated-dark-cyan);
  background-color: var(--filter-tablets);
  padding: 1rem 0.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: var(--desaturated-dark-cyan);
    color: #fff;
  }
`;

const JobTag = (props) => {
  const jobCtx = useContext(JobContext);
  const addTagHandler = () => {
    jobCtx.addTag(props.tag);
  };
  return (
    <Tag aria-label="tag" onClick={addTagHandler}>
      {props.tag}
    </Tag>
  );
};

export default JobTag;
