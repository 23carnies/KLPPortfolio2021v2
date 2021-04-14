import React from 'react';
import styled from 'styled-components';
import ContactMe from '../layouts/emailjs';
import { Section } from '../layouts/section';
import { title, below } from '../utilities';

const Contact = props => {
  return (
    <ContactSection id="contact">
      <Headline>Let's work together!</Headline>
      <ContactMe />
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled(Section)`
  border-bottom: none;
`;

const Headline = styled.h3`
  text-align: center;
  /* font-family: ${title}; */
  color: ${props => props.theme.titleColor};
  margin: 2.5% 1% 1%;
  ${below.large`
        font-size: 2.4rem;
    `}
  ${below.medium`
        font-size: 2rem;
    `}
`;
