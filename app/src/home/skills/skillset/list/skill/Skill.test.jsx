import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Skill from './Skill';

describe('Skill', () => {
  it('Should render with text', () => {
    const sampleText = 'I am an example description';
    const { getByText } = render(<Skill text={sampleText} />);

    const skill = getByText(sampleText);
    expect(skill).toHaveTextContent(sampleText);
  });
});
