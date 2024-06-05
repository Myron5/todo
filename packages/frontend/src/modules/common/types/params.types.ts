import { TypeBages } from '../consts';

export interface ISearchTodo {
  bage: TypeBages;
  search?: string;
  limit?: number;
  page?: number;
}
