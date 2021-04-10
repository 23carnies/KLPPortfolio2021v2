import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

import { Flex, yellow3, grey, mauve, smLabel, white, label, box_shadow4, btn_active, below } from '../utilities';

export default function ContactMe() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('process.env.YOUR_SERVICE_ID', 'process.env.YOUR_TEMPLATE_ID', e.target, 'process.env.YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Form className="contact-form" onSubmit={sendEmail}>
      <Input type="hidden" name="contact_number"/>
      <Label>Name</Label>
      <Input type="text" name="user_name" placeholder="Your name..."/>
      <Label>Email</Label>
      <Input type="email" name="user_email" placeholder="Your email..."/>
      <Label>Message</Label>
      <Input name="message" placeholder="Your message..." />
      <Input type="submit" value="Send" />
    </Form>
  );
}

const Form = styled.form`
    ${Flex({fd:'column'})};
    padding: 15px;
    width: 100%;
    

`;

const Input = styled.input`
    max-width: 750px;
    width: ${({type}) => (type === 'submit') ? '13%' : '50%'};
    background: ${({type}) => (type === 'submit') ? `${yellow3}` : `${white}`};
    color: ${({type}) => (type === 'submit' ? `${mauve}` : `${grey}`)};
    font: ${label};
    padding: 1%;
    margin: 1.23%;
    border-radius: ${({type}) => (type === 'submit' ? '12px' : '5px')};
    box-shadow: ${({type}) => (type === 'submit' ? `${box_shadow4}` : 'none')};
    ${below.xLarge`
      max-width: 650px;
    `}
    ${below.large`
      max-width: 500px;
    `}
    ${below.medium`
      font: ${smLabel};
      padding: 0.8%;
      width: ${({type}) => (type === 'submit') ? '23%' : '90%'};
    `}
    :hover {
        box-shadow: ${({type}) => (type === 'submit' ? `${btn_active}` : 'none')};

    }

    
`;

const Label = styled.label`
    color: ${white};
    font: ${label};
    ${below.medium`
      font: ${smLabel};
    `}
`;