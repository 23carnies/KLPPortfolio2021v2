import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { below, Flex } from '../utilities';
import Logo from '../../images/clearLogo.png';
import { Hamburger } from '../utilities/Icons';

const Header = ({ isNavOpen, setNavOpen }) => {
  return (
    <Head>
      <Nav>
        <div>
          <Img src={Logo} alt="KLP logo" />
        </div>
        <List>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </List>
        <div>
          <Resume href="/resume.pdf">Résumé</Resume>
        </div>
        <div>
          <Hamburger onClick={() => setNavOpen(!isNavOpen)} />
        </div>
      </Nav>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 15;
`;

const Nav = styled.nav`
  ${Flex({ ai: 'center', jc: 'space-around' })};
  background-color: ${props => props.theme.pageBackground};
  height: 13vh;
`;

const Img = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const List = styled.ul`
  ${Flex};
  ${below.large`
        display: none;
    `}

  li {
    list-style-type: none;
  }

  a {
    font: 24px 'Quicksand', sans-serif;
    color: ${props => props.theme.fontColor};
    padding: 0 18px;
    & :hover {
      border-bottom: 3px solid ${props => props.theme.tagLineColor};
    }
  }
`;

const Resume = styled.a`
  font: 24px 'Quicksand', sans-serif;
  color: ${props => props.theme.fontColor};
  padding: 0 18px;

  & :hover {
    border-bottom: 3px solid ${props => props.theme.tagLineColor};
  }
`;
