import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

function Tool(props) {
  const { text } = props;
  return (
    <div className="col-lg-4 col-sm-6 col-6">
      <div className="row">
        <div className="tool-icon col-lg-1 col-md-1 col-sm-1 col-1" key={text}>
          <FontAwesomeIcon icon={faSquare} />
        </div>
        <div className="tool-text col-lg-9 col-md-5 col-sm-9 col-9">
          {text}
        </div>
      </div>
    </div>
  );
}

Tool.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tool;
