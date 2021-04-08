import React from 'react';
import Layout from '../components/layouts/layout';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
import Footer from '../components/layouts/footer';

export default function Home() {
  return (
    <Layout>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}
