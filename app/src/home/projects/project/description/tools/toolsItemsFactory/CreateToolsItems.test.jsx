import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import CreateToolsItems from './CreateToolsItems';

describe('Tools Items Factory', () => {
  it('Should return an array of Tool Items from an array of attribute objects', () => {
    const items = ['Example 1', 'Example 2'];
    const tools = CreateToolsItems(items);

    expect([
      <li className="tool-item list-inline-item" key="Example 1">
        <FontAwesomeIcon icon={faSquare} />
        Example 1
      </li>,
      <li className="tool-item list-inline-item" key="Example 2">
        <FontAwesomeIcon icon={faSquare} />
        Example 2
      </li>,
    ]).toEqual(expect.arrayContaining(tools));
  });
});
