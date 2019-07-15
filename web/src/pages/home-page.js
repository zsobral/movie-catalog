import React from 'react';

import Layout from '../components/layout';
import Movies from '../containers/movies';

const HomePage = () => (
  <Layout>
    <div style={{ marginTop: 32, marginBottom: 32 }}>
      <Movies />
    </div>
  </Layout>
);

export default HomePage;
