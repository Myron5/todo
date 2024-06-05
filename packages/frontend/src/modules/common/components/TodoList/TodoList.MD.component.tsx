import React, { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperType from 'swiper';

import { SIZES } from '../../consts';
import { TodoElement } from '../TodoElement';
import { Slider } from './TodoList.styled';
import { ITodo } from '../../types';

interface ITodoListMDProps {
  data: { todos: ITodo[]; total: number; totalPages: number; currentPage: number };
  status: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const TodoListMD: React.FC<ITodoListMDProps> = ({ data, status, page, setPage }) => {
  const [allTodos, setAllTodos] = useState<ITodo[][]>([]);

  const onSlideChange = (swiper: SwiperType) => {
    if (swiper.isEnd && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
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
    <Slider onSlideChange={onSlideChange}>
      {allTodos.flat().map((todo: ITodo, index: number) => (
        <SwiperSlide key={todo.id} virtualIndex={index}>
          <TodoElement {...{ ...todo, size: SIZES.MD }} />
        </SwiperSlide>
      ))}
    </Slider>
  );
};
