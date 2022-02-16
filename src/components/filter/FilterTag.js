import React, { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import deleteIcon from '../../images/icon-remove.svg';

import JobContext from '../../context/JobsContext';

const FilterTagCotnainer = styled(motion.div)`
  color: var(--desaturated-dark-cyan);
  background-color: var(--filter-tablets);
  padding-left: 0.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
`;

const DeleteBtn = styled(motion.div)`
  background: url('${(props) => props.img}');
  background-position: center center;
  background-repeat: no-repeat;
  background-color: var(--desaturated-dark-cyan);
  height: 3.2rem;
  width: 3.2rem;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

const FilterTag = (props) => {
  const jobCtx = useContext(JobContext);

  const deleteHandler = () => {
    jobCtx.deleteTag(props.tag);
  };
  return (
    <FilterTagCotnainer aria-label="filter-tag" layout>
      <motion.p layout>{props.tag}</motion.p>
      <DeleteBtn layout onClick={deleteHandler} img={deleteIcon} />
    </FilterTagCotnainer>
  );
};

export default FilterTag;
