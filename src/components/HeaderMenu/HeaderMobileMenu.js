import React from 'react';
import IconButton from '../IconButton/IconButton';
import HeaderNavigation from './HeaderNavigation';
import closeIcon from '../../assets/icons/close.svg';
import menuIcon from '../../assets/icons/burger-menu.svg';
import { bool, func } from 'prop-types';
import { menuExternal, menuFooter } from '../../menus';
import './header-mobile-menu.css';

HeaderMobileMenu.propTypes = {
  onOpen: func,
  onClose: func,
  isOpened: bool,
};

function HeaderMobileMenu({ onOpen, onClose, isOpened }) {
  const handleClickBackdrop = (e) => {
    // Если кликнули мимо меню, то закроем его
    if (e.target.classList.contains('backdrop')) {
      onClose();
    }
  };

  return (
    <div className="mobile-menu">
      <IconButton
        type="button"
        className="mobile-menu__icon"
        aria-label="Меню"
        handleClick={onOpen}
        icon={isOpened ? closeIcon : menuIcon}
      />
      {isOpened && <div className="backdrop" onClick={handleClickBackdrop} />}
      <div
        className={`mobile-menu__panel ${
          isOpened ? '' : 'mobile-menu__panel_hidden'
        }`}
      >
        <div className="mobile-menu__wrapper">
          <HeaderNavigation
            list={menuFooter}
            place={'mobile'}
            onClose={onClose}
          />
          <HeaderNavigation
            list={menuExternal}
            place={'mobile'}
            onClose={onClose}
            isExternal={true}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderMobileMenu;
