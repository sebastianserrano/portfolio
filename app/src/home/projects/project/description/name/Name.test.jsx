import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Name from './Name';

describe('Name', () => {
  it('Should render with text Example Project', () => {
    const { getByText } = render(<Name text="Example Project" link="https://example.com" />);

    const header = getByText('Example Project');
    expect(header).toHaveTextContent('Example Project');
  });
});
