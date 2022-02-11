import React from 'react';

import styled from 'styled-components';
import desktopBg from '../../images/bg-header-desktop.svg';

const HeroDiv = styled.div`
  width: 100%;
  background: url(${desktopBg}) var(--desaturated-dark-cyan);
  background-repeat: no-repeat;
  background-size: cover;
  height: 15rem;
`;

const Hero = () => {
  return <HeroDiv />;
};

export default Hero;
