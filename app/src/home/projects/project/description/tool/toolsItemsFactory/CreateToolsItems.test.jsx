import React from 'react';
import Tool from '../Tool';
import CreateToolsItems from './CreateToolsItems';

describe('Tools Items Factory', () => {
  it('Should return an array of Tool Items from an array of attribute objects', () => {
    const items = ['Example 1', 'Example 2'];
    const tools = CreateToolsItems(items);

    expect([
      <Tool text="Example 1" key="Example 1" />,
      <Tool text="Example 2" key="Example 2" />,
    ]).toEqual(expect.arrayContaining(tools));
  });
});
