import React from 'react';
import PropTypes from 'prop-types';

function Description(props) {
  const { text } = props;
  return (
    <p className="card-text">{text}</p>
  );
}

Description.propTypes = {
  text: PropTypes.any.isRequired,
};

export default Description;
