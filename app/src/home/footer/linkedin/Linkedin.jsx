import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Linkedin(props) {
  const { text } = props;
  return (
    <a className="nav-link text-center" href="https://www.linkedin.com/in/sebastian-serrano-3214a9172/">
      <FontAwesomeIcon icon={faLinkedin} />
      <p>{text}</p>
    </a>
  );
}

Linkedin.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Linkedin;
