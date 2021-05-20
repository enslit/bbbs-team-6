import React from 'react';
import { func, string } from 'prop-types';
import './icon-button.css';

IconButton.propTypes = {
  icon: string.isRequired,
  handleClick: func.isRequired,
  className: string,
};

function IconButton({ icon, handleClick, className = '', ...props }) {
  return (
    <button
      className={`icon-button ${className}`}
      style={{ backgroundImage: `url(${icon})` }}
      onClick={handleClick}
      {...props}
    />
  );
}

export default IconButton;
