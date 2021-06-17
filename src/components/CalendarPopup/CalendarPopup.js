import React, { memo, useContext } from 'react';
import { func } from 'prop-types';
import Popup from '../Popup/Popup';

import close from '../../assets/icons/close.svg';
import { calendarElementContext } from '../../contexts/calendarEventContext';
CalendarPopup.propTypes = {
  onClose: func,
};

function CalendarPopup({ onClose }) {
  const calendarEvent = useContext(calendarElementContext);
  console.log(calendarEvent);
  return (
    <Popup onClose={onClose}>
      <div className="auth-popup ">
        <img onClick={onClose} className="auth-popup__close" src={close} />
        <h3 className="title auth-popup__title">Вход</h3>
        <div className="auth-popup__information">
          <p className="auth-popup__paragraph">
            Вход в личный кабинет доступен наставникам программы «Старшие Братья
            Старшие Сёстры».
          </p>
          <p className="auth-popup__paragraph">
            Пожалуйста, введите логин и пароль из письма. Если вам не приходило
            письмо, свяжитесь с вашим куратором.{' '}
          </p>
        </div>
      </div>
    </Popup>
  );
}

export default memo(CalendarPopup);
