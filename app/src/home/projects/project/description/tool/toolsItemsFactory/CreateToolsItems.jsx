import React from 'react';
import Tool from '../Tool';

function createToolsItems(toolsList) {
  return toolsList.map((item) => {
    return <Tool text={item} key={item} />;
  });
}

export default createToolsItems;
