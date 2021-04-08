import React from 'react';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin';
import { FaRegFilePdf } from '@react-icons/all-files/fa/FaRegFilePdf';
import { BiMailSend } from '@react-icons/all-files/bi/BiMailSend';
import { IconContext } from '@react-icons/all-files/';
import { white, box_shadow2, Flex, below } from '../utilities';
import styled, { css } from 'styled-components';


export const LgGithub = () => {
  return ( 
    <IconContext.Provider
      value={{ size: '45px', color: `${white}` }}
    >
      <IconCircle bkColor="git">
        <FiGithub />
      </IconCircle>
    </IconContext.Provider>
   );
}
 
export const LgLinkedIn = () => {
  return ( 
    <IconContext.Provider
      value={{ size: '45px', color: `${white}` }}
    >
      <IconCircle bkColor="link">
        <AiOutlineLinkedin />
      </IconCircle>
    </IconContext.Provider>
   );
}
 
export const LgPDF = () => {
  return ( 
    <IconContext.Provider
      value={{ color: `${white}`, size: '45px' }}
      
    >
      <IconCircle>
        <FaRegFilePdf />
      </IconCircle>
    </IconContext.Provider>
   );
}

export const LgMail = () => {
  return (
    <IconContext.Provider 
      value={{ size: '45px', color: `${white}` }}
    >
      <IconCircle>
        <BiMailSend />
      </IconCircle>
    </IconContext.Provider>
  )
}

export const IconCircle = styled.div`
    background: ${({bkColor}) => ((bkColor === 'git') ? '#6e5494' : (bkColor === 'link') ? '#0072b1' : '#ed2224')};
    border-radius: 50%;
    box-shadow: ${box_shadow2};
    width: 80px;
    height: 80px;
    ${Flex};
    margin: 30px;
    border: 1px solid white;
    ${below.large`
      margin: 20px;
    `}
    ${below.medium`
        width: 60px;
        height: 60px;
    `}
    ${below.small`
        width: 80px;
        height: 80px;
    `}

    ${props => props.contact && css`
        margin: 20px;
        ${below.large`
          margin: 15px;
        `}
    `}
`;