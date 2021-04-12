import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import { Flex } from '../utilities';
import { NavItem } from './menu';
import Logo from '../../images/logo.svg'
import { Hamburger } from '../utilities/Icons';

const Header = ({ isNavOpen, setNavOpen }) => {
    return (
        <header>
            <Nav>
                <div><Img src={Logo} alt="KLP logo" /></div>
                <div>
                    <ul>
                        <NavItem><Link to="/#about">About</Link></NavItem>
                        <NavItem><Link to="/#projects">Projects</Link></NavItem>
                        <NavItem><Link to="/#contact">Contact</Link></NavItem>
                    </ul>
                </div>
                <div><Resume href="/resume.pdf">Résumé</Resume></div>
                <div><Hamburger onClick={() => setNavOpen(!isNavOpen)}/></div>
            </Nav>
        </header>
    )
}

export default Header;

const Nav = styled.nav`
    ${Flex({ai:'center',jc:'space-around'})};
    background-color: ${props => props.theme.componentBackground};
`;

const Img = styled.img`
    width: 100px;
    border-radius: 50%;
`;

const Resume = styled.a`
    color: ${props => props.theme.fontColor};
`;