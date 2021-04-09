import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from 'styled-components';
 
 // import { useStaticQuery, graphql } from "gatsby"
 
 import Header from './header';
 import Footer from "./footer";
 import Menu from './menu';
 
 const Layout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false);
   
   return (
     <>
     <ThemeProvider theme={{ mode: 'dark' }}>
       <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
       <Menu isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
       <main>
         {children}
       </main>
       <Footer />
     </ThemeProvider>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout;
 