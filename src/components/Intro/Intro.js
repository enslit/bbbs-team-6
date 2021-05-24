import { memo } from 'react';
import './intro.css';
import logo from '../../assets/images/logoSBSS-blue.svg';

function Intro() {
  return (
    <div className="bbbs">
      <div className="bbbs__logo">
        <a
          className="logo logo_place_mainpage"
          href="https://www.nastavniki.org/o-nas/ob-organizaczii/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo__img"
            src={logo}
            alt="Логотип Старшие Братья Старшие Сестры"
          />
        </a>
      </div>
      <div className="bbbs__about">
        <p className="bbbs__text">
          Наставники.про&nbsp;— цифровая информационная платформа огрганизации
          «Старшие Братья Старшие Сестры». Созданная для поддержки наставников
          программы.
        </p>
      </div>
    </div>
  );
}

export default memo(Intro);
