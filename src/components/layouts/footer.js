import React from 'react';
import styled from 'styled-components';
import { Flex, below } from '../utilities';
import { LgGithub, LgLinkedIn, LgPDF } from '../utilities/Icons';

const Footer = () => {

  return (
    <Foot>
      <FootDiv>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/23carnies"
          aria-label="Github logo, opens new window to Karen's Github page"
        >
          <LgGithub />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/karen-lobin-perkins/"
          aria-label="LinkedIn logo, opens new window to Karen's LinkedIn page"
        >
          <LgLinkedIn />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="http://23carnies.com/karenLobinPerkinsRes.pdf"
          aria-label="link to Karen's resume in pdf format, opens new window"
        >
          <LgPDF />
        </a>
      </FootDiv>
      <FootP>
        © {new Date().getFullYear()} Karen Lobin Perkins
        {/* , Built with {` `} */}
      </FootP>
    </Foot>
  );
};

export default Footer;

const Foot = styled.footer`
  background: ${props => props.theme.pageBackground};
  ${Flex({ ai: 'center' })};
  max-height: 115px;
  ${below.small`
      ${Flex({ fd: 'column' })};
      max-height: 150px;
    `}
`;

const FootDiv = styled.div`
  margin-top: 10px;
  ${Flex({ jc: 'center' })};
  ${below.small`
    margin: 0 auto;
  `}
`;

const FootP = styled.p`
  color: ${props => props.theme.fontColor};
  margin: 50px 30px 0 auto;
  ${below.medium`
      font-size: .7rem;
    `}
  ${below.small`
      margin: -25px 0 0;
      padding-bottom: 10px;
    `}
`;
