import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import CreateSkillItems from './CreateSkillItems';

describe('Skill Items Factory', () => {
  it('Should return an array of Skill Items from an array of attribute objects', () => {
    const items = ['Example 1', 'Example 2'];
    const skills = CreateSkillItems(items);

    expect([
      <li className="skill-item list-inline-item" key="Example 1">
        <FontAwesomeIcon icon={faSquare} />
        Example 1
      </li>,
      <li className="skill-item list-inline-item" key="Example 2">
        <FontAwesomeIcon icon={faSquare} />
        Example 2
      </li>,
    ]).toEqual(expect.arrayContaining(skills));
  });
});
