import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Description from './Description';

describe('Description', () => {
  it('Should render with text', () => {
    const sampleText = 'I am an example description';
    const { getByText } = render(<Description text={sampleText} />);

    const title = getByText(sampleText);
    expect(title).toHaveTextContent(sampleText);
  });
});
