import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import FooterNavigation from './FooterNavigation';
import { menuFooter, menuExternal } from '../../menus';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Link className="logo logo_place_footer" to="/">
          <img
            className="logo__img"
            src={logo}
            alt="Логотип Старшие Братья Старшие Сестры"
          />
        </Link>
        <a
          className="footer__money"
          href="https://www.nastavniki.org/campaign/pomoch-dengami/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Помочь деньгами
        </a>
        <div className="footer__navigation">
          <FooterNavigation list={menuFooter} modList="type_nav" />
          <FooterNavigation list={menuExternal} modList="type_social" />
        </div>
        <div className="footer__about">
          <p className="footer__copyright">
            &#169; Старшие Братья Старшие Сестры
          </p>
          <div className="footer__develop">
            <p className="footer__develop-text">
              Разработка &mdash; студенты{' '}
              <a
                className="footer__develop-accent"
                href="https://praktikum.yandex.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Яндекс.Практикум
              </a>
            </p>
            <p className="footer__develop-text">
              Концепция и дизайн &mdash;{' '}
              <a
                className="footer__develop-accent"
                href="https://krkr.design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                krkr.design
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
