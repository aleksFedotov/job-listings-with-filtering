import React from 'react';

import styled from 'styled-components';

import JobTag from './JobTag';

const JobContainer = styled.div.attrs({
  'aria-haspopup': 'job',
})`
  width: 100%;
  height: 15rem;
  height: fit-content;
  background: #fff;
  border-radius: 0.5rem;
  border-left: ${(props) =>
    props.isFeatured ? 'solid 4px var(--desaturated-dark-cyan)' : 'none'};
  box-shadow: 10px 10px 40px 0px rgba(120, 181, 181, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 3.5rem;
  gap: 10rem;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const JobContextContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  position: relative;
`;

const Logo = styled.div`
  background-image: url('${(props) => props.imgSrc}');
  background-size: cover;
  height: 8.8rem;
  width: 8.8rem;

  @media (max-width: 1000px) {
    position: absolute;
    top: -5.5rem;
    left: 0;
    height: 4.8rem;
    width: 4.8rem;
  }
`;

const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8.8rem;
  flex-shrink: 0;
`;

const InfoHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .company-title {
    font-size: 1.4rem;
    color: var(--desaturated-dark-cyan);
    font-weight: 700;

    @media (max-width: 880px) {
      font-size: 1.2rem;
    }
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

    @media (max-width: 880px) {
      font-size: 1rem;
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

  @media (max-width: 880px) {
    font-size: 1.6rem;
  }

  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

const InfoFooter = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  font-size: 1.4rem;
  color: var(--dark-grayish-cyan);

  @media (max-width: 880px) {
    font-size: 1.4rem;
  }

  @media (max-width: 650px) {
    gap: 0.8rem;
    font-size: 1.3rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  flex-wrap: wrap;

  @media (max-width: 880px) {
    font-size: 1.6rem;
  }
`;

const Bar = styled.span`
  width: 100%;
  height: 1px;
  background-color: rgb(220, 220, 220);
  display: none;
  margin-top: 1.8rem;
  margin-bottom: 1.5rem;
  @media (max-width: 650px) {
    display: block;
  }
`;

const Job = (props) => {
  const { company, featured, position, postedAt, contract, location, tags } =
    props.job;

  const imgSrc = require(`../../images/${company
    .replace(/\s/g, '-')
    .replace('.', '')
    .toLowerCase()}.svg`);

  return (
    <JobContainer isFeatured={featured} aria-label="job">
      <JobContextContainer>
        <Logo imgSrc={imgSrc} />
        <JobInfo>
          <InfoHeader>
            <p className="company-title">{company}</p>
            {props.job.new && (
              <div aria-label="new-tag" className="info-tag new">
                new!
              </div>
            )}
            {featured && (
              <div
                new-tag="featured-tag"
                className="info-tag featured"
                aria-label="featured-tag"
              >
                featured
              </div>
            )}
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
      </JobContextContainer>
      <Bar />
      <TagsContainer>
        {tags.map((tag) => (
          <JobTag key={tag} tag={tag} />
        ))}
      </TagsContainer>
    </JobContainer>
  );
};

export default Job;
