import React from 'react';
import Project from '../project/Project';
import CreateProjects from './CreateProjects';

describe('Tools Items Factory', () => {
  it('Should return an array of Tool Items from an array of attribute objects', () => {
    const items = {
      projects: [
        {
          imageInfo: {
            name: 'image.png',
            alt: 'My Image',
            link: 'https://example.com',
          },
          description: {
            name: 'Example',
            link: 'https://example.com',
            descriptionText: 'Description',
            tools: ['Item1', 'Item2'],
          },
        },
      ],
    };

    const projects = CreateProjects(items);

    expect([
      <Project description={{ descriptionText: 'Description', link: 'https://example.com', name: 'Example', tools: ['Item1', 'Item2'] }} imageInfo={{ alt: 'My Image', link: 'https://example.com', name: 'image.png' }} key='Example' />,
    ]).toEqual(expect.arrayContaining(projects));
  });
});
