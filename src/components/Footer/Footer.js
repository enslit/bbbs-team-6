import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to="https://www.nastavniki.org/campaign/pomoch-dengami/">
        Помочь деньгами
      </Link>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="/about">О проекте</NavLink>
          </li>
          <li>
            <NavLink to="/calendar">Календарь</NavLink>
          </li>
          <li>
            <NavLink to="/where-to-go">Куда пойти</NavLink>
          </li>
          <li>
            <NavLink to="/questions">Вопросы</NavLink>
          </li>
          <li>
            <NavLink to="/read-and-watch">Читать и смотреть</NavLink>
          </li>
          <li>
            <NavLink to="/children-is-rights">Права детей</NavLink>
          </li>
          <li>
            <NavLink to="/histories">Истории</NavLink>
          </li>
        </ul>
      </nav>
      <ul className="menu">
        <li>
          <Link to="https://facebook.com">Facebook</Link>
        </li>
        <li>
          <Link to="https://vk.com">VKontakte</Link>
        </li>
        <li>
          <Link to="https://instagram.com">Instagram</Link>
        </li>
        <li>
          <Link to="https://youtube.com">Уoutube</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
