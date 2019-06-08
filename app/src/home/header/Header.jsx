import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { text } = props;
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <header>{text}</header>
      </div>
    </div>
  );
}

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'Header',
};

export default Header;