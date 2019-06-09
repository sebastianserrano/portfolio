import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Topic from './Topic';

describe('Topic', () => {
  it('Should render with text', () => {
    const sampleText = 'Topic';
    const { getByText } = render(<Topic text="Topic" />);

    const topic = getByText(sampleText);
    expect(topic).toHaveTextContent(sampleText);
  });
});
