import React from 'react';
import '../../App.css';

import Navbar from '../Navbar';

import Cards from '../Cards';
import LandingPage from '../LandingPage';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';

function Home() {
  return (
    <div id='start'>
      <Navbar />
      <LandingPage />
      <About />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;