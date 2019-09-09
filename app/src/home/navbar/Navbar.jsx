import React from 'react';
import CreateNavbarItems from './navbarItem/navbarItemsFactory/CreateNavbarItems';

function Navbar() {
  const items = [{
    text: 'Projects',
    link: '#projects',
    target: '',
  },
  {
    text: 'Github',
    link: 'https://github.com/sebastianserrano',
    target: '_blank',
  },
  {
    text: 'Docker',
    link: 'https://hub.docker.com/u/sebastianserrano',
    target: '_blank',
  },
  {
    text: 'Resume',
    link: 'https://drive.google.com/file/d/1woAZdVHBT9SXY66xCU9rSgBBGfBgJI4L/view?usp=sharing',
    target: '_blank',
  },
  {
    text: 'Contact',
    link: '#contact',
    target: '',
  },
  ];

  const navItems = CreateNavbarItems(items);

  return (
    <div className="container-fluid" id="navbar">
      <ul className="row nav justify-content-center">
        {navItems}
      </ul>
    </div>
  );
}

export default Navbar;
