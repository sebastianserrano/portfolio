import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import NavbarItem from './NavbarItem';

afterEach(cleanup);

describe('NavbarItem', () => {
  it('Should render with text', () => {
    const sampleText = 'Link';
    const sampleHrefId = '#Link';
    const { getByText } = render(<NavbarItem text={sampleText} href-id={sampleHrefId} />);

    const navbar = getByText(sampleText);
    expect(navbar).toHaveTextContent(sampleText);
  });
});
