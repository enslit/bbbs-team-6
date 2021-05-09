import React, { useState } from 'react';
import { func } from 'proptypes';

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
      <label htmlFor="username">
        Username
        <input
          type="text"
          id="username"
          name="username"
          value={form.username}
          onInput={handleInput}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onInput={handleInput}
        />
      </label>
      <button type="submit">login</button>
    </form>
  );
}

export default Login;
