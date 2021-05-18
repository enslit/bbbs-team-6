import { auth, checkToken } from '../utils/fakeApi';
import React, { useState, useEffect, createContext, useContext } from 'react';
import { element } from 'prop-types';

ProvideAuth.propTypes = {
  children: element,
};

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = ({ username, password }, onEndSubmitting, cb) => {
    auth({ username, password })
      .then(({ user, error }) => {
        if (error) {
          return onEndSubmitting(false, error);
        }

        onEndSubmitting();
        localStorage.setItem('jwt', user.personalToken);
        setUser(user);
        cb();
      })
      .catch((error) => {
        console.error(error);
        onEndSubmitting(false, error);
      });
  };

  const signOut = (cb) => {
    localStorage.removeItem('jwt');
    setUser(null);
    cb();
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      checkToken(jwt)
        .then(({ user }) => {
          if (user) {
            setUser(user);
          } else {
            localStorage.removeItem('jwt');
          }
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return { user, signIn, signOut };
};
