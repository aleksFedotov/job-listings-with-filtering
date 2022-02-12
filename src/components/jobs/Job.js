import React from 'react';

import styled from 'styled-components';

import img from '../../images/photosnap.svg';

const JobContainer = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  background: #fff;
  border-radius: 0.5rem;
  border-left: ${(props) =>
    props.isFeatured ? 'solid 4px var(--desaturated-dark-cyan)' : 'none'};
  box-shadow: 10px 10px 40px 0px rgba(120, 181, 181, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 3.5rem;
  gap: 15rem;
`;

const JobContext = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const Logo = styled.div`
  background-image: url('${(props) => props.imgSrc}');

  height: 8.8rem;
  width: 8.8rem;
`;

const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .company-title {
    font-size: 1.4rem;
    color: var(--desaturated-dark-cyan);
    font-weight: 700;
  }

  .info-tag {
    height: 2.4rem;
    border-radius: 2rem;
    text-transform: uppercase;
    font-size: 1.1rem;
    color: #fff;
    font-weight: 700;
    padding: 0.8rem;

    &.new {
      background-color: var(--desaturated-dark-cyan);
    }

    &.featured {
      background-color: black;
    }
  }
`;

const Position = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    color: var(--desaturated-dark-cyan);
  }
`;

const InfoFooter = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  font-size: 1.4rem;
  color: var(--dark-grayish-cyan);
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  flex-wrap: wrap;

  .tag {
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
  }
`;

const Job = (props) => {
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

  const imgSrc = require(`../../images/${company
    .replace(/\s/g, '-')
    .replace('.', '')
    .toLowerCase()}.svg`);

  const tags = [role, level, ...languages, ...tools];

  return (
    <JobContainer isFeatured={featured}>
      <JobContext>
        <Logo imgSrc={imgSrc} />
        <JobInfo>
          <InfoHeader>
            <p className="company-title">{company}</p>
            {props.job.new && <div className="info-tag new">new!</div>}
            {featured && <div className="info-tag featured">featured</div>}
          </InfoHeader>
          <Position>{position}</Position>
          <InfoFooter>
            <p>{postedAt}</p>
            <p>{'\u2022'}</p>
            <p>{contract}</p>
            <p>{'\u2022'}</p>
            <p>{location}</p>
          </InfoFooter>
        </JobInfo>
      </JobContext>
      <TagsContainer>
        {tags.map((tag) => (
          <div className="tag" key={tag}>
            {tag}
          </div>
        ))}
      </TagsContainer>
    </JobContainer>
  );
};

export default Job;
