import React from 'react';

import feedbackGoodActiveIcon from '../../assets/icons/feedback-good-color.svg';
import feedbackNormalActiveIcon from '../../assets/icons/feedback-normal-color.svg';
import feedbackBadActiveIcon from '../../assets/icons/feedback-bad-color.svg';
import { string, shape } from 'prop-types';
import './added-history.css';

AddedHistory.propTypes = {
  event: shape({
    id: string,
    photo: string,
    place: string,
    date: string,
    description: string,
    feedback: string,
  }),
};

function AddedHistory({ event }) {
  const feedBackStatusIcon =
    (event.feedback === 'bad' && feedbackBadActiveIcon) ||
    (event.feedback === 'good' && feedbackGoodActiveIcon) ||
    (event.feedback === 'normal' && feedbackNormalActiveIcon);

  const feedBackStatusText =
    (event.feedback === 'bad' && 'Было не очень') ||
    (event.feedback === 'good' && 'Было круто') ||
    (event.feedback === 'normal' && 'Средне');

  const feedBackStatusColor =
    (event.feedback === 'bad' && 'red') ||
    (event.feedback === 'good' && 'green') ||
    (event.feedback === 'normal' && 'grey');

  return (
    <div className="added-history">
      <div
        className="added-history__photo"
        style={{
          backgroundImage: `url(${'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'})`,
        }}
      ></div>
      <div className="added-history__main">
        <div className="added-history__info">
          <div className="added-history__text-zone">
            <h2 className="added-history__title">{event.title}</h2>
            <p className="added-history__paragraph">
              Описание в несколько срок. Подробное описание. Опишите вашу
              встречу, какие чувства вы испытывали, что понравилось не
              понравилось. Описание в несколько срок. Подробное описание.
              Подробное описание. Опишите вашу встречу, какие чувства вы
              испытывали, что понравилось не понравилось. Описание в несколько
              срок. Подробное описание. Опишите вашу встречу, какие чувства вы
              испытывали, что понравилось не понравилось. Описание в несколько
              срок. Подробное описание. Подробное описание. Опишите вашу
              встречу, какие чувства вы испытывали, что понравилось не
              понравилось. чувства вы испытывали, что понравилось не
              понравилось.{' '}
            </p>
          </div>
          <div className="added-history__date-zone">
            <p className="added-history__date-month">декабрь, 2020</p>
            <p className="added-history__date">05</p>
          </div>
        </div>

        <div className="added-history__menu">
          <div className="added-history__quantity">
            <img src={feedBackStatusIcon} />
            <p
              className="added-history__quantity-text"
              style={{ color: feedBackStatusColor }}
            >
              {feedBackStatusText}
            </p>
          </div>
          <div className="add-history__submit">
            <button className="add-history__remove" type="button">
              Поделиться с куратором
            </button>
            <button className="add-history__remove" type="submit">
              Редактировать
            </button>
            <button className="add-history__remove" type="submit">
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddedHistory;
