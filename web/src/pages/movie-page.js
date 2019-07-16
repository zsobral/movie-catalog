import React from 'react';
import { Link } from 'react-router-dom';

import { useUser } from '../contexts/user-context';
import Layout from '../containers/layout';
import Movie from '../containers/movie';

const MoviePage = ({ match }) => {
  const [state] = useUser();
  const id = match.params.id;
  const isAuthenticated = state.token !== null;

  return (
    <Layout>
      <div style={{ marginTop: 32 }}>
        {isAuthenticated && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 32,
            }}
          >
            <Link style={{ color: 'inherit' }} to={`${match.url}/edit`}>
              EDIT
            </Link>
          </div>
        )}
        <Movie id={id} />
      </div>
    </Layout>
  );
};

export default MoviePage;
