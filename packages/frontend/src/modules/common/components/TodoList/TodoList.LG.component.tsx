import React from 'react';
import { Pagination } from '@mui/material';

import { SIZES } from '../../consts';
import { TodoElement } from '../TodoElement';
import { BasicTable, WrapBox } from './TodoList.styled';
import { ITodo } from '../../types';

interface ITodoListLGProps {
  data: { todos: ITodo[]; total: number; totalPages: number; currentPage: number };
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const TodoListLG: React.FC<ITodoListLGProps> = ({ data, page, setPage }) => {
  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (data.total === 0) {
    return <p>There is no todos to display!</p>;
  }

  return (
    <WrapBox>
      <BasicTable>
        {data.todos.map((todo: ITodo) => (
          <TodoElement key={todo.id} {...{ ...todo, size: SIZES.LG }} />
        ))}
      </BasicTable>

      <Pagination count={data.totalPages} page={page} onChange={handlePaginationChange} />
    </WrapBox>
  );
};
