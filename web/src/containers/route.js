import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUser } from '../contexts/user-context';

const GuestRoute = props => {
  const [state] = useUser();
  const isAuthenticated = state.token !== null;

  if (isAuthenticated) {
    const { from } = props.location.state || { from: { pathname: '/' } };
    return <Redirect to={from} />;
  }

  return <Route {...props} />;
};

const PrivateRoute = props => {
  const [state] = useUser();
  const isAuthenticated = state.token !== null;

  if (!isAuthenticated) {
    return (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    );
  }

  return <Route {...props} />;
};

const PublicRoute = props => {
  return <Route {...props} />;
};

export { GuestRoute, PrivateRoute, PublicRoute };
