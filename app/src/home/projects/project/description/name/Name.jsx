import React from 'react';
import PropTypes from 'prop-types';

function Name(props) {
  const { text, link } = props;
  return (
    <a className="project-name" href={link}>{text}</a>
  );
}

Name.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Name;
