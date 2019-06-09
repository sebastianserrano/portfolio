import React from 'react';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import Skills from './skills/Skills';

function Home() {
  return (
    <div>
      <Header text="Sebastian Serrano" />
      <Navbar />
      <Profile />
      <Skills />
    </div>
  );
}

export default Home;
