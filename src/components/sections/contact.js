import React from 'react';
import styled from 'styled-components';
import ContactMe from '../layouts/emailjs';
import { Section } from '../layouts/section';
import { title, below } from '../utilities';
import { Headline } from '../elements/headings';

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

