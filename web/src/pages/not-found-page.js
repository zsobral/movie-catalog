import React from 'react';

import { ReactComponent as Icon } from '../images/taken.svg';
import Layout from '../containers/layout';

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        maxWidth: 600,
        width: '100%',
        margin: '32px auto',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '72px', margin: 0 }}>404</h1>
      <h2 style={{ margin: '0 0 64px 0' }}>Page Not Found</h2>
      <Icon style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  </Layout>
);

export default NotFoundPage;
