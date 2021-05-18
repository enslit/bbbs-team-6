import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

class Api {
  constructor(baseURL, options = {}) {
    this._instance = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' },
    });

    if (Object.prototype.hasOwnProperty.call(options, 'mock') && options.mock) {
      this._initMock();
    }
  }

  _initMock() {
    this._mock = new MockAdapter(this._instance, { delayResponse: 1500 });

    // Главная страница
    this._mock.onGet('/main').reply(200, require('./mock/mainPage.json'));

    // Авторизация. Проверяется логин и пароль
    this._mock.onPost('/api/v1/token').reply(async (config) => {
      const { username, password } = await JSON.parse(config.data);
      if (username === 'admin' && password === 'admin') {
        return [200, require('./mock/token.json')];
      } else {
        return [400, { message: 'Неверный логин или пароль' }];
      }
    });

    // Получение списка городов
    this._mock
      .onGet('/api/v1/cities')
      .reply(200, require('./mock/cities.json'));

    // Получение - обновление профайла пользователя, текущего города пользователя и т.д.
    this._mock.onGet('/api/v1/profile').reply(async (config) => {
      const { access } = require('./mock/token.json');
      console.log({ config });

      if (!config.headers.Authorization) {
        return [401, { message: 'Не авторизован' }];
      } else if (config.headers.Authorization !== `Bearer ${access}`) {
        return [403, { message: 'Нет доступа' }];
      } else {
        return [200, require('./mock/cities.json')];
      }
    });

    // Работа с календарем
    this._mock
      .onGet('/api/v1/afisha/events/', { params: { city: 1 } })
      .reply(200, require('./mock/calendar.json'));
  }

  _setAuthHeader(token) {
    this._instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  _returnResponse({ data, status }) {
    return (
      data || Promise.reject(new Error(`Нет поля data. Код ответа ${status}`))
    );
  }

  auth({ username, password }) {
    return this._instance
      .post('/api/v1/token', { username, password })
      .then(this._returnResponse)
      .then((tokens) => {
        const { access } = tokens;
        if (access) {
          this._setAuthHeader(access);
        }

        return tokens;
      });
  }

  getMainPage() {
    return this._instance.get('/main').then(this._returnResponse);
  }

  getCities() {
    return this._instance.get('/api/v1/cities/').then(this._returnResponse);
  }

  getUserProfile() {
    return this._instance.get('/api/v1/profile').then(this._returnResponse);
  }

  getEvents(cityId) {
    return this._instance.get(`/api/v1/afisha/events/${cityId}`);
  }
}

export const api = new Api('http://127.0.0.1:8000', { mock: true });
