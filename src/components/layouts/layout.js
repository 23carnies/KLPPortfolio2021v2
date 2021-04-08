import React from "react";
 import PropTypes from "prop-types";
 // import { useStaticQuery, graphql } from "gatsby"
 
 import HeaderNav from './nav';
 import Footer from "./footer"
 
 const Layout = ({ children }) => {
   
   return (
     <>
       <HeaderNav />
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
 