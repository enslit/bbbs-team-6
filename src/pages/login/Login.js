import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInput = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const redirectToRequestedRoute = () => {
    const { from } = location.state || { from: { pathname: '/user-account' } };
    history.replace(from);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmitting(true);
    setError(null);

    auth.signIn(form, onEndSubmitting, redirectToRequestedRoute);
  };

  const onEndSubmitting = (success = true, message = null) => {
    setSubmitting(false);
    if (message) {
      setError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Please Login</h2>
      <div>
        <label htmlFor="username">
          Username
          <input
            style={{ marginLeft: '15px' }}
            type="text"
            id="username"
            name="username"
            value={form.username}
            onInput={handleInput}
          />
        </label>
      </div>
      <div style={{ marginTop: '15px', marginBottom: '15px' }}>
        <label htmlFor="password">
          Password
          <input
            style={{ marginLeft: '15px' }}
            type="password"
            id="password"
            name="password"
            value={form.password}
            onInput={handleInput}
          />
        </label>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit" disabled={submitting}>
        {submitting ? 'Отправка...' : 'Войти'}
      </button>
    </form>
  );
}

export default Login;
