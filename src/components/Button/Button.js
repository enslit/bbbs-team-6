import React from 'react';
import classnames from 'classnames';
import { bool, func, oneOf, string } from 'prop-types';
import './button.css';

Button.propTypes = {
  style: oneOf(['dark', 'light']),
  type: oneOf(['default', 'round']),
  isActive: bool,
  disabled: bool,
  onClickAction: func,
  children: string,
  addClassName: string,
};

function Button({
  onClickAction,
  children,
  style = 'light',
  type = 'default',
  disabled = false,
  isActive = false,
  addClassName,
}) {
  const classes = classnames('button', addClassName, {
    button_active: isActive,
    button_style_dark: style === 'dark',
    button_style_light: style === 'light',
    button_active_dark: isActive && style === 'dark',
    button_active_light: isActive && style === 'light',
    button_type_default: type === 'default',
    button_type_round: type === 'round',
    button_disabled: disabled,
  });

  return (
    <button type="button" onClick={onClickAction} className={classes}>
      {children}
    </button>
  );
}

export default Button;
