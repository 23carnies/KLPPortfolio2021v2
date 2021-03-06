import React from 'react';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
import { FaRegFilePdf } from '@react-icons/all-files/fa/FaRegFilePdf';
import { BiMailSend } from '@react-icons/all-files/bi/BiMailSend';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { BiMoon } from '@react-icons/all-files/bi/BiMoon';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { IconContext } from '@react-icons/all-files/';
import { white, box_shadow2, Flex, below } from '../utilities';
import styled, { css } from 'styled-components';

export const Close = () => {
  return (
    <IconContext.Provider
      value={{ size: '30px', color: `${props => props.theme.fontColor}` }}
    >
      <AiOutlineClose />
    </IconContext.Provider>
  );
};

export const Hamburger = () => {
  return (
    <IconContext.Provider
      value={{ size: '30px', color: '#b5d6b2' }}
    >
      <GiHamburgerMenu />
    </IconContext.Provider>
  );
};

export const Sun = () => {
  return (
    <IconContext.Provider value={{ size: '35px', color: `${props => props.theme.titleColor}` }}>
      <IconCircle bkColor='yellow'>
        <FiSun />
      </IconCircle>
    </IconContext.Provider>
  );
};

export const Moon = () => {
  return (
    <IconContext.Provider value={{ size: '35px', color: `${props => props.theme.titleColor}` }}>
      <IconCircle bkColor="moon">
        <BiMoon />
      </IconCircle>
    </IconContext.Provider>
  );
};

export const LgGithub = () => {
  return (
    <IconContext.Provider value={{ size: '45px', color: `${white}` }}>
      <IconCircle bkColor="git">
        <FiGithub />
      </IconCircle>
    </IconContext.Provider>
  );
};

export const LgLinkedIn = () => {
  return (
    <IconContext.Provider value={{ size: '45px', color: `${white}` }}>
      <IconCircle bkColor="link">
        <AiOutlineLinkedin />
      </IconCircle>
    </IconContext.Provider>
  );
};

export const LgPDF = () => {
  return (
    <IconContext.Provider value={{ color: `${white}`, size: '45px' }}>
      <IconCircle bkColor="res">
        <FaRegFilePdf />
      </IconCircle>
    </IconContext.Provider>
  );
};

export const LgMail = () => {
  return (
    <IconContext.Provider value={{ size: '45px', color: `${white}` }}>
      <IconCircle>
        <BiMailSend />
      </IconCircle>
    </IconContext.Provider>
  );
};

// const Circle = ({ ...style }) => <div style={style}></div>

export const IconCircle = styled.div`
  background: ${({ bkColor }) =>
    bkColor === 'git' ? '#6e5494' : bkColor === 'link' ? '#0072b1' : bkColor === 'res' ? '#ed2224' : bkColor === 'sun' ? 'yellow' : bkColor === 'moon' ? '#FFEEDD' : 'orange'};
  /* background-color: ${props => props.bkColor || 'orange'}; */
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

    ${props =>
    props.contact &&
    css`
      margin: 20px;
      ${below.large`
          margin: 15px;
        `}
    `}
`;
