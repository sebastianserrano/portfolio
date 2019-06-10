import React from 'react';
import NavbarItem from '../NavbarItem';

function createNavbarItems(navItems) {
  return navItems.map((item) => {
    return <NavbarItem text={item.text} link={item.link} target={item.target} key={item.text} />;
  });
}

export default createNavbarItems;
