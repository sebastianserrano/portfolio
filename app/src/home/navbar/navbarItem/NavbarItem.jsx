import React from 'react';
import PropTypes from 'prop-types';

function NavbarItem(props) {
  const { text, link, target } = props;
  return (
    <li className="nav-item" key={text}>
      <a className="nav-link" target={target} href={link} rel="noopener noreferrer">{text}</a>
    </li>
  );
}

NavbarItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default NavbarItem;
