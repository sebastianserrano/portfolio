import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Email from './Email';

describe('Email', () => {
  it('Should render with text', () => {
    const sampleText = 'example@gmail.com';
    const { getByText } = render(<Email text="example@gmail.com" />);

    const email = getByText(sampleText);
    expect(email).toHaveTextContent(sampleText);
  });
});
