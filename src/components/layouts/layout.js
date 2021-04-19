import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@fontsource/quicksand';
import '@fontsource/rock-salt';
import '@fontsource/josefin-sans';

// import { useStaticQuery, graphql } from "gatsby"

import Header from './header';
import Footer from './footer';
import Menu from './menu';

const Layout = (props) => {
  const { children, theme, setTheme } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Menu toggleMenu={toggleMenu} />
      <main>{children}</main>
      <Footer theme={theme} setTheme={setTheme}/>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
