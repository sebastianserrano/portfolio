import React from 'react';
import PropTypes from 'prop-types';

function Description(props) {
  const { text } = props;
  return (
    <div className="row justify-content-center">
      <h6 className="col-lg-7 col-sm-7 col-md-7 col-9 text-center">{text}</h6>
    </div>
  );
}

Description.propTypes = {
  text: PropTypes.string,
};

Description.defaultProps = {
  text: 'Description',
};

export default Description;
