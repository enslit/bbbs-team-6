import React from 'react';
import { format } from 'date-fns';
import { bool, number, shape, string, element, func } from 'prop-types';
import classnames from 'classnames';
import './calendarElement.css';
import Button from '../../Button/Button';

function CalendarElement({ event, eventClick, isPopup, closeButton }) {
  const {
    booked,
    address,
    contact,
    title,
    startAt,
    endAt,
    seats,
    takenSeats,
    remainSeats,
    description,
  } = event;

  const dateStart = new Date(startAt);
  const dateEnd = new Date(endAt);

  const elementClasses = classnames('calendar', {
    calendar_onclick: booked,
    calendar__popup: isPopup,
  });

  function handleClick() {
    eventClick(event);
  }

  return (
    <li className={elementClasses}>
      {isPopup && closeButton}
      <div className="calendar__about">
        <p className="calendar__participants">Волонтёры + дети</p>
        <p className="calendar__date">
          {format(dateStart, 'MMMM')} / {format(dateStart, 'eeee')}
        </p>
        <h2 className="calendar__event">{title}</h2>
        <p className="calendar__day">{format(dateStart, 'dd')}</p>
      </div>
      <ul className="calendar__contacts">
        <li className="calendar__contacts-item">
          <p className="calendar__time">
            {format(dateStart, 'HH:mm')} - {format(dateEnd, 'HH:mm')}
          </p>
        </li>
        <li className="calendar__contacts-item">
          <p className="calendar__adress">{address}</p>
        </li>
        <li className="calendar__contacts-item">
          <p className="calendar__phone">{contact}</p>
        </li>
      </ul>
      {isPopup && <p className="calendar__text_popup">{description}</p>}
      <div className="calendar__sign-up">
        <div className="calendar__sign-up_flex">
          <Button
            style="light"
            disabled={seats - takenSeats === 0}
            isActive={booked}
            addClassName="calendar-element__join-button"
          >
            {booked ? 'Отменить запись' : 'Записаться'}
          </Button>
          <p className="calendar__sign-up__type_text">
            {seats - takenSeats === 0
              ? 'Запись закрыта'
              : `Осталось ${
                  !remainSeats ? seats - takenSeats : remainSeats
                } мест`}
          </p>
        </div>
        {!isPopup && (
          <Button type="round" onClickAction={handleClick}>
            ...
          </Button>
        )}
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
  isPopup: bool,
  closeButton: element,
  eventClick: func,
};

export default CalendarElement;
