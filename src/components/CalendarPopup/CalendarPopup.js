import { memo } from 'react';
import { func, object } from 'prop-types';
import Popup from '../Popup/Popup';
import CalendarElement from '../Calendar/CalendarElement/CalendarElement';
import IconButton from '../IconButton/IconButton';
import closeIcon from '../../assets/icons/close.svg';

CalendarPopup.propTypes = {
  event: object,
  onClose: func,
};

function CalendarPopup({ event, onClose }) {
  const closeButton = (
    <IconButton
      type="button"
      className="popup__close"
      handleClick={onClose}
      icon={closeIcon}
    />
  );

  return (
    <Popup onClose={onClose} mod="__meet">
      <CalendarElement event={event} isPopup={true} closeButton={closeButton} />
    </Popup>
  );
}

export default memo(CalendarPopup);
