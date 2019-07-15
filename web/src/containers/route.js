import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUser } from '../contexts/user-context';

const GuestRoute = props => {
  const [state] = useUser();

  if (state.token !== null) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
};

const PrivateRoute = props => {
  const [state] = useUser();

  if (state.token === null) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

const PublicRoute = props => {
  return <Route {...props} />;
};

export { GuestRoute, PrivateRoute, PublicRoute };
