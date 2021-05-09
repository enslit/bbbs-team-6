import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { func, bool, string } from 'prop-types';

ProtectedRoute.propTypes = {
  component: func.isRequired,
  authorized: bool.isRequired,
  path: string.isRequired,
};

function ProtectedRoute({ component: Component, authorized, path, ...props }) {
  return (
    <Route path={path} exact>
      {!authorized ? <Redirect to="/sign-in" /> : <Component {...props} />}
    </Route>
  );
}

export default ProtectedRoute;
