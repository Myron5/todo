import { FindManyOptions, ILike } from 'typeorm';

import { IQueryParams, bages } from '../types/params.type';
import { Todo } from '../entities/Todo';

interface IGetRequestForDB {
  (params: IQueryParams, creator: string): FindManyOptions<Todo>;
}

export const getRequestForDB: IGetRequestForDB = (queryParams, creator) => {
  const { bage, search, limit, page } = queryParams;

  if (!search) {
    switch (bage) {
      case bages[0]: // all
        return {
          where: [{ isPrivate: false }, { creator }],
          order: { id: 'DESC' },
          skip: (page - 1) * limit,
          take: limit
        };
      case bages[1]: // private
        return {
          where: { creator, isPrivate: true },
          order: { id: 'DESC' },
          skip: (page - 1) * limit,
          take: limit
        };
      case bages[2]: // public
        return {
          where: { isPrivate: false },
          order: { id: 'DESC' },
          skip: (page - 1) * limit,
          take: limit
        };
      case bages[3]: // completed
        return {
          where: [
            { isPrivate: false, isCompleted: true },
            { creator, isCompleted: true }
          ],
          order: { id: 'DESC' },
          skip: (page - 1) * limit,
          take: limit
        };
    }
  }

  switch (bage) {
    case bages[0]: // all
      return {
        where: [
          { isPrivate: false, name: ILike(`%${search}%`) },
          { creator, name: ILike(`%${search}%`) }
        ],
        order: { id: 'DESC' },
        skip: (page - 1) * limit,
        take: limit
      };
    case bages[1]: // private
      return {
        where: { creator, isPrivate: true, name: ILike(`%${search}%`) },
        order: { id: 'DESC' },
        skip: (page - 1) * limit,
        take: limit
      };
    case bages[2]: // public
      return {
        where: { isPrivate: false, name: ILike(`%${search}%`) },
        order: { id: 'DESC' },
        skip: (page - 1) * limit,
        take: limit
      };
    case bages[3]: // completed
      return {
        where: [
          { isPrivate: false, isCompleted: true, name: ILike(`%${search}%`) },
          {
            creator,
            isCompleted: true,
            name: ILike(`%${search}%`)
          }
        ],
        order: { id: 'DESC' },
        skip: (page - 1) * limit,
        take: limit
      };
  }
};
