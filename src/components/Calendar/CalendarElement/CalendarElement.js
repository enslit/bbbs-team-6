import React from 'react';
import { format } from 'date-fns';
import { bool, number, shape, string } from 'prop-types';
import classnames from 'classnames';
import './calendarElement.css';
import Button from '../../Button/Button';

function CalendarElement({ event }) {
  const { booked, address, contact, title, startAt, endAt, seats, takenSeats } =
    event;

  const dateStart = new Date(startAt);
  const dateEnd = new Date(endAt);

  const elementClasses = classnames('calendar-element', {
    'calendar-element_booked': booked,
  });

  return (
    <li className={elementClasses}>
      <div className="calendar-element__header">
        <span>Волонтёры + дети</span>
        <span>
          {format(dateStart, 'MMMM')} / {format(dateStart, 'eeee')}
        </span>
      </div>
      <div className="calendar-element__main">
        <h3 className="calendar-element__title">{title}</h3>
        <span className="calendar-element__date">
          {format(dateStart, 'dd')}
        </span>
      </div>
      <div className="calendar-element__details">
        <p className="calendar-element__paragraph">
          {format(dateStart, 'HH:mm')} - {format(dateEnd, 'HH:mm')}
        </p>
        <p className="calendar-element__paragraph">{address}</p>
        <p className="calendar-element__paragraph">{contact}</p>
      </div>
      <div className="calendar-element__menu">
        <div className="calendar-element__join">
          <Button
            style="light"
            disabled={seats - takenSeats === 0}
            isActive={booked}
            addClassName="calendar-element__join-button"
          >
            {booked ? 'Отменить запись' : 'Записаться'}
          </Button>
          <p className="join__places-left">
            {seats - takenSeats === 0
              ? 'Запись закрыта'
              : `Осталось ${seats - takenSeats} мест`}
          </p>
        </div>
        <Button type="round">...</Button>
      </div>
    </li>
  );
}

CalendarElement.propTypes = {
  event: shape({
    id: number,
    booked: bool,
    address: string,
    contact: string,
    title: string,
    description: string,
    startAt: string,
    endAt: string,
    seats: number,
    takenSeats: number,
    city: number,
  }),
};

export default CalendarElement;
