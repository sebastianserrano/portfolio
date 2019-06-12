import React from 'react';
import PropTypes from 'prop-types';
import Topic from './topic/Topic';
import CreateSkillItems from './skill/skillsFactory/CreateSkillItems';

function Skillset(props) {
  const { topic, skills } = props;
  const skillList = CreateSkillItems(skills);
  return (
    <div className="container-fluid skillset">
      <div className="row">
        <Topic text={topic} />
      </div>
      <div className="row">
        {skillList}
      </div>
    </div>
  );
}

Skillset.propTypes = {
  topic: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Skillset;
