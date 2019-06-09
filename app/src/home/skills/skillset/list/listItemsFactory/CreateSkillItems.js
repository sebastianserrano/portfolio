import Skill from '../skill/Skill';

function createListItems(listItems) {
  return listItems.map((item) => {
    return Skill({ text: item });
  });
}

export default createListItems;
