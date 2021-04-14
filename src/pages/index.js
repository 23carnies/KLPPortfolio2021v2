import React, { useState } from 'react';
import Layout from '../components/layouts/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
import Intro from '../components/sections/intro';
import { themes } from '../components/utilities'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../Global';

export default function Home() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Layout theme={theme} setTheme={setTheme}>
        <Intro />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>

  );
}
