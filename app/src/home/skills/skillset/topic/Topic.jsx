import React from 'react';
import PropTypes from 'prop-types';

function Topic(props) {
  const { text } = props;
  return (
    <h6 className="topic">{text}</h6>
  );
}

Topic.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Topic;
