import React from 'react';
import PropTypes from 'prop-types';
import Name from './name/Name';
import Info from './info/Info';
import Tools from './tools/Tools';

function Description(props) {
  const { description } = props;
  const { name, link, descriptionText, tools } = description;
  return (
    <div className="col project-description">
      <article>
        <Name text={name} link={link} />
        <Info text={descriptionText} />
        <Tools list={tools} />
      </article>
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.object.isRequired,
};

export default Description;
