import React from 'react';
import { useFormik } from 'formik';
import { Link, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BasicForm, MyButton, MyButtonGroup } from './LoginForm.styled';
import { useAuth, useLogin, useNavigateBackForward } from '../../../hooks';
import { schemaLogin as validationSchema } from '../../../schemas';
import { APP_KEYS, LoginFormInitials } from '../../consts';
import { Spinner } from '../Other';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { goBack } = useNavigateBackForward();
  const { data, mutate: mutateLogin, status: statusLogin } = useLogin();
  const { login } = useAuth();

  const goToHome = () => navigate(APP_KEYS.ROUTER_KEYS.ROOT, { replace: true });

  const handleOnSubmit: LoginFormInitials.IHandleOnSubmit = (values, actions) => {
    mutateLogin(values);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: LoginFormInitials.initialValues,
    validationSchema,
    onSubmit: handleOnSubmit
  });

  if (statusLogin === 'loading') {
    return <Spinner />;
  }

  if (statusLogin === 'success') {
    login(data.token);
    return (
      <>
        <Typography>Login successfully!</Typography>
        <Link onClick={goToHome} underline="hover">
          Get Started
        </Link>
      </>
    );
  }

  return (
    <BasicForm onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <MyButtonGroup>
        <MyButton onClick={goBack}>Back</MyButton>
        <MyButton type="submit">Submit</MyButton>
      </MyButtonGroup>
    </BasicForm>
  );
};
