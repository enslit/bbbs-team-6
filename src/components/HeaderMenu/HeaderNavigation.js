import React from 'react';
import HeaderMenuItem from './HeaderMenuItem';
import { array, bool, func, oneOf } from 'prop-types';
import './header-menu.css';

HeaderNavigation.propTypes = {
  list: array.isRequired,
  type: oneOf(['desktop', 'mobile']),
  onClose: func,
  isExternal: bool,
};

function HeaderNavigation({ list, type, onClose, isExternal }) {
  return (
    <nav className={`header-menu header-menu_type_${type}`}>
      <ul className="header-menu__list">
        {list.map(({ path, label, submenu = [] }, index) => (
          <HeaderMenuItem
            key={index}
            to={path}
            label={label}
            submenu={submenu}
            type={type}
            onClickLink={onClose}
            isExternal={isExternal}
          />
        ))}
      </ul>
    </nav>
  );
}

export default React.memo(HeaderNavigation);
