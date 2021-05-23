import axios from 'axios';

export class Fetch {
  constructor(baseURL, options = {}) {
    this._instance = axios.create({
      baseURL,
      headers: this._setHeaders(options),
    });
  }

  _setHeaders(options) {
    const defaultHeaders = { 'Content-Type': 'application/json' };

    if (Object.prototype.hasOwnProperty.call(options, 'headers')) {
      Object.keys(options.headers).forEach((key) => {
        defaultHeaders[key] = options.headers[key];
      });
    }

    return defaultHeaders;
  }

  _setAuthHeader(token) {
    this._instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  _returnResponse({ data, status }) {
    return (
      data || Promise.reject(new Error(`Нет поля data. Код ответа ${status}`))
    );
  }
}
