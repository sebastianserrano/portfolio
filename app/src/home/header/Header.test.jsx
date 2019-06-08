import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Header from './Header';

describe('Header', () => {
  it('Should render with text Sebastian Serrano', () => {
    const { getByText } = render(<Header text="Sebastian Serrano" />);

    const header = getByText('Sebastian Serrano');
    expect(header).toHaveTextContent('Sebastian Serrano');
  });
});
