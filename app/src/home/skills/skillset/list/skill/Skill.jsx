import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

function Skill(props) {
  const { text } = props;
  return (
    <li className="skill-item list-inline-item" key={text}>
      <FontAwesomeIcon icon={faSquare} />
      {text}
    </li>
  );
}

Skill.propTypes = {
  text: PropTypes.string,
};

Skill.defaultProps = {
  text: 'Skill',
};

export default Skill;
