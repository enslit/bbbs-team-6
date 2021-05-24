import { memo } from 'react';
import { element, func, bool } from 'prop-types';
import './popup.css';

Popup.propTypes = {
  children: element,
  isOpen: bool,
  onClose: func,
};

function Popup({ children, isOpen, onClose }) {
  function handleClose(evt) {
    if (
      evt.target.classList.contains('popup') ||
      evt.target.classList.contains('popup__button-close')
    ) {
      onClose();
    }
  }

  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onClick={handleClose}
    >
      {children}
    </div>
  );
}

export default memo(Popup);