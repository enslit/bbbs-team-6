import { memo } from 'react';
import { func, object } from 'prop-types';
import Popup from '../Popup/Popup';
import './video-popup.css';

VideoPopup.propTypes = {
  video: object,
  onClose: func,
};

function VideoPopup({ video, onClose }) {
  return (
    <Popup isOpen={!!video} onClose={onClose}>
      <div className="apivideo">
        <iframe
          className="apivideo__video"
          id="ytplayer"
          src={video.link}
          allowFullScreen=""
        ></iframe>
        <h3 className="apivideo__title">{video.title}</h3>
        <p className="apivideo__text">{video.info}</p>
      </div>
    </Popup>
  );
}

export default memo(VideoPopup);
