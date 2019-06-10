import React from 'react';
import PropTypes from 'prop-types';

function Info(props) {
  const { text } = props;
  return (
    <p className="project-info">{text}</p>
  );
}

Info.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Info;
