import React from 'react';
import { withRouter } from 'react-router-dom';

import Layout from '../containers/layout';
import MovieForm from '../containers/movie-form';

const MovieFormPage = ({ match }) => {
  const id = match.params.id;

  return (
    <Layout>
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: 32,
          margin: '32px auto',
          border: '1px solid rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1 style={{ marginTop: 0 }}>EDIT</h1>
        <MovieForm id={id} />
      </div>
    </Layout>
  );
};

export default withRouter(MovieFormPage);
