import React from 'react';
import PropTypes from 'prop-types';

function NavbarItem(props) {
  const { text, link } = props;
  return (
    <li className="nav-item">
      <a className="nav-link" href={link}>{text}</a>
    </li>
  );
}

NavbarItem.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

NavbarItem.defaultProps = {
  text: '',
  link: '',
};

export default NavbarItem;
