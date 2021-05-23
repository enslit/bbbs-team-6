import './calendarElement.css';
import React from 'react';

function CalendarElement() {
  return (
    <div className="calendar-element">
      <div className="calendar-element__header">
        <span>Волонтёры + дети</span>
        <span>Декабрь / понедельник</span>
      </div>
      <div className="calendar-element__main">
        <h3 className="calendar-element__title">
          Субботний митап: учимся проходить интервью
        </h3>
        <span className="calendar-element__date">05</span>
      </div>
      <div className="calendar-element__details">
        <p className="calendar-element__paragraph">12:00 - 14:00</p>
        <p className="calendar-element__paragraph">
          Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)
        </p>
        <p className="calendar-element__paragraph">
          Александра, +7 926 356-78-90
        </p>
      </div>
      <div className="calendar-element__menu">
        <div className="join">
          <button className="join__button">Записаться</button>
          <p className="join__places-left">Осталось 5 мест</p>
        </div>
        <button className="menu-button">...</button>
      </div>
    </div>
  );
}

export default CalendarElement;
