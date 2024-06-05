import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { SIZES } from '../../consts';
import { TodoElement } from '../TodoElement';
import { List } from './TodoList.styled';
import { ITodo } from '../../types';
import { Spinner } from '../Other';

interface ITodoListSMProps {
  data: { todos: ITodo[]; total: number; totalPages: number; currentPage: number };
  status: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const TodoListSM: React.FC<ITodoListSMProps> = ({ data, status, page, setPage }) => {
  const [allTodos, setAllTodos] = useState<ITodo[][]>([]);

  const onScrollChange = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (status === 'success') {
      setAllTodos((prev) => [...prev, data.todos]);
    }
  }, [data]);

  if (data.total === 0) {
    return <p>There is no todos to display!</p>;
  }

  return (
    <InfiniteScroll
      pageStart={1}
      hasMore={page < data.totalPages}
      loadMore={onScrollChange}
      loader={<Spinner key="loader" />}
    >
      <List>
        {allTodos.flat().map((todo: ITodo) => (
          <TodoElement key={todo.id} {...{ ...todo, size: SIZES.SM }} />
        ))}
      </List>
    </InfiniteScroll>
  );
};
