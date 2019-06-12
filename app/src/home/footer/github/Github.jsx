import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Github(props) {
  const { text } = props;
  return (
    <a className="nav-link text-center" href="https://github.com/sebastianserrano">
      <FontAwesomeIcon icon={faGithub} />
      <p>{text}</p>
    </a>
  );
}

Github.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Github;
