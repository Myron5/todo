import React from 'react';
import { useFormik } from 'formik';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';

import { BasicForm, MyButton, MyButtonGroup } from './CreateTodoForm.styled';
import { useNavigateBackForward, useCreateTodo } from '../../../hooks';
import { Spinner } from '../Other/Spinner';
import { schemaCreateUpdate as validationSchema } from '../../../schemas';
import { CreateTodoFormInitials } from '../../consts';

export const CreateTodoForm = () => {
  const { goBack } = useNavigateBackForward();
  const { mutate: mutateCreate, status: statusCreate } = useCreateTodo();

  const handleOnSubmit: CreateTodoFormInitials.IHandleOnSubmit = (values, actions) => {
    mutateCreate(values);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: CreateTodoFormInitials.initialValues,
    validationSchema,
    onSubmit: handleOnSubmit
  });

  if (statusCreate === 'loading') {
    return <Spinner />;
  }

  return (
    <BasicForm onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        multiline
        rows={5}
        fullWidth
        id="description"
        name="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />

      <FormControlLabel
        control={<Checkbox />}
        id="isCompleted"
        name="isCompleted"
        label="Completed"
        checked={formik.values.isCompleted}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <FormControlLabel
        control={<Checkbox />}
        id="isPrivate"
        name="isPrivate"
        label="Private"
        checked={formik.values.isPrivate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <MyButtonGroup>
        <MyButton onClick={goBack}>Back</MyButton>
        <MyButton type="submit">Submit</MyButton>
      </MyButtonGroup>
    </BasicForm>
  );
};
