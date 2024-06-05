import React from 'react';
import { useFormik } from 'formik';
import { TextField, Typography } from '@mui/material';

import { BasicForm, MyButton, MyButtonGroup, MyTextField } from './RegisterForm.styled';
import { useNavigateBackForward, useRegister } from '../../../hooks';
import { schemaRegister as validationSchema } from '../../../schemas';
import { RegisterFormInitials } from '../../consts';
import { Spinner } from '../Other';

export const RegisterForm = () => {
  const { goBack } = useNavigateBackForward();
  const { mutate: mutateRegister, status: statusRegister } = useRegister();

  const handleOnSubmit: RegisterFormInitials.IHandleOnSubmit = (values, actions) => {
    if (values.confirmpassword !== values.password) {
      actions.setErrors({ confirmpassword: "Password password doesn't match" });
      return;
    }
    mutateRegister(values);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: RegisterFormInitials.initialValues,
    validationSchema,
    onSubmit: handleOnSubmit
  });

  if (statusRegister === 'loading') {
    return <Spinner />;
  }

  if (statusRegister === 'success') {
    return <Typography>Registrated successfully, check our email to verify!</Typography>;
  }

  return (
    <BasicForm onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        fullWidth
      />
      <MyTextField
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        fullWidth
      />
      <MyTextField
        id="confirmpassword"
        name="confirmpassword"
        label="Confirmpassword"
        type="password"
        value={formik.values.confirmpassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
        helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
        fullWidth
      />

      <MyButtonGroup>
        <MyButton onClick={goBack}>Back</MyButton>
        <MyButton type="submit">Submit</MyButton>
      </MyButtonGroup>
    </BasicForm>
  );
};
