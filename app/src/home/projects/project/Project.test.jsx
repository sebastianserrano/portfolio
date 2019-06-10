import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Project from './Project';

describe('Project', () => {
  it('Should render gracefully', () => {
    const imageInfo = {
      name: 'image.png',
      alt: 'My Image',
      link: 'https://example.com',
    };
    const description = {
      name: 'Example',
      link: 'https://example.com',
      descriptionText: 'Description',
      tools: ['Item1', 'Item2'],
    };
    const { container } = render(<Project imageInfo={imageInfo} description={description} />);

    const skillset = container.querySelector('.project');
    expect(skillset).toBeInTheDocument();
  });
});
