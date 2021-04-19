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
  
  

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}  theme={theme} setTheme={setTheme} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
