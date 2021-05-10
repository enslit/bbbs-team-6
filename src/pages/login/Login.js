import React, { useState } from 'react';
import { func } from 'prop-types';

Login.propTypes = {
  onLogin: func,
};

function Login({ onLogin }) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleInput = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin(form);
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
      <button type="submit">login</button>
    </form>
  );
}

export default Login;
