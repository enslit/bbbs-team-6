import React, { useState, useEffect } from 'react';
import { bbbsApi } from '../../utils/api';
import { useAuth } from '../../hooks/useAuth';
import CalendarList from '../../components/Calendar/CalendarList';
import './calenderPage.css';

function CalendarPage() {
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

  return (
    <section className="calendar">
      <h1 className="calendar__title">Календарь</h1>
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <CalendarList events={calendarElements} />
      )}
    </section>
  );
}

export default CalendarPage;
