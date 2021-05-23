import { memo } from 'react';
import { element, func, string } from 'prop-types';
import './popup.css';

Popup.propTypes = {
  children: element,
  onClose: func,
  mod: string,
};

function Popup({ children, onClose, mod }) {
  function handleClose(evt) {
    if (
      evt.target.classList.contains('popup') ||
      evt.target.classList.contains('popup__button-close')
    ) {
      onClose();
    }
  }

  return (
    <div className={`popup${mod ? ' popup' + mod : ''}`} onClick={handleClose}>
      {children}
    </div>
  );
}

export default memo(Popup);
