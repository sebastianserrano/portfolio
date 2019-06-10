import React from 'react';
import PropTypes from 'prop-types';

function Image(props) {
  const { imageInfo } = props;
  const { name, alt, link } = imageInfo;
  return (
    <div className="col">
      <a href={link}>
        <img className="project-image" src={name} alt={alt} />
      </a>
    </div>
  );
}

Image.propTypes = {
  imageInfo: PropTypes.object.isRequired,
};

export default Image;
