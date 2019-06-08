import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Title from './Title';

describe('Title', () => {
  it('Should render with text', () => {
    const sampleText = 'Title';
    const { getByText } = render(<Title text="Title" />);

    const title = getByText(sampleText);
    expect(title).toHaveTextContent(sampleText);
  });
});
