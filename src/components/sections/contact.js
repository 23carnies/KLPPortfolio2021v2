import React from 'react';
import styled from 'styled-components';
import ContactMe from '../layouts/emailjs';
import { Section } from '../layouts/section';
import { Flex, title, yellow3, below } from '../utilities';


const Contact = (props) => {
    return ( 
            <Section id="contact">
                <Headline>Let's work together!</Headline>
                <ContactMe />
            </Section>
     );
}
 
export default Contact;

const Box = styled.div`
    ${Flex({fd:'column'})};
    text-align: center;
    margin-bottom: 55px;
`;

const Headline = styled.h3`
    text-align: center;
    font-family: ${title};
    color: ${props => props.theme.titleColor};
    margin: 2.5% 1% 1%;
    ${below.large`
        font-size: 2.4rem;
    `}
    ${below.medium`
        font-size: 2rem;
    `}
`;