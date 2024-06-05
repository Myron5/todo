import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  isCompleted: boolean;

  @Column()
  isPrivate: boolean;

  @Column()
  creator: string;
}

export type TodoEntityType = typeof Todo;
