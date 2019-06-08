import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Title from './Title';

afterEach(cleanup);

describe('Title', () => {
  it('Should render with text', () => {
    const sampleText = 'Fullstack Web Developer';
    const { getByText } = render(<Title text={sampleText} />);

    const title = getByText(sampleText);
    expect(title).toHaveTextContent(sampleText);
  });
});
