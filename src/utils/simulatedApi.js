const users = [
  {
    _id: 1,
    permissions: 'admin',
    email: 'admin@bbbs.com',
    city: 'Moscow',
    username: 'admin',
    password: 'admin',
    personalToken: 'ADMIN_JWT_TOKEN',
  },
  {
    _id: 2,
    permissions: 'manager',
    email: 'manager@bbbs.com',
    city: 'Volgograd',
    username: 'manager',
    password: 'manager',
    personalToken: 'MANAGER_JWT_TOKEN',
  },
  {
    _id: 3,
    permissions: 'regional-manager',
    email: 'regional-manager@bbbs.com',
    city: 'Kazan',
    username: 'regmanager',
    password: 'regmanager',
    personalToken: 'REGIONAL-MANAGER_JWT_TOKEN',
  },
];

const getUserByAuthData = (username, password) => {
  const user = users.filter(
    (user) => user.username === username && user.password === password
  );

  if (user.length) {
    delete user[0].password;
    return user[0];
  }

  return null;
};

const getUserByToken = (token) => {
  const user = users.filter((user) => user.personalToken === token);

  if (user.length) {
    delete user[0].password;
    return user[0];
  }

  return null;
};

export const auth = ({ username, password }) => {
  return new Promise((resolve) => {
    const user = getUserByAuthData(username, password);

    return setTimeout(() => {
      return user
        ? resolve({ user })
        : resolve({ error: 'Неверный логин или пароль' });
    }, 2000);
  });
};

export const checkToken = (token) => {
  return new Promise((resolve) => {
    const user = getUserByToken(token);

    return setTimeout(() => {
      return user ? resolve({ user }) : resolve({ error: 'Неверный токен' });
    }, 2000);
  });
};
