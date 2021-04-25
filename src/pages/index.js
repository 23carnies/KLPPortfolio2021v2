import React, { useState } from 'react';
import Layout from '../components/layouts/layout';
import Intro from '../components/sections/intro';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import LightningTalks from '../components/sections/lightning'
import Contact from '../components/sections/contact';
import { themes } from '../components/utilities';
import { Helmet } from 'react-helmet';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../GlobalStyle';

export default function Home() {
  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [theme, setTheme] = useState('light');
  


  return (
    <>
    <Helmet>
      <html lang="en" dir="ltr" />
      <meta charSet="utf-8" />
      <title>Karen Lobin Perkins' Portfolio</title>
      <link rel="canonical" href="https://www.karenlobinperkins.com" />
    </Helmet>
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Layout theme={theme} setTheme={setTheme}>
        <Intro />
        <Hero />
        <About />
        <Projects />
        <LightningTalks />
        <Contact />
      </Layout>
    </ThemeProvider>
    </>
  );
}
