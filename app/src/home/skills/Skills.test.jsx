import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Skills from './Skills';

describe('Skills', () => {
  it('Should render gracefully', () => {
    const { container } = render(<Skills />);

    const skills = container.querySelector('#skills');
    expect(skills).toBeInTheDocument();
  });
});
