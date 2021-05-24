import PropTypes from 'prop-types';
import classnames from 'classnames';
import React from 'react';

CalendarFilterButton.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

function CalendarFilterButton({ label, isActive, onClick }) {
  const classes = classnames('button button_color_black', {
    button_color_black_active: isActive,
  });

  const clickHandler = () => {
    onClick(label);
  };

  return (
    <button className={classes} type="button" onClick={clickHandler}>
      {label}
    </button>
  );
}

export default CalendarFilterButton;
