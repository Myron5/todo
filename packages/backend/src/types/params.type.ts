export const bages = ['all', 'private', 'public', 'completed'] as const;
export type TypeBages = (typeof bages)[number];

export interface IQueryParams {
  bage: TypeBages;
  search?: string;
  limit: number;
  page: number;
}
