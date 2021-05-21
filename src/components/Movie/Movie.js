import { memo } from 'react';
import { object } from 'prop-types';
import './movie.css';

Movie.propTypes = {
  movie: object,
};

function Movie({ movie }) {
  return (
    <li className="movie">
      <a className="mainlink" href={movie.link} />
      <div className="movie__img">
        <img className="movie__poster" src={movie.imageUrl} alt={movie.title} />
        <div className="movie__tags">
          {movie.tags.map((tag) => (
            <p key={tag.id} className="tag">
              {tag.name}
            </p>
          ))}
        </div>
      </div>
      <div className="movie__descriprion">
        <div className="movie__name">
          <h3 className="movie__title">{movie.title}</h3>
          <p className="movie__caption">{movie.info}</p>
        </div>
        <a
          className="movie__link"
          href={movie.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          смотреть трейлер
        </a>
      </div>
    </li>
  );
}

export default memo(Movie);
