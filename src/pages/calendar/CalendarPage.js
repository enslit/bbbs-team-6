import React, { useState, useEffect } from 'react';
import { bbbsApi } from '../../utils/api';
import { useAuth } from '../../hooks/useAuth';
import { func } from 'prop-types';
import CalendarList from '../../components/Calendar/CalendarList';
import Loader from '../../components/Loader/Loader';
import './calendarPage.css';

CalendarPage.propTypes = {
  eventClick: func,
};

function CalendarPage({ eventClick }) {
  const { user } = useAuth();
  const [calendarElements, setCalendarElements] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    bbbsApi
      .getEvents(user.city)
      .then((events) => {
        setCalendarElements(events);
      })
      .finally(() => setIsFetching(false));
  }, [user]);

  return isFetching ? (
    <Loader />
  ) : (
    <section className="grid-calendar main__section">
      <h1 className="heading">Календарь</h1>
      <CalendarList events={calendarElements} eventClick={eventClick} />
    </section>
  );
}

export default CalendarPage;
