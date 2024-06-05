import { Router } from 'express';

import { Todo, TodoEntityType } from '../../entities/Todo';
import {
  queryParamsSchema,
  todoSchema,
  TypeQueryParamsSchema,
  TypeTodoSchema
} from '../../schemas';
import { accessVerify, isExist, validateBody, validateQueryParams } from '../../middlewares';
import todoController from '../../controllers/todo.controller';

const todosRouter: Router = Router();

todosRouter.get(
  '/',
  validateQueryParams<TypeQueryParamsSchema>(queryParamsSchema),
  accessVerify('jwt'),
  todoController.getTodos.bind(todoController)
);

todosRouter.get(
  '/:todoId',
  accessVerify('jwt'),
  isExist<TodoEntityType>(Todo, 'todoId'),
  todoController.getTodoById.bind(todoController)
);

todosRouter.post(
  '/',
  accessVerify('jwt'),
  validateBody<TypeTodoSchema>(todoSchema),
  todoController.createTodo.bind(todoController)
);

todosRouter.put(
  '/:todoId',
  accessVerify('jwt'),
  isExist<TodoEntityType>(Todo, 'todoId'),
  validateBody<TypeTodoSchema>(todoSchema),
  todoController.updateTodo.bind(todoController)
);

todosRouter.delete(
  '/:todoId',
  accessVerify('jwt'),
  isExist<TodoEntityType>(Todo, 'todoId'),
  todoController.deleteTodo.bind(todoController)
);

export default todosRouter;
