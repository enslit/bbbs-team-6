import { createContext } from 'react';

const INIT_USER_VALUES = {
  username: null,
};

const CurrentUserContext = createContext(INIT_USER_VALUES);

export default CurrentUserContext;
