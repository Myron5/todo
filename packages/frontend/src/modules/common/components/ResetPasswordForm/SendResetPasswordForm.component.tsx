import React from 'react';
import { useFormik } from 'formik';
import { TextField, Typography } from '@mui/material';

import { BasicForm, MyButton, MyButtonGroup } from './ResetPasswordForm.styled';
import { useNavigateBackForward, useSendResetPassword } from '../../../hooks';
import { schemaSendResetPassword as validationSchema } from '../../../schemas';
import { SendResetPasswordFormInitials } from '../../consts';
import { Spinner } from '../Other';

export const SendResetPasswordForm = () => {
  const { goBack } = useNavigateBackForward();
  const { mutate: mutateSend, status: statusSend } = useSendResetPassword();

  const handleOnSubmit: SendResetPasswordFormInitials.IHandleOnSubmit = (values, actions) => {
    mutateSend(values);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: SendResetPasswordFormInitials.initialValues,
    validationSchema,
    onSubmit: handleOnSubmit
  });

  if (statusSend === 'loading') {
    return <Spinner />;
  }

  if (statusSend === 'success') {
    return <Typography>Check your email</Typography>;
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

      <MyButtonGroup>
        <MyButton onClick={goBack}>Back</MyButton>
        <MyButton type="submit">Submit</MyButton>
      </MyButtonGroup>
    </BasicForm>
  );
};
