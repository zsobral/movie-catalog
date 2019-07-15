import React from 'react';
import { Formik, Field } from 'formik';

import { InputField } from '../components/field';
import { Button } from '../components/button';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={values => console.log(values)}
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
          <Button type="submit">Login</Button>
        </form>
      )}
    />
  );
};

export default LoginForm;
