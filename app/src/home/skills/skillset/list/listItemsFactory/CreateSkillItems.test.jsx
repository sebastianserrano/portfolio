import React from 'react';
import CreateSkillItems from './CreateSkillItems';

describe('Skill Items Factory', () => {
  it('Should return an array of Skill Items from an array of attribute objects', () => {
    const items = ['Example 1', 'Example 2'];
    const skills = CreateSkillItems(items);

    expect([
      <li className="skill-item" key="Example 1">
        Example 1
      </li>,
      <li className="skill-item" key="Example 2">
        Example 2
      </li>,
    ]).toEqual(expect.arrayContaining(skills));
  });
});
