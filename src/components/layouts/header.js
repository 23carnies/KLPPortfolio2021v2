import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import { Flex } from '../utilities';
import { NavItem } from './menu';

const Header = ({ isNavOpen, setNavOpen }) => {
    return (
        <header>
            <Nav>
                <div>Logo</div>
                <div>
                    <ul>
                        <NavItem><Link to="/#about">About</Link></NavItem>
                        <NavItem><Link to="/#projects">Projects</Link></NavItem>
                        <NavItem><Link to="/#contact">Contact</Link></NavItem>
                    </ul>
                </div>
                <div>Résumé</div>
                <div>Hamburger</div>
            </Nav>
        </header>
    )
}

export default Header;

const Nav = styled.nav`
    ${Flex({ai:'center',jc:'space-around'})};
    background-color: blue;
`;