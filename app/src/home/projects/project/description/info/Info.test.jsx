import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Info from './Info';

describe('Info', () => {
  it('Should render with text Example Project', () => {
    const { getByText } = render(<Info text="Example Project" />);

    const header = getByText('Example Project');
    expect(header).toHaveTextContent('Example Project');
  });
});
