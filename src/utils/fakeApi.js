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
  const [user] = users.filter(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const userData = { ...user };
    delete userData.password;
    return userData;
  }

  return null;
};

const getUserByToken = (token) => {
  const [user] = users.filter((user) => user.personalToken === token);

  if (user) {
    const userData = { ...user };
    delete userData.password;
    return userData;
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
