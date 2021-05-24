import { memo } from 'react';
import { func, object } from 'prop-types';
import './video.css';

Video.propTypes = {
  video: object,
  onClick: func,
};

function Video({ video, onClick }) {
  function handleClick() {
    onClick(video);
  }

  return (
    <div className="mainvideo" onClick={handleClick}>
      <div className="mainvideo__description">
        <a className="mainlink" href={video.link} />
        <div className="mainvideo__name">
          <h3 className="mainvideo__title">{video.title}</h3>
          <p className="mainvideo__caption">{video.info}</p>
        </div>
        <a className="mainvideo__link" href={video.link}>
          смотреть видео
        </a>
      </div>
      <img
        src={video.imageUrl}
        alt={video.title}
        className="mainvideo__video"
      />
    </div>
  );
}

export default memo(Video);