import Tool from '../tool/Tool';

function createToolsItems(listItems) {
  return listItems.map((item) => {
    return Tool({ text: item });
  });
}

export default createToolsItems;
