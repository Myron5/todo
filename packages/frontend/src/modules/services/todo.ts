import { instance } from './instance';
import { ISearchTodo, ITodo } from '../common/types';

const getQueryString = (params: ISearchTodo) => {
  // Check if some Field have wrong type (if yes, filter this param)
  const paramsCopy = Object.entries(params).filter((entry) => entry[1]);

  return paramsCopy.length === 0
    ? ''
    : '?'.concat(
        paramsCopy
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(String(value).toLowerCase())}`
          )
          .join('&')
      );
};

export const getTodos = async (params: ISearchTodo) => {
  const { data } = await instance.get(`/api/todos/${getQueryString(params)}`);
  return data;
};

export const getTodoById = async (id: string) => {
  const { data } = await instance.get(`/api/todos/${id}`);
  return data;
};

export const createTodo = async (fullTodo: ITodo) => {
  const { name, description, isCompleted, isPrivate } = fullTodo;
  const newTodo = { name, description, isCompleted, isPrivate };
  const { data } = await instance.post('/api/todos', newTodo);
  return data;
};

export const editTodo = async (fullTodo: ITodo) => {
  const { id, name, description, isCompleted, isPrivate } = fullTodo;
  const editedTodo = { name, description, isCompleted, isPrivate };
  const { data } = await instance.put(`/api/todos/${id}`, editedTodo);
  return data;
};

export const deleteTodo = async (id: string) => {
  const { data } = await instance.delete(`/api/todos/${id}`);
  return data;
};
