import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import './user-account.css';
import { useHistory } from 'react-router-dom';
import addPhotoIcon from '../../assets/icons/personal-account-btn-add-photo.svg';
import feedbackGoodIcon from '../../assets/icons/feedback-good-black.svg';
import feedbackNormalIcon from '../../assets/icons/feedback-normal-black.svg';
import feedbackBadIcon from '../../assets/icons/feedback-bad-black.svg';
// import feedbackGoodActiveIcon from '../../assets/icons/feedback-good-color.svg';
// import feedbackNormalActiveIcon from '../../assets/icons/feedback-normal-color.svg';
// import feedbackBadActiveIcon from '../../assets/icons/feedback-bad-color.svg';

function UserAccountPage() {
  const { signOut } = useAuth();
  const history = useHistory();

  const handleClickLogout = () => {
    signOut(() => history.push('/'));
  };

  const handleClickChangeCity = () => {
    console.log('нужно показать модалку выбора города');
  };

  return (
    <main className="main">
      <section className="personal-account content main__section">
        <div className="personal-account__buttons">
          <button
            type="button"
            className="personal-account__text"
            onClick={handleClickChangeCity}
          >
            Изменить ваш город
          </button>
          <button
            type="button"
            className="personal-account__text"
            onClick={handleClickLogout}
          >
            Выйти
          </button>
        </div>
        <div className="personal-account__events">
          <h2 className="personal-account__title">
            У вас нет записи на мероприятия
          </h2>
        </div>
        <h2 className="personal-account__title personal-account__title_type_content">
          Составьте историю вашей дружбы с младшим. Эта страница доступна только
          вам.
        </h2>

        <form className="personal-account__form">
          <div className="personal-account__photo">
            <div
              className="personal-account__upload-wrapper"
              style={{ backgroundImage: `url(${addPhotoIcon})` }}
            >
              <input
                id="personal-account__photo-add2"
                className="personal-account__upload"
                type="file"
              />
            </div>
            <label
              htmlFor="personal-account__photo-add2"
              className="personal-account__photo-text"
            >
              Загрузить фото
            </label>
          </div>
          <div className="personal-account__inputs">
            <input
              className="personal-account__input personal-account__input_type_place"
              type="text"
              placeholder="Место встречи"
              name="place"
            />
            <input
              className="personal-account__input personal-account__input_type_date"
              type="date"
              name="date"
            />
            <textarea
              className="personal-account__textarea personal-account__textarea_type_description"
              placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
              name="description"
            />
            <div className="personal-account__feedback">
              <label
                style={{ backgroundImage: `url(${feedbackGoodIcon})` }}
                className="personal-account__feedback-button"
              >
                <input
                  className="personal-account__radio"
                  type="radio"
                  name="feedback"
                  value="good"
                />
              </label>
              <label
                style={{ backgroundImage: `url(${feedbackNormalIcon})` }}
                className="personal-account__feedback-button"
              >
                <input
                  className="personal-account__radio"
                  type="radio"
                  name="feedback"
                  value="normal"
                />
              </label>
              <label
                style={{ backgroundImage: `url(${feedbackBadIcon})` }}
                className="personal-account__feedback-button"
              >
                <input
                  className="personal-account__radio"
                  type="radio"
                  name="feedback"
                  value="bad"
                />
              </label>
              <p className="personal-account__feedback-text">
                Оцените проведенное время
              </p>
            </div>
            <div className="personal-account__submit">
              <button className="personal-account__feedback-btn" type="button">
                Удалить
              </button>
              <button
                className="button button_color_black-nonactive"
                type="submit"
              >
                Добавить
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default UserAccountPage;
