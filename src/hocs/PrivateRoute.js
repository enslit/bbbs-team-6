import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { element } from 'prop-types';

PrivateRoute.propTypes = {
  children: element,
};

function PrivateRoute({ children, ...rest }) {
  const { loggedIn } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn
          ? children
          : (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: location },
                }}
              />
            ) && rest.handleAuthModalOpen()
      }
    />
  );
}

export default PrivateRoute;
