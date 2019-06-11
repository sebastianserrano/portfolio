import React from 'react';
import Skill from '../Skill';

function createListItems(listItems) {
  return listItems.map((item) => {
    return <Skill text={item} key={item} />;
  });
}

export default createListItems;
