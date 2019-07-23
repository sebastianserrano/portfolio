import React from 'react';
import Tool from '../Tool';

function createToolsItems(toolsList) {
  return toolsList.map(item => <Tool text={item} key={item} />);
}

export default createToolsItems;
