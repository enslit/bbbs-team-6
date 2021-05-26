import { memo } from 'react';
import { func } from 'prop-types';
import Popup from '../Popup/Popup';
import './authPopup.css';
import close from '../../assets/icons/close.svg';
import { Formik } from 'formik';
AuthPopup.propTypes = {
  onClose: func,
};

function AuthPopup({ onClose }) {
  function handleLogin(login, password) {
    return console.log(login, password);
  }

  return (
    <Popup onClose={onClose}>
      <div className="auth-popup ">
        <img onClick={onClose} className="auth-popup__close" src={close} />
        <h3 className="title auth-popup__title">Вход</h3>
        <div className="auth-popup__information">
          <p className="auth-popup__paragraph">
            Вход в личный кабинет доступен наставникам программы «Старшие Братья
            Старшие Сёстры».
          </p>
          <p className="auth-popup__paragraph">
            Пожалуйста, введите логин и пароль из письма. Если вам не приходило
            письмо, свяжитесь с вашим куратором.{' '}
          </p>
        </div>
        <Formik
          initialValues={{ login: '', password: '' }}
          // Здесь прописываются все возможные ошибки для валидатора
          validate={(values) => {
            const errors = {};

            if (!values.login) {
              errors.login = 'Введите корректный login';
            }
            if (!values.password) {
              errors.password = 'Обязательное поле';
            } else if (values.password.length < 3) {
              errors.password = 'Минимум 3 символа';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // setSubmitting - флаг отправления формы для блокирования кнопки.
            handleLogin(values.login, values.password);
          }}
        >
          {({
            errors,
            values,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
          }) => (
            <form onSubmit={handleSubmit} className="auth-popup__form">
              <input
                name="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
                placeholder="Логин"
                type="text"
                className="auth-popup__input"
              ></input>
              <span className="auth-popup__error_visible">
                {errors.login && touched.login && errors.login}
              </span>
              <input
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Пароль"
                type="password"
                className="auth-popup__input"
              ></input>
              <span className="auth-popup__error_visible">
                {errors.password && touched.password && errors.password}
              </span>
              <a className="auth-popup__restore-password">Забыли пароль</a>
              <button className="auth-popup__button">Войти</button>
            </form>
          )}
        </Formik>
      </div>
    </Popup>
  );
}

export default memo(AuthPopup);
