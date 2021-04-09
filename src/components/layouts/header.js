import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

const Header = ({ isNavOpen, setNavOpen }) => {
    return (
        <header>
            <nav>
                <div>Logo</div>
                <div>
                    <ul>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/#projects">Projects</Link></li>
                        <li><Link to="/#contact">Contact</Link></li>
                    </ul>
                </div>
                <div>Résumé</div>
                <div>Hamburger</div>
            </nav>
        </header>
    )
}

export default Header;