import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Description from './Description';

describe('Description', () => {
  it('Should render gracefully', () => {
    const props = {
      name: 'Example',
      link: 'https://example.com',
      descriptionText: 'Description',
      tools: ['Item1', 'Item2'],
    };
    const { container } = render(<Description description={props} />);

    const description = container.querySelector('.project-description');
    expect(description).toBeInTheDocument();
  });
});
