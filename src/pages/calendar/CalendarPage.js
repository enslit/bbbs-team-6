import React, { useState, useEffect } from 'react';
import CalendarElement from '../../components/Calendar/CalendarElement/CalendarElement';
import './calenderPage.css';
const testArray = [
  {
    day: '05',
    id: 1,
    month: 'декабрь',
    title: 'Субботний митап',
    time: '14:00 - 15:00',
    address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
    contacts: 'Александра, +7 926 356-78-90',
    places: 5,
  },
  {
    day: '05',
    id: 1,
    month: 'декабрь',
    title: 'Субботний митап',
    time: '14:00 - 15:00',
    address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
    contacts: 'Александра, +7 926 356-78-90',
    places: 5,
  },
  {
    day: '05',
    id: 1,
    month: 'декабрь',
    title: 'Субботний митап',
    time: '14:00 - 15:00',
    address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
    contacts: 'Александра, +7 926 356-78-90',
    places: 5,
  },
];
function CalendarPage() {
  const [calendarElements, setCalendarElements] = useState([]);
  useEffect(() => {
    setCalendarElements(testArray);
  }, []);
  return (
    <>
      <h1>Calendar Page</h1>;
      <ul className="calendar__list">
        {calendarElements.map((item) => (
          <CalendarElement
            key={item.id}
            day={item.day}
            id={item.id}
            month={item.month}
            title={item.title}
            address={item.address}
            contacts={item.contacts}
            places={item.places}
          />
        ))}
      </ul>
    </>
  );
}

export default CalendarPage;
