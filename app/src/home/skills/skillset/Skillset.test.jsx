import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Skillset from './Skillset';

describe('Skillset', () => {
  it('Should render gracefully', () => {
    const { container } = render(<Skillset topic="Example" skills={['Item1', 'Item2']} />);

    const skillset = container.querySelector('.skillset');
    expect(skillset).toBeInTheDocument();
  });
});
