import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import CalendarElement from './CalendarElement/CalendarElement';
import CalendarFilterButton from './CalendarFilterButton';

CalendarList.propTypes = {
  events: PropTypes.array,
};

function CalendarList({ events }) {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const filterButtonsArray = useMemo(() => {
    return events.reduce((arr, { startAt }) => {
      const monthName = format(new Date(startAt), 'MMMM');

      if (!arr.includes(monthName)) {
        arr.push(monthName);
      }

      return arr;
    }, []);
  }, [events]);

  const onClickFilter = (value) => {
    setSelectedMonth(value);
  };

  useEffect(() => {
    const filtered = events.filter(({ startAt }) => {
      return format(new Date(startAt), 'MMMM') === selectedMonth;
    });

    setFilteredEvents(filtered);
  }, [selectedMonth, events]);

  useEffect(() => {
    setSelectedMonth(filterButtonsArray[0]);
  }, [filterButtonsArray]);

  return (
    <>
      <div className="grid-calendar__buttons">
        {filterButtonsArray &&
          filterButtonsArray.map((label, index) => (
            <CalendarFilterButton
              key={index}
              label={label}
              onClick={onClickFilter}
              isActive={selectedMonth === label}
            />
          ))}
      </div>
      <ul className="calendar__list">
        {filteredEvents.map((event) => (
          <CalendarElement key={event.id} event={event} />
        ))}
      </ul>
    </>
  );
}

export default CalendarList;
