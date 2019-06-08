import React from 'react';
import CreateNavbarItems from './navbarItem/navbarItemsFactory/CreateNavbarItems';

function Navbar() {
  const items = [{
    text: 'Projects',
    link: '#projects',
    target: '',
  },
  {
    text: 'Resume',
    link: 'https://resume.com',
    target: '_blank',
  },
  {
    text: 'Github',
    link: 'https://github.com/sebastianserrano',
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
    <div className="container-fluid">
      <ul className="row nav justify-content-center">
        {navItems}
      </ul>
    </div>
  );
}

export default Navbar;
