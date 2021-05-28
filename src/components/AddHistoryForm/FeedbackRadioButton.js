import React from 'react';
import { bool, func, oneOf, string } from 'prop-types';
import { Field } from 'formik';

FeedbackRadioButton.propTypes = {
  isActive: bool,
  icon: string,
  activeIcon: string,
  onClick: func,
  value: oneOf(['good', 'normal', 'bad']),
};

function FeedbackRadioButton({ value, onClick, isActive, icon, activeIcon }) {
  return (
    <label
      style={{
        backgroundImage: `url(${isActive ? activeIcon : icon})`,
      }}
      className="add-history__feedback-button"
    >
      <Field
        className="add-history__radio"
        type="radio"
        name="feedback"
        value={value}
        onChange={onClick}
      />
    </label>
  );
}

export default FeedbackRadioButton;
