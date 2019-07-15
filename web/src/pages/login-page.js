import React from 'react';

import Layout from '../components/layout';
import LoginForm from '../containers/login-form';

const LoginPage = () => (
  <Layout>
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: 32,
        maxWidth: 400,
        margin: '32px auto',
        border: '1px solid rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1>Login</h1>
      <LoginForm />
    </div>
  </Layout>
);

export default LoginPage;
