import React from 'react';
import { Switch, TableCell, TableRow } from '@mui/material';

import { SIZES, TypeSizes, APP_KEYS } from '../../consts';
import { ITodo } from '../../types';
import { useNavigateBackForward, useDeleteTodo, useEditTodo } from '../../../hooks';
import {
  Name,
  Description,
  Actions,
  MyButton,
  ButtonGroup,
  Element,
  ElementExt
} from './TodoElement.styled';
import { SmallSpinner } from '../Other';

interface ITodoElement extends ITodo {
  size: TypeSizes;
}

export const TodoElement: React.FC<ITodoElement> = (props) => {
  const { size, id, name, description, isCompleted, isPrivate } = props;

  const { goForward } = useNavigateBackForward();
  const { mutate: mutateDelete, status: statusDelete } = useDeleteTodo();
  const { mutate: mutateEdit, status: statusEdit } = useEditTodo();
  const isLoading = statusDelete === 'loading' || statusEdit === 'loading';

  const onView = () => {
    if (!id) return;
    goForward(APP_KEYS.ROUTER_KEYS.TODODETAILS.replace(':todoId', id));
  };

  const onDelete = () => {
    if (!id) return;
    mutateDelete(id);
  };

  const onToggleCompleted = () => {
    const editedTodo = { id, name, description, isCompleted: !isCompleted, isPrivate };
    mutateEdit(editedTodo);
  };

  if (size === SIZES.LG) {
    return (
      <TableRow
        sx={{ width: '665px', heigh: '80px', '&:last-child td, &:last-child th': { border: 0 } }}
      >
        {isLoading ? (
          <TableCell sx={{ width: '665px', height: '80px' }} component="th" scope="row">
            <SmallSpinner />
          </TableCell>
        ) : (
          <>
            <TableCell sx={{ maxWidth: '145px', overflow: 'hidden' }} component="th" scope="row">
              <Name isCompleted={isCompleted}>{name}</Name>
            </TableCell>
            <TableCell sx={{ width: '300px', overflow: 'hidden' }}>
              <Description isCompleted={isCompleted}>{description}</Description>
            </TableCell>
            <TableCell>
              <Actions>
                <ButtonGroup>
                  <MyButton onClick={() => onView()}>View</MyButton>
                  <MyButton onClick={() => onDelete()}>Delete</MyButton>
                </ButtonGroup>
                <Switch onChange={onToggleCompleted} checked={isCompleted} />
              </Actions>
            </TableCell>
          </>
        )}
      </TableRow>
    );
  }

  if (size === SIZES.MD) {
    return (
      <ElementExt>
        {isLoading ? (
          <SmallSpinner />
        ) : (
          <>
            <Name isCompleted={isCompleted}>{name}</Name>
            <Description isCompleted={isCompleted}>{description}</Description>

            <Actions>
              <ButtonGroup>
                <MyButton onClick={() => onView()}>View</MyButton>
                <MyButton onClick={() => onDelete()}>Delete</MyButton>
              </ButtonGroup>
              <Switch onChange={onToggleCompleted} checked={isCompleted} />
            </Actions>
          </>
        )}
      </ElementExt>
    );
  }

  return (
    <Element>
      {isLoading ? (
        <SmallSpinner />
      ) : (
        <>
          <Name isCompleted={isCompleted}>{name}</Name>
          <Description isCompleted={isCompleted}>{description}</Description>

          <Actions>
            <ButtonGroup>
              <MyButton onClick={() => onView()}>View</MyButton>
              <MyButton onClick={() => onDelete()}>Delete</MyButton>
            </ButtonGroup>
            <Switch onChange={onToggleCompleted} checked={isCompleted} />
          </Actions>
        </>
      )}
    </Element>
  );
};
