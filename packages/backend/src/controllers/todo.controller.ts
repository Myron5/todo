import { Response, Request } from 'express';

import TodoService from '../services/todo.service';
import { HttpError, TryCatch } from '../helpers';
import { User } from '../entities/User';
import { IQueryParams } from '../types/params.type';

export class TodoController {
  constructor(private todoService: TodoService) {}

  @TryCatch()
  async getTodos(req: Request, res: Response) {
    const { bage, search, limit = 10, page = 1 } = req.query;
    const queryParams = { bage, search, limit, page };
    const todos = await this.todoService.find(queryParams as IQueryParams, req.user as User);
    res.json(todos);
  }

  @TryCatch()
  async getTodoById(req: Request, res: Response) {
    const id: string = req.params.todoId as string;
    const todo = await this.todoService.findById(req.user as User, id);
    if (!todo) {
      HttpError(res, todo === null ? 404 : 403);
      return;
    }
    res.json(todo);
  }

  @TryCatch()
  async createTodo(req: Request, res: Response) {
    const todo = await this.todoService.create(req.user as User, req.body);
    res.json(todo);
  }

  @TryCatch()
  async deleteTodo(req: Request, res: Response) {
    const id: string = req.params.todoId as string;
    const todo = await this.todoService.delete(req.user as User, id);
    if (!todo) {
      HttpError(res, 403);
      return;
    }
    res.json(todo);
  }

  @TryCatch()
  async updateTodo(req: Request, res: Response) {
    const id: string = req.params.todoId as string;
    const todo = await this.todoService.update(req.user as User, id, req.body);
    if (!todo) {
      HttpError(res, 403);
      return;
    }
    res.json(todo);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
