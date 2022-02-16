import React, { useContext } from 'react';

import styled from 'styled-components';
import JobContext from '../../context/JobsContext';
import FilterTag from './FilterTag';

const FilterConteiner = styled.div`
  visibility: ${(props) => (props.isEmpty ? ' hidden' : 'visible')};
  position: relative;
  margin: 0 auto;
  margin-top: 9rem;
  max-width: 111rem;
  width: 100%;
  padding: 2rem 4rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 10px 10px 40px 0px rgba(120, 181, 181, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media (max-width: 650px) {
    padding: 1.8rem;
  }
`;

const ClearBtn = styled.button`
  border: none;
  background-color: transparent;
  color: var(--dark-grayish-cyan);
  cursor: pointer;
  font-family: inherit;
  font-weight: 700;
  font-size: 1.3rem;
  padding: 1rem 0.8rem;

  &:hover {
    color: var(--desaturated-dark-cyan);
    text-decoration: underline;
    text-decoration-color: var(--desaturated-dark-cyan);
    text-decoration-thickness: 2px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.8rem;
`;

const Filter = () => {
  const jobCtx = useContext(JobContext);

  const clearHandler = () => {
    jobCtx.clearFitler();
  };

  return (
    <FilterConteiner isEmpty={jobCtx.filterTags.length === 0}>
      <TagsContainer>
        {jobCtx.filterTags.map((tag) => (
          <FilterTag key={tag} tag={tag} />
        ))}
      </TagsContainer>
      <ClearBtn onClick={clearHandler}>Clear</ClearBtn>
    </FilterConteiner>
  );
};

export default Filter;
