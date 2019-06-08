import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Title from './Title';

describe('Title', () => {
  it('Should render with text', () => {
    const sampleText = 'Fullstack Web Developer';
    const { getByText } = render(<Title />);

    const title = getByText(sampleText);
    expect(title).toHaveTextContent(sampleText);
  });
});
