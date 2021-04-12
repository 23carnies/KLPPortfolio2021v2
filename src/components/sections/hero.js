import React from 'react';
import styled from 'styled-components'
import { Section } from '../layouts/section'
import { Heading, SubHeading } from '../elements'
import Race from '../../images/klo-racing.png'

const Hero = () => {
    return (
        <Section type="hero">
            <Heading>Hi! I'm Karen</Heading>
            <SubHeading>I am a software engineer based in Atlanta, focused on Front End design, useability, and accessability.</SubHeading>
            <Image src={Race} alt="Karen racing a rowing boat" />
        </Section>
    );
}
 
export default Hero;

const Image = styled.img`
    width: 100%;
`;