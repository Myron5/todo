import React, { useState } from 'react';
import { Typography } from '@mui/material';

import { TodoUpBar } from '../TodoUpBar';
import { TodoListLG } from './TodoList.LG.component';
import { TodoListMD } from './TodoList.MD.component';
import { TodoListSM } from './TodoList.SM.component';
import { Spinner } from '../Other/Spinner';
import { APP_KEYS, SIZES, TypeBages, bages } from '../../consts';
import { useMedia, useNavigateBackForward, useTodos } from '../../../hooks';
import { ErrorBox, MyButton } from './TodoList.styled';

export const TodoList = () => {
  const size = useMedia();
  const { goBack } = useNavigateBackForward();
  const [keyword, setKeyword] = useState<string>('');
  const [bage, setBage] = useState<TypeBages>(bages[2]);
  const [page, setPage] = useState<number>(1);

  const { data, status } = useTodos(keyword, bage, page, APP_KEYS.DEFAULT_KEYS.TODO_LIMIT);

  if (status === 'loading') return <Spinner />;

  if (status === 'error') {
    return <ErrorBox>Error, no data to display!</ErrorBox>;
  }

  /**
   * Render
   */

  return (
    <>
      <TodoUpBar {...{ bage, setKeyword, setBage }} />

      {data.todos.length === 0 && <Typography>There is no todos to display!</Typography>}

      {size === SIZES.LG && data.todos.length !== 0 && (
        <TodoListLG data={data} page={page} setPage={setPage} />
      )}

      {size === SIZES.MD && data.todos.length !== 0 && (
        <TodoListMD data={data} status={status} page={page} setPage={setPage} />
      )}

      {size === SIZES.SM && data.todos.length !== 0 && (
        <TodoListSM data={data} status={status} page={page} setPage={setPage} />
      )}

      <MyButton onClick={goBack} backBtn>
        Back
      </MyButton>
    </>
  );
};
