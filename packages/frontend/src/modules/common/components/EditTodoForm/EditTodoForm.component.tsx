import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useFormik } from 'formik';
import { Switch, TextField } from '@mui/material';

import {
  Action,
  Actions,
  BasicForm,
  FlexBox,
  MyButton,
  MyModal,
  ToRightSide,
  FiledsBox
} from './EditTodoForm.styled';
import { ITodo } from '../../types';
import { useEditTodo } from '../../../hooks';
import { Spinner } from '../Other/Spinner';
import { schemaCreateUpdate as validationSchema } from '../../../schemas';
import { EditTodoFormInitials } from '../../consts';

interface IEditTodo {
  data: ITodo;
  status: string;
  isEditing: boolean;
  toggleEdit: (newState?: boolean | undefined) => void;
}

export const EditTodoForm: React.FC<IEditTodo> = ({ data, status, isEditing, toggleEdit }) => {
  const { mutate: mutateEdit, status: statusEdit } = useEditTodo();

  const onSubmit: EditTodoFormInitials.IHandleOnSubmit = (values) => {
    mutateEdit({ id: data.id, ...values });
  };

  const formik = useFormik({
    initialValues: EditTodoFormInitials.initialValues,
    validationSchema,
    onSubmit
  });

  const onDiscard = () => {
    formik.setValues((prev) => ({ ...prev, ...data }));
    toggleEdit();
  };

  useEffect(() => {
    if (status === 'success') {
      formik.setValues((prev) => ({ ...prev, ...data }));
    }
  }, [status]);

  if (statusEdit === 'success') {
    toggleEdit(false);
  }

  return createPortal(
    <MyModal open={isEditing} onClose={onDiscard} aria-labelledby="Edit todo form">
      <BasicForm onSubmit={formik.handleSubmit}>
        {statusEdit === 'error' && <p>Error no data to display</p>}
        {statusEdit === 'loading' ? (
          <Spinner />
        ) : (
          <>
            {/* Edit Buttons */}
            <ToRightSide>
              <FlexBox>
                <MyButton onClick={onDiscard}>Discard</MyButton>
                <MyButton type="submit">Save</MyButton>
              </FlexBox>
            </ToRightSide>

            <FiledsBox>
              {/* Name */}
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

              {/* Description */}
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
            </FiledsBox>

            {/* Switches */}
            <Actions>
              <Action>
                <p>Complete:</p>
                <Switch
                  id="isCompleted"
                  name="isCompleted"
                  checked={formik.values.isCompleted}
                  onChange={formik.handleChange}
                  disabled={!isEditing}
                />
              </Action>
              <Action>
                <p>Private:</p>
                <Switch
                  id="isPrivate"
                  name="isPrivate"
                  checked={formik.values.isPrivate}
                  onChange={formik.handleChange}
                  disabled={!isEditing}
                />
              </Action>
            </Actions>
          </>
        )}
      </BasicForm>
    </MyModal>,
    document.querySelector('#modal-edit-todo')!
  );
};
