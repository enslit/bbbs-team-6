import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import HeaderNavigation from '../HeaderMenu/HeaderNavigation';
import HeaderMobileMenu from '../HeaderMenu/HeaderMobileMenu';
import IconButton from '../IconButton/IconButton';
import searchIcon from '../../assets/icons/search.svg';
import userIcon from '../../assets/icons/login.svg';
import authorizedUserIcon from '../../assets/icons/lk.svg';
import { menuHeaderDesktop } from '../../menus';
import { bool, func } from 'prop-types';
import './header.css';

Header.propTypes = {
  hidden: bool,
  fixed: bool,
  handleAuthModalOpen: func,
};

function Header({ hidden, fixed, handleAuthModalOpen }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { user } = useAuth();
  const history = useHistory();

  const handleClickOpenMenu = () => {
    setIsMenuOpened(true);
  };

  const handleClickCloseMenu = () => {
    setIsMenuOpened(false);
  };

  const handleClickSearch = () => {
    console.log('search');
  };

  const handleClickUserIcon = () => {
    setIsMenuOpened(false);
    user
      ? location.pathname !== '/user-account' && history.push('/user-account')
      : handleAuthModalOpen();
  };

  useEffect(() => {
    hidden && isMenuOpened && handleClickCloseMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden]);

  return (
    <header
      className={`header${hidden ? ' header_hidden' : ''}${
        fixed ? ' header_fixed' : ''
      }`}
    >
      <Link
        to="/"
        className="header__logo"
        onClick={() => setIsMenuOpened(false)}
      >
        наставники.про
      </Link>
      <HeaderMobileMenu
        onOpen={handleClickOpenMenu}
        onClose={handleClickCloseMenu}
        isOpened={isMenuOpened}
      />
      <HeaderNavigation
        list={menuHeaderDesktop}
        handleClickUserIcon={handleAuthModalOpen}
        type={'desktop'}
      />
      <div className="header__action">
        <IconButton
          type="button"
          aria-label="Поиск"
          icon={searchIcon}
          handleClick={handleClickSearch}
        />
        <IconButton
          type="button"
          aria-label={user ? 'Личный кабинет' : 'Авторизация'}
          className={`header__button-login ${
            isMenuOpened ? 'header__button-login_show' : ''
          }`}
          icon={user ? authorizedUserIcon : userIcon}
          handleClick={handleClickUserIcon}
        />
      </div>
    </header>
  );
}

export default Header;
