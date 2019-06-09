import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  const { text } = props;
  return (
    <h4 className="text-center">{text}</h4>
  );
}

Title.propTypes = {
  text: PropTypes.string,
};

Title.defaultProps = {
  text: 'Title',
};

export default Title;
