import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Github from './Github';

describe('Github', () => {
  it('Should render with text', () => {
    const sampleText = 'example@gmail.com';
    const { getByText } = render(<Github text="example@gmail.com" />);

    const github = getByText(sampleText);
    expect(github).toHaveTextContent(sampleText);
  });
});
