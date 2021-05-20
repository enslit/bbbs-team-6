import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import HeaderNavigation from '../HeaderMenu/HeaderNavigation';
import HeaderMobileMenu from '../HeaderMenu/HeaderMobileMenu';
import IconButton from '../IconButton/IconButton';
import searchIcon from '../../assets/icons/search.svg';
import userIcon from '../../assets/icons/login.svg';
import authorizedUserIcon from '../../assets/icons/lk.svg';
import { menuHeaderDesktop } from '../../menus';
import './header.css';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { user } = useAuth();

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
    console.log('user');
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        наставники.про
      </Link>
      <HeaderMobileMenu
        onOpen={handleClickOpenMenu}
        onClose={handleClickCloseMenu}
        isOpened={isMenuOpened}
      />
      <HeaderNavigation list={menuHeaderDesktop} type={'desktop'} />
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
