import React from 'react';
import PropTypes from 'prop-types';
import CreateSkillItems from './listItemsFactory/CreateSkillItems';

function List(props) {
  const { list } = props;
  const skills = CreateSkillItems(list);
  return (
    <ul className="skill-list list-inline">
      {skills}
    </ul>
  );
}

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
