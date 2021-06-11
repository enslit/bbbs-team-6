import { memo } from 'react';
import { func, object, string } from 'prop-types';
import Popup from '../Popup/Popup';
import CalendarElement from '../Calendar/CalendarElement/CalendarElement';
import IconButton from '../IconButton/IconButton';
import closeIcon from '../../assets/icons/close.svg';

CalendarPopup.propTypes = {
  event: object,
  onClose: func,
  popupStatus: string,
};

function CalendarPopup({ event, onClose, popupStatus }) {
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
      <CalendarElement
        event={event}
        popupStatus={popupStatus}
        closeButton={closeButton}
        onClose={onClose}
      />
    </Popup>
  );
}

export default memo(CalendarPopup);
