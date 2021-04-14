import React from 'react';
import styled from 'styled-components';
import { Section } from '../layouts/section';
import Race from '../../images/klo-racing.png';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Image src={Race} alt="Karen racing a rowing boat" />
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled(Section)`
  border-bottom: none;
`;

const Image = styled.img`
  width: 100%;
`;
