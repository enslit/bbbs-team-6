import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

FooterMenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function FooterMenuItem({ label, to }) {
  return (
    <li className="footer__list-item">
      <NavLink to={to} className="footer__list-link">
        {label}
      </NavLink>
    </li>
  );
}

export default FooterMenuItem;
