import React from 'react';
import PropTypes from 'prop-types';
import Image from './image/Image';
import Description from './description/Description';

function Project(props) {
  const { imageInfo, description } = props;
  return (
    <div className="row project">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <Image imageInfo={imageInfo} />
          <Description description={description} />
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  imageInfo: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
};

export default Project;
