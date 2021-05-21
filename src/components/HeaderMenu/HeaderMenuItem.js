import React from 'react';
import { bool, func, string } from 'prop-types';
import { NavLink } from 'react-router-dom';

HeaderMenuItem.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
  onClickLink: func,
  isExternal: bool,
};

function HeaderMenuItem({ to, label, onClickLink, isExternal }) {
  return (
    <li className="header-menu__item">
      {isExternal ? (
        <a
          href={to}
          className="header-menu__link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClickLink}
        >
          {label}
        </a>
      ) : (
        <NavLink
          exact
          to={to}
          className="header-menu__link"
          activeClassName="header-menu__link_active"
          onClick={onClickLink}
        >
          {label}
        </NavLink>
      )}
    </li>
  );
}

export default HeaderMenuItem;
