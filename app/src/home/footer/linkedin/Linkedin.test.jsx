import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Linkedin from './Linkedin';

describe('Linkedin', () => {
  it('Should render with text', () => {
    const sampleText = 'example@gmail.com';
    const { getByText } = render(<Linkedin text="example@gmail.com" />);

    const linkedin = getByText(sampleText);
    expect(linkedin).toHaveTextContent(sampleText);
  });
});
