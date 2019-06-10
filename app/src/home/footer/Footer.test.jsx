import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer', () => {
  it('Should render gracefully', () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector('#footer');
    expect(footer).toBeInTheDocument();
  });
});
