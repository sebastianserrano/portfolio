import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './navbarItem/NavbarItem';

function Navbar(props) {
  const { navItems } = props;
  return (
    <div className="container-fluid">
      <ul className="nav justify-content-center">
        {navItems}
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.instanceOf(NavbarItem)),
};

Navbar.defaultProps = {
  navItems: [],
};

export default Navbar;
