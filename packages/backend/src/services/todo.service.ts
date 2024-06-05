import { DeepPartial } from 'typeorm';

import { Todo } from '../entities/Todo';
import { User } from '../entities/User';
import { ITodo } from '../types/todos.type';
import { IQueryParams } from '../types/params.type';
import { getRequestForDB } from '../helpers';

export default class TodoService {
  async find(queryParams: IQueryParams, user: User) {
    const DBrequest = getRequestForDB(queryParams, user.id);
    const [todos, total] = await Todo.findAndCount(DBrequest);
    const totalPages = Math.ceil(total / queryParams.limit);
    return { todos, total, totalPages, currentPage: Number(queryParams.page) };
  }

  async findById(user: User, id: string) {
    const todo = await Todo.findOne({ where: { id } });
    if (!todo || !(!todo.isPrivate || user.id.toString() === todo.creator)) return;
    return { todo };
  }

  async create(user: User, todo: ITodo) {
    const created = await Todo.save({ ...todo, creator: user.id } as DeepPartial<Todo>);
    return { created };
  }

  async delete(user: User, id: string) {
    if (!this.findById(user, id)) return null;
    const deleted = await Todo.delete(id);
    return { deleted };
  }

  async update(user: User, id: string, newTodo: ITodo) {
    if (!this.findById(user, id)) return null;
    const updated = await Todo.update(id, newTodo);
    return { updated };
  }
}
