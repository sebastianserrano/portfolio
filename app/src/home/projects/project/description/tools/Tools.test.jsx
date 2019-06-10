import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Tools from './Tools';

describe('Tools', () => {
  it('Should render gracefully', () => {
    const items = ['javascript', 'postgresql'];
    const { container } = render(<Tools list={items} />);

    const tools = container.querySelector('.project-tools');
    expect(tools).toBeInTheDocument();
  });
});
