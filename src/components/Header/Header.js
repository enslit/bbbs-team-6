import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { func } from 'prop-types';
import Search from '../Search/Search';
import { useAuth } from '../../hooks/useAuth';

Header.propTypes = {
  onSignOut: func,
};

function Header() {
  const { user, signOut } = useAuth();
  const history = useHistory();

  return (
    <header>
      <Link to="/">Логотип BBBS</Link>
      <nav>
        <ul className="menu">
          <li>
            <NavLink activeClassName="menu__link_active" to="/calendar">
              Календарь
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="menu__link_active" to="/where-to-go">
              Куда пойти
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="menu__link_active" to="/questions">
              Вопросы
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="menu__link_active" to="/read-and-watch">
              Читать и смотреть
            </NavLink>
            <ul>
              <li>
                <NavLink
                  activeClassName="menu__link_active"
                  to="/read-and-watch/guide"
                >
                  Справочник
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="menu__link_active"
                  to="/read-and-watch/video"
                >
                  Видео
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="menu__link_active"
                  to="/read-and-watch/articles"
                >
                  Статьи
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="menu__link_active"
                  to="/read-and-watch/films"
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="menu__link_active"
                  to="/read-and-watch/books"
                >
                  Книги
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              activeClassName="menu__link_active"
              to="/children-is-rights"
            >
              Права детей
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="menu__link_active" to="/histories">
              Истории
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Search />
        {user ? (
          <>
            <Link to="/user-account">Личный кабинет</Link>
            <button onClick={() => signOut(() => history.push('/'))}>
              Выйти
            </button>
          </>
        ) : (
          <Link to="/sign-in">Войти</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
