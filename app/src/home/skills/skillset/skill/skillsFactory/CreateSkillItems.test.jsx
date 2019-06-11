import React from 'react';
import Skill from '../Skill';
import CreateSkillItems from './CreateSkillItems';

describe('Skill Items Factory', () => {
  it('Should return an array of Skill Items from an array of attribute objects', () => {
    const items = ['Example 1', 'Example 2'];
    const skills = CreateSkillItems(items);

    expect([
      <Skill text="Example 1" key="Example 1" />,
      <Skill text="Example 2" key="Example 2" />,
    ]).toEqual(expect.arrayContaining(skills));
  });
});
