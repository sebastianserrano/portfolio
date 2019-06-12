import React from 'react';
import PropTypes from 'prop-types';
import Image from './image/Image';
import Description from './description/Description';

function Project(props) {
  const { imageInfo, description } = props;
  const { background } = description;
  return (
    <div className="row justify-content-center align-content-center project" id={background}>
      <Image imageInfo={imageInfo} />
      <Description description={description} />
    </div>
  );
}

Project.propTypes = {
  imageInfo: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
};

export default Project;
