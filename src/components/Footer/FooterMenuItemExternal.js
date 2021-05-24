import React from 'react';
import PropTypes from 'prop-types';

FooterMenuItemExternal.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
};

function FooterMenuItemExternal({ to, label }) {
  return (
    <li className="footer__list-item">
      <a
        href={to}
        className="footer__list-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </li>
  );
}

export default FooterMenuItemExternal;
