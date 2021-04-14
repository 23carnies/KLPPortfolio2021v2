import React from 'react';
import { Section } from '../layouts/section';
import { Flex } from '../utilities'
import styled from 'styled-components';
import Iceland from '../../images/klo-iceland.jpg'

const Intro = () => {
    return (
        <SectionIntro>
            <Image src={Iceland} alt="Karen in Iceland" />
            <TextBox>

            <Heading>Hi! I'm Karen</Heading>
            <SubHeading>I am a software engineer based in Atlanta, focused on Front End design in ReactJS, useability, and accessability.</SubHeading>
            </TextBox>
        </SectionIntro>
    );
}
 
export default Intro;

const SectionIntro = styled(Section)`
    ${Flex};
    border-bottom: 10px solid ${props => props.theme.tagLineColor};
    padding-bottom: 2%;
`;

const Image = styled.img`
    border-radius: 60%;
    width: 30%;
    margin: 1%;
`;

const TextBox = styled.div`
    width: 50%;
    padding: 2%;
`;

const Heading = styled.h1`
    color: ${props => props.theme.titleColor};
    font: 700 36px 'Josefin Sans', sans-serif;
`;

const SubHeading = styled.h2`
    color: ${props => props.theme.tagLineColor};
    font: 700 28px 'Josefin Sans', sans-serif;
`;