import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@fontsource/quicksand';
import '@fontsource/rock-salt';
import '@fontsource/josefin-sans';
// import { useStaticQuery, graphql } from "gatsby"

import Header from './header';
import Footer from './footer';
import Menu from './menu';

const Layout = props => {
  const { children } = props;
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
      <Menu isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
