import React, { useState } from 'react';
import styled from 'styled-components';
import kpLogo from '../../images/logo.svg';
import { Link } from 'gatsby';
import {
  Flex,
  navItem,
  below,
  white,
  nameplate,
  black,
  violet,
} from '../utilities';



const HeaderNav = () => {
    const [isNavOpen, setNavOpen] = useState(false);
      
    return ( 
        <Nav>
            <Logo src={kpLogo} alt="KP Phoenix Logo" />
            <Name to="/">Karen Lobin Perkins</Name>
            <Hamburger onClick={() => setNavOpen(!isNavOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <NavMenu isNavOpen={isNavOpen}>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </NavMenu>
        </Nav>
    );
}
 
export default HeaderNav;

const Nav = styled.div`
  padding: 2% 2rem;
  ${Flex({jc:'space-between',ai:'center',fw:'nowrap'})};
  background: ${black};
  height: 130px;
  ${below.xXLarge`
    ${Flex({ai:'center',fw:'nowrap'})}
    `}
  ${below.large`
    ${Flex({jc:'space-between',ai:'center',fw:'wrap'})};
    `}
  ${below.small`
    ${Flex({jc:'',ai:'center',fw:'wrap'})};
    height: 70px;
    padding-bottom: 5%;
  `}
  ${below.xXSmall`
    padding-top: 5%;
  `}
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
`;

const Logo = styled.img`
  width: 100px;
  ${below.xXLarge`
    margin-right: 20px;
    padding: 0 .5%;
    margin: 0 .5%;
  `}
  ${below.medium`
    width: 70px;
  `}
  ${below.small`
    display: none;
  `}
`;

const Name = styled(Link)`
  padding: 0 1%;
  margin: 0 1%;
  font: ${nameplate};
  text-decoration: none;
  ${below.xXLarge`
  font-size: 2.3rem;
  margin-left: -15px;
  padding: 0;
`}
${below.large`
  font-size: 3rem;
`}
  ${below.medium`
  font-size: 2rem;
  margin: 0 1%;
`}
  ${below.small`
    font-size: 1.6rem;
    margin: 0 1% 17% 1%;
  `}
  ${below.xXSmall`
    font-size: 1rem;
    margin: 0 0 17% 0;
  `}
`;

const NavMenu = styled.div`
  ${Flex({jc:'space-between',ai:'center'})};
  background: ${black};
  ${below.large`
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isNavOpen }) => (isNavOpen ? "100vh" : "0")};
    transition: all 0.3s ease-in;
    width: 100%;
    z-index: 100;
    padding: ${({ isNavOpen }) => (isNavOpen ? "1rem 40vw 100vh" : "0")};
    margin: 10px 0;
    background: linear-gradient(to top, #ff99cc 8%,  ${violet} 100%);
  `}
`;

const Hamburger = styled.div`
  ${Flex({fd:'column'})};
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 20px;

  span {
    height: 3px;
    width: 35px;
    background: ${white};
    margin-bottom: 8px;
    border-radius: 5px;
    ${below.small`
      height: 2px;
      width: 25px;
      margin-bottom: 6px;
    `};
    ${below.xXSmall`
      width: 20px;
    `}
  }
  ${below.large`
    ${Flex({fd:'column'})};
    margin-left: auto;
  `}
  ${below.small`
    margin: 0 1% 17% 1%;
  `}
  ${below.xXSmall`
    margin: 0 0 17% 0;
  `}
`;


const NavItem = styled(Link)`
  font: ${navItem};
  color: ${white};
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem 30px;
  cursor: pointer;

  :hover {
    border-bottom: 3px solid ${white};
    transition: 0.3s ease border;
  };

  ${below.xXLarge`
    font-size: 1.7rem;
    padding: 0 25px;
  `}
  ${below.large`
    font:${navItem};
    padding: 1rem;
  `}
  ${below.small`
    font-size: 1.7rem;
  `}
`;