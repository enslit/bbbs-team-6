import React from 'react';
import { Form, Formik } from 'formik';
import FeedbackRadioButton from './FeedbackRadioButton';
import addPhotoIcon from '../../assets/icons/personal-account-btn-add-photo.svg';
import feedbackGoodIcon from '../../assets/icons/feedback-good-black.svg';
import feedbackNormalIcon from '../../assets/icons/feedback-normal-black.svg';
import feedbackBadIcon from '../../assets/icons/feedback-bad-black.svg';
import feedbackGoodActiveIcon from '../../assets/icons/feedback-good-color.svg';
import feedbackNormalActiveIcon from '../../assets/icons/feedback-normal-color.svg';
import feedbackBadActiveIcon from '../../assets/icons/feedback-bad-color.svg';
import { func } from 'prop-types';
import './add-history.css';

AddHistoryForm.propTypes = {
  onSubmit: func,
};

function AddHistoryForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        photo: '',
        place: '',
        date: '',
        description: '',
        feedback: '',
      }}
      onSubmit={onSubmit}
    >
      {({
        errors,
        values,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        isValid,
      }) => (
        <Form className="add-history">
          <div className="add-history__photo">
            <div
              className="add-history__upload-wrapper"
              style={{ backgroundImage: `url(${addPhotoIcon})` }}
            >
              <input
                id="photoUpload"
                className="add-history__upload"
                type="file"
                name="photo"
                value={values.file}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="photoUpload" className="add-history__upload-label">
              Загрузить фото
            </label>
          </div>
          <div className="add-history__inputs">
            <input
              className="add-history__field personal-account__input_type_place"
              type="text"
              placeholder="Место встречи"
              name="place"
              value={values.place}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              className="add-history__field personal-account__input_type_date"
              type="date"
              name="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <textarea
              className="add-history__field add-history__field_type_textarea personal-account__textarea_type_description"
              placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="add-history__feedback">
              <FeedbackRadioButton
                value="good"
                onClick={handleChange}
                icon={feedbackGoodIcon}
                activeIcon={feedbackGoodActiveIcon}
                isActive={values.feedback === 'good'}
              />
              <FeedbackRadioButton
                value="normal"
                onClick={handleChange}
                icon={feedbackNormalIcon}
                activeIcon={feedbackNormalActiveIcon}
                isActive={values.feedback === 'normal'}
              />
              <FeedbackRadioButton
                value="bad"
                onClick={handleChange}
                icon={feedbackBadIcon}
                activeIcon={feedbackBadActiveIcon}
                isActive={values.feedback === 'bad'}
              />
              <p className="add-history__feedback-text">
                Оцените проведенное время
              </p>
            </div>
            <div className="add-history__submit">
              <button className="add-history__remove" type="button">
                Удалить
              </button>
              <button type="submit">Добавить</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddHistoryForm;
