import { memo } from 'react';
import { object } from 'prop-types';
import './video.css';

Video.propTypes = {
  video: object,
};

function Video({ video }) {
  return (
    <div className="mainvideo">
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
