import React from 'react';
import NavbarItem from '../NavbarItem';
import CreateNavbarItems from './CreateNavbarItems';

describe('Navbar Items Factory', () => {
  it('Should return an array of Navbar Items from an array of attribute objects', () => {
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
    ];
    const navbarItems = CreateNavbarItems(items);

    expect([
      <NavbarItem link="#projects" target="" text="Projects" key="Projects" />,
      <NavbarItem link="https://resume.com" target="_blank" text="Resume" key="Resume" />,
    ]).toEqual(expect.arrayContaining(navbarItems));
  });
});
