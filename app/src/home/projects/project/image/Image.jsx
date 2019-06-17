import React from 'react';
import PropTypes from 'prop-types';

function Image(props) {
  const { imageInfo } = props;
  const { name, alt, link } = imageInfo;
  return (
    <div className="col-lg-5 col-md-5 col-sm-6 col-12">
      <div className="thumbnail-project-image">
        <a href={link}>
          <img className="project-image" src={name} alt={alt} />
        </a>
      </div>
    </div>
  );
}

Image.propTypes = {
  imageInfo: PropTypes.object.isRequired,
};

export default Image;
