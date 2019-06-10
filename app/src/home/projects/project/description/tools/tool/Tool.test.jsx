import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Tool from './Tool';

describe('Tool', () => {
  it('Should render with text', () => {
    const sampleText = 'I am an example tool';
    const { getByText } = render(<Tool text={sampleText} />);

    const tool = getByText(sampleText);
    expect(tool).toHaveTextContent(sampleText);
  });
});
