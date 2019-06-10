import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

function Tool(props) {
  const { text } = props;
  return (
    <li className="tool-item list-inline-item" key={text}>
      <FontAwesomeIcon icon={faSquare} />
      {text}
    </li>
  );
}

Tool.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tool;
