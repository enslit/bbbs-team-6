import './calendarElement.css';
import React from 'react';
import { number, string } from 'prop-types';

function CalendarElement({
  day,
  id,
  month,
  title,
  time,
  address,
  contacts,
  places,
}) {
  return (
    <li className="calendar-element">
      <div className="calendar-element__header">
        <span>Волонтёры + дети</span>
        <span>{month} / понедельник</span>
      </div>
      <div className="calendar-element__main">
        <h3 className="calendar-element__title">{title}</h3>
        <span className="calendar-element__date">{day}</span>
      </div>
      <div className="calendar-element__details">
        <p className="calendar-element__paragraph">12:00 - 14:00</p>
        <p className="calendar-element__paragraph">{address}</p>
        <p className="calendar-element__paragraph">{contacts}</p>
      </div>
      <div className="calendar-element__menu">
        <div className="join">
          <button type={'submit'} className="join__button">
            Записаться
          </button>
          <p className="join__places-left">Осталось {places} мест</p>
        </div>
        <button type={'button'} className="menu-button">...</button>
      </div>
    </li>
  );
}

CalendarElement.propTypes = {
  day: string.isRequired,
  id: number.isRequired,
  month: string.isRequired,
  title: string.isRequired,
  time: string.isRequired,
  address: string.isRequired,
  contacts: string.isRequired,
  places: number.isRequired,
};

export default CalendarElement;
