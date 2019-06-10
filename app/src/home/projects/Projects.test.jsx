import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Projects from './Projects';

describe('Projects', () => {
  it('Should render gracefully', () => {
    const { container } = render(<Projects />);

    const projects = container.querySelector('#projects');
    expect(projects).toBeInTheDocument();
  });
});
