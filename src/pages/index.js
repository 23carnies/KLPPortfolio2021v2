import React from 'react';
import Layout from '../components/layouts/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}
