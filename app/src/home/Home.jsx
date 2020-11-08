import React from 'react';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Footer from './footer/Footer';
import Certifications from './certifications/Certifications';

function Home() {
  return (
    <div>
      <Header text="Sebastian Serrano" />
      <Navbar />
      <Profile />
      <Certifications />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
