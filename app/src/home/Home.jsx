import React from 'react';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';

function Home() {
  return (
    <div>
      <Header text="Sebastian Serrano" />
      <Navbar />
      <Profile />
    </div>
  );
}

export default Home;
