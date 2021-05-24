import React, { useState, useEffect } from 'react';
import CalendarElement from '../../components/Calendar/CalendarElement/CalendarElement';
import { bbbsApi } from '../../utils/api';
import { useAuth } from '../../hooks/useAuth';
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
        console.log({ events });
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
        <ul className="calendar__list">
          {calendarElements.map((item) => (
            <CalendarElement key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default CalendarPage;
