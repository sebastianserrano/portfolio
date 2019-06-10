import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Image from './Image';

describe('Image', () => {
  it('Should render gracefully', () => {
    const props = {
      name: 'image.png',
      alt: 'My Image',
      link: 'https://example.com',
    };
    const { container } = render(<Image imageInfo={props} />);

    const image = container.querySelector('.project-image');
    expect(image).toBeInTheDocument();
  });
});
