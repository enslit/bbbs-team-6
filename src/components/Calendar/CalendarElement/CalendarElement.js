import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { bool, number, shape, string, element, func } from 'prop-types';
import classnames from 'classnames';
import './calendarElement.css';
import Button from '../../Button/Button';

function CalendarElement({
  event,
  popupStatus,
  eventClick,
  onClose,
  closeButton,
  fromMain,
}) {
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
  const popupDateString = `${format(dateStart, 'dd')} ${format(
    dateStart,
    'MMMM'
  )} с ${format(dateStart, 'HH:mm')} - ${format(dateEnd, 'HH:mm')}`;

  const [isBooked, setIsBooked] = React.useState(booked);
  const [isPopup, setIsPopup] = React.useState(popupStatus);

  const elementClasses = classnames('calendar', {
    calendar_onclick: isBooked,
    calendar__popup: isPopup,
  });

  function handleClickEvent(status) {
    eventClick(event, status);
  }

  function handleClickBooking() {
    isBooked
      ? setIsBooked(!isBooked)
      : isPopup
      ? setIsPopup('success')
      : handleClickEvent('confirm');
  }

  return (
    <li className={elementClasses}>
      {fromMain && <Link className="mainlink" to="/calendar" />}
      {isPopup && closeButton}

      {isPopup === 'confirm' && (
        <div className="calendar calendar__popup calendar__popup_confirm">
          <p className="calendar__popup-text">
            Подтвердить запись на мероприятие
          </p>
          <p className="calendar__popup-text">{`"${title}"`}</p>
          <p className="calendar__popup-text calendar__popup-text_bottom">
            {popupDateString}
          </p>
          <div className="calendar__popup-button-wrapper">
            <Button
              style="light"
              addClassName="calendar-element__join-button"
              onClickAction={handleClickBooking}
            >
              Подтвердить запись
            </Button>
            <Button
              style="dark"
              addClassName="calendar-element__join-button"
              onClickAction={onClose}
            >
              Отменить
            </Button>
          </div>
        </div>
      )}

      {isPopup === 'success' && (
        <div className="calendar calendar__popup calendar__popup_confirm">
          <div className="calendar__popup-success-image"></div>
          <p className="calendar__popup-text">Вы записаны на мероприятие</p>
          <p className="calendar__popup-text">{`"${title}"`}</p>
          <p className="calendar__popup-text calendar__popup-text_bottom">
            {popupDateString}
          </p>
          <p className="calendar__popup-text calendar__popup-text_bottom">
            Если у вас не получится прийти — отмените, пожалуйста, запись.
          </p>
          <Button
            style="dark"
            addClassName="calendar-element__join-button"
            onClickAction={onClose}
          >
            Вернуться к календарю
          </Button>
        </div>
      )}

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
            disabled={seats - takenSeats === 0 || remainSeats === 0}
            isActive={isBooked}
            addClassName="calendar-element__join-button"
            onClickAction={handleClickBooking}
          >
            {isBooked ? 'Отменить запись' : 'Записаться'}
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
          <Button type="round" onClickAction={() => handleClickEvent('more')}>
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
  onClose: func,
  eventClick: func,
  fromMain: bool,
  popupStatus: string,
};

export default CalendarElement;
