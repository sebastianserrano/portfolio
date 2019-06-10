import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

function Email(props) {
  const { text } = props;
  return (
    <a className="text-center" href="mailto:${text}">
      <FontAwesomeIcon icon={faAt} />
      {text}
    </a>
  );
}

Email.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Email;
