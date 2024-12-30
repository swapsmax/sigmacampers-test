import React from 'react';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Packages />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home; 