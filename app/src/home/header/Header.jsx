import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { text } = props;
  return (
    <div className="container-fluid" id="header">
      <div className="row justify-content-center">
        <header>
          <h3>{text}</h3>
          <hr />
        </header>
      </div>
    </div>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
