import React, { useState } from "react";
import PropTypes from "prop-types";
 
 // import { useStaticQuery, graphql } from "gatsby"
 
 import HeaderNav from './nav';
 import Footer from "./footer"
 
 const Layout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false);
   
   return (
     <>
       <HeaderNav isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
       <main>
         {children}
       </main>
       <Footer />
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout;
 