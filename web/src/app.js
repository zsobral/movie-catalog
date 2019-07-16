import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import GlobalStyle from './global-style';

import { PublicRoute, GuestRoute, PrivateRoute } from './containers/route';
import { UserProvider } from './contexts/user-context';
import { MoviesProvider } from './contexts/movies-context';
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';
import MoviePage from './pages/movie-page';
import MovieFormPage from './pages/movie-form-page';
import NotFoundPage from './pages/not-found-page';

const App = () => {
  return (
    <UserProvider>
      <MoviesProvider>
        <GlobalStyle />
        <Helmet>
          <title>Movie Catalog</title>
        </Helmet>
        <Router>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <GuestRoute path="/login" component={LoginPage} />
            <PrivateRoute path="/movies/new" component={MovieFormPage} />
            <PublicRoute exact path="/movies/:id" component={MoviePage} />
            <PrivateRoute path="/movies/:id/edit" component={MovieFormPage} />
            <PublicRoute path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </MoviesProvider>
    </UserProvider>
  );
};

export default App;
