import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

function Skill(props) {
  const { text } = props;
  return (
    <div className="skill-item col-lg-3 col-sm-3 col-6" key={text}>
      <FontAwesomeIcon icon={faSquare} />
      <p>{text}</p>
    </div>
  );
}

Skill.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Skill;
