import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { Link, TextField, Typography } from '@mui/material';

import { BasicForm, MyButton, MyButtonGroup } from './ResetPasswordForm.styled';
import { useNavigateBackForward, useResetPassword } from '../../../hooks';
import { schemaResetPassword as validationSchema } from '../../../schemas';
import { APP_KEYS, ResetPasswordFormInitials } from '../../consts';
import { Spinner } from '../Other';

export const ResetPasswordForm = () => {
  const { resetPassToken = '' } = useParams();
  const navigate = useNavigate();
  const { goBack } = useNavigateBackForward();
  const { mutate: mutateReset, status: statusReset } = useResetPassword();

  const goToHome = () => navigate(APP_KEYS.ROUTER_KEYS.ROOT, { replace: true });

  const handleOnSubmit: ResetPasswordFormInitials.IHandleOnSubmit = (values, actions) => {
    if (!resetPassToken) {
      return;
    }
    if (values.newpassword !== values.confirmnewpassword) {
      actions.setErrors({ confirmnewpassword: "Password password doesn't match" });
      return;
    }
    mutateReset({ newpassword: values.newpassword, resetPassToken });
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: ResetPasswordFormInitials.initialValues,
    validationSchema,
    onSubmit: handleOnSubmit
  });

  if (statusReset === 'loading') {
    return <Spinner />;
  }

  if (statusReset === 'success') {
    return (
      <>
        <Typography>Resetted successfully!</Typography>
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
        id="newpassword"
        name="newpassword"
        label="New Password"
        type="password"
        value={formik.values.newpassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.newpassword && Boolean(formik.errors.newpassword)}
        helperText={formik.touched.newpassword && formik.errors.newpassword}
      />
      <TextField
        fullWidth
        id="confirmnewpassword"
        name="confirmnewpassword"
        label="Confirm New Password"
        type="password"
        value={formik.values.confirmnewpassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmnewpassword && Boolean(formik.errors.confirmnewpassword)}
        helperText={formik.touched.confirmnewpassword && formik.errors.confirmnewpassword}
      />

      <MyButtonGroup>
        <MyButton onClick={goBack}>Back</MyButton>
        <MyButton type="submit">Submit</MyButton>
      </MyButtonGroup>
    </BasicForm>
  );
};
