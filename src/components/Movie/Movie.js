import { memo } from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import TagLabel from '../TagLabel/TagLabel';
import './movie.css';

Movie.propTypes = {
  movie: object,
};

function Movie({ movie }) {
  return (
    <li className="movie">
      <Link className="mainlink" to="/read-and-watch/films" />
      <div className="movie__img">
        <img className="movie__poster" src={movie.imageUrl} alt={movie.title} />
        <ul className="movie__tags">
          {movie.tags.map((tag) => (
            <TagLabel key={tag.id} name={tag.name} />
          ))}
        </ul>
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
