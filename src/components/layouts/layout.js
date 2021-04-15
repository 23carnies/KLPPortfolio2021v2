import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@fontsource/quicksand';
import '@fontsource/rock-salt';
import '@fontsource/josefin-sans';
import { useSpring, animated } from 'react-spring';

// import { useStaticQuery, graphql } from "gatsby"

import Header from './header';
import Footer from './footer';
import Menu from './menu';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const menuAnime = useSpring({
    transform: isMenuOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%,0,0) scale(0.6)`,
  });

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Menu toggleMenu={toggleMenu} menuAnime={menuAnime} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
