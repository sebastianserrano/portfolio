import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

function Tool(props) {
  const { text } = props;
  return (
    <div className="tool-item col-lg-4 col-md-6 col-sm-6 col-12" key={text}>
      <FontAwesomeIcon icon={faSquare} />
      {text}
    </div>
  );
}

Tool.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tool;
