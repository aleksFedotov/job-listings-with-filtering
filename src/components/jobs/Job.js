import React from 'react';

import styled from 'styled-components';

const JobContainer = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  background: #fff;
  border-radius: 0.5rem;
  border-left: ${(props) =>
    props.isNew ? 'solid 4px var(--desaturated-dark-cyan)' : 'none'};
`;

const Job = (props) => {
  console.log(props.job.new);
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.job;

  return <JobContainer isNew={props.job.new}></JobContainer>;
};

export default Job;
