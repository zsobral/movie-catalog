import React from 'react';
import { Formik, Field } from 'formik';

import { useUser } from '../contexts/user-context';
import { InputField } from '../components/field';
import { Button } from '../components/button';
import { Alert } from '../components/alert';

const LoginForm = () => {
  const [userState, userActions] = useUser();

  return (
    <>
      {userState.error && (
        <Alert data-testid="login-error" style={{ marginBottom: 16 }}>
          {userState.error}
        </Alert>
      )}
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          userActions.login(values.username, values.password).then(() => {
            setSubmitting(false);
          });
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="username"
              label="Username"
              type="text"
              component={InputField}
            />
            <Field
              name="password"
              label="Password"
              type="password"
              component={InputField}
            />
            <Button type="submit" data-testid="login-btn">
              Login
            </Button>
          </form>
        )}
      />
    </>
  );
};

export default LoginForm;
