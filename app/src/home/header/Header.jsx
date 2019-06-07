import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { text } = props;
  return (
    <header>{text}</header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'Header',
};

export default Header;
