import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import GlobalStyle from './global-style';

import { PublicRoute, GuestRoute } from './containers/route';
import { UserProvider } from './contexts/user-context';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';

const App = () => {
  return (
    <UserProvider>
      <GlobalStyle />
      <Router>
        <Switch>
          <GuestRoute path="/login" component={LoginPage} />
          <PublicRoute path="/" component={HomePage} />
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
