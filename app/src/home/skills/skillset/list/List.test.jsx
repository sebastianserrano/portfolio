import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import List from './List';

describe('List', () => {
  it('Should render gracefully', () => {
    const items = ['javascript', 'postgresql'];
    const { container } = render(<List list={items} />);

    const list = container.querySelector('.skill-list');
    expect(list).toBeInTheDocument();
  });
});
