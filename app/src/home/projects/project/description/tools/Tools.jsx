import React from 'react';
import PropTypes from 'prop-types';
import CreateToolItems from './toolsItemsFactory/CreateToolsItems';

function Tools(props) {
  const { list } = props;
  const tools = CreateToolItems(list);
  return (
    <ul className="project-tools list-inline">
      {tools}
    </ul>
  );
}

Tools.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Tools;
