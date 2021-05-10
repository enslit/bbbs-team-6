import { createContext } from 'react';

const INIT_USER_VALUES = {
  _id: null,
  permissions: null,
  email: null,
  city: null,
  username: null,
  personalToken: null,
};

const CurrentUserContext = createContext(INIT_USER_VALUES);

export default CurrentUserContext;
