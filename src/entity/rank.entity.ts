import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Base } from './base.entity';
import { User } from './user.entity';
import { CrudValidationGroups } from '@nestjsx/crud';
const { CREATE, UPDATE } = CrudValidationGroups;

import { IsIn, IsOptional } from 'class-validator';
import { Book } from './book.entity';
@Entity('ranks')
export class Rank extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @IsIn([1, 2, 3, 4, 5])
  @Column({ type: 'int' })
  rank: number;

  @ManyToOne(
    type => Book,
    book => book.ranks,
  )
  book: Book;

  @Column({ type: 'int' })
  quantity: number;
}
