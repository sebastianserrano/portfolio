import React from 'react';
import PropTypes from 'prop-types';
import Topic from './topic/Topic';
import List from './list/List';

function Skillset(props) {
  const { topic, skills } = props;
  return (
    <div className="row skillset">
      <div className="container-fluid">
        <Topic text={topic} />
        <List list={skills} />
      </div>
    </div>
  );
}

Skillset.propTypes = {
  topic: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Skillset;
