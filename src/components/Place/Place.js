import { memo } from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import TagLabel from '../TagLabel/TagLabel';
import './place.css';

Place.propTypes = {
  place: object,
};

function Place({ place }) {
  return (
    <section className="event-soon-card">
      <div className="event-soon">
        <div className="event-soon__content-wrapper">
          <section className="profile-grid">
            <div className="profile-grid__column profile-grid__column_size_wide event-soon__description event-soon__description_size_big">
              <Link className="mainlink" to="where-to-go" />
              <ul className="event-soon__tags">
                <TagLabel name="Выбор наставника" mod="_place_event" />
              </ul>
              <div className="event-soon__caption">
                <h3 className="event-soon__title">{place.title}</h3>
                <p className="event-soon__subtitle">{place.name}</p>
              </div>

              <img
                src={place.imageUrl}
                className="event-soon__img"
                alt="Локация"
              />

              <a
                href={place.link}
                target="_blank"
                className="event-soon__link"
                rel="noreferrer"
              >
                перейти на сайт
              </a>
            </div>

            <div className="profile-grid__column profile-grid__column_size_thin event-soon__about-wrapper event-soon__about-wrapper_size_big">
              <article className="event-article event-article_size_big">
                <div className="event-article__title event-article__title_size_big">
                  {place.info}
                </div>
                <p className="event-article__paragraph event-article__paragraph_size_big">
                  {place.description}
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default memo(Place);
