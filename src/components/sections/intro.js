import React from 'react';
import { Section } from '../layouts/section';
import { below, Flex } from '../utilities';
import { Heading, SubHeading } from '../elements/headings';
import styled from 'styled-components';
import Iceland from '../../images/klo-iceland.jpg';

const Intro = () => {
  return (
    <SectionIntro>
      <Image src={Iceland} alt="Karen in Iceland" />
      <TextBox>
        <Heading>Hi! I'm Karen</Heading>
        <SubHeading>
          I am a software engineer based in Atlanta, focused on Front End design
          in ReactJS, useability, and accessability.
        </SubHeading>
      </TextBox>
    </SectionIntro>
  );
};

export default Intro;

const SectionIntro = styled(Section)`
  ${Flex};
  border-bottom: 10px solid ${props => props.theme.tagLineColor};
  padding-bottom: 2%;
  ${below.small`
    ${Flex({fd:'column'})};
  `}
`;

const Image = styled.img`
  border-radius: 60%;
  width: 30%;
  margin: 1%;
  border: 2px inset ${props => props.theme.pageBackground};
  ${below.small`
    width: 80%;
    margin: 5% 0;
  `}
`;

const TextBox = styled.div`
  width: 50%;
  padding: 2%;
  ${below.small`
    width: 80%;
    padding: 0 1%;
  `}
`;


