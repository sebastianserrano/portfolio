import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Profile from './Profile';

afterEach(cleanup);

describe('Profile', () => {
  it('Should render gracefully', () => {
    const { container } = render(<Profile />);

    const profile = container.querySelector('#profile');
    expect(profile).toBeInTheDocument();
  });
});
