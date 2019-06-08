import React from 'react';
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
      <li className="nav-item" key="Projects">
        <a className="nav-link" href="#projects" target="" rel="noopener noreferrer">
          Projects
        </a>
      </li>,
      <li className="nav-item" key="Resume">
        <a className="nav-link" href="https://resume.com" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </li>,
    ]).toEqual(expect.arrayContaining(navbarItems));
  });
});
