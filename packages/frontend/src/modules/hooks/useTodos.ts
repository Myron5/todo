import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';

import { createTodo, deleteTodo, editTodo, getTodoById, getTodos } from '../services';
import { APP_KEYS, TypeBages } from '../common/consts';
import { notify } from '../helpers';

const onError = (error: AxiosError<{ message: string }>) => {
  const { response, message } = error;
  notify.error(response?.data?.message || message);
};

export function useTodos(keyword: string, bage: TypeBages, page: number = 1, limit: number = 10) {
  return useQuery(
    [APP_KEYS.QUERY_KEYS.TODOS, bage, keyword, page, limit],
    () => getTodos({ bage, search: keyword, page, limit }),
    {
      onError
    }
  );
}

export function useOneTodo(id: string) {
  return useQuery([APP_KEYS.QUERY_KEYS.TODO, id], () => getTodoById(id), { onError });
}

export function useCreateTodo() {
  const queryClient = useQueryClient();

  const mutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient
        .invalidateQueries(APP_KEYS.QUERY_KEYS.TODOS)
        .then(() => notify.success('Created successfully!'));
    },
    onError
  });

  return mutation;
}

export function useEditTodo() {
  const queryClient = useQueryClient();

  const mutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient
        .invalidateQueries(APP_KEYS.QUERY_KEYS.TODO)
        .then(() => notify.success('Edited  successfully!'));
      queryClient
        .invalidateQueries(APP_KEYS.QUERY_KEYS.TODOS)
        .then(() => notify.success('Edited  successfully!'));
    },
    onError
  });
  return mutation;
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient
        .invalidateQueries(APP_KEYS.QUERY_KEYS.TODO)
        .then(() => notify.success('Deleted successfully!'));
    },
    onError
  });

  return mutation;
}
