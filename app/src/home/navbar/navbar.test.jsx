import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Navbar from './Navbar';

afterEach(cleanup);

describe('Navbar', () => {
  it('Should render gracefully', () => {
    const { container } = render(<Navbar />);

    const navbar = container.querySelector('.nav');
    expect(navbar).toBeInTheDocument();
  });
});
