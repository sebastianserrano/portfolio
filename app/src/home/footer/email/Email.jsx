import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

function Email(props) {
  const { text } = props;
  return (
    <a className="nav-link text-center" href="mailto:${text}">
      <FontAwesomeIcon icon={faAt} />
      <p>{text}</p>
    </a>
  );
}

Email.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Email;
