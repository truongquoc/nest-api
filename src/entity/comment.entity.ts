import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { Book } from './book.entity';
import { User } from './user.entity';
import { Base } from './base.entity';
@Entity('comments')
export class Comment extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  comment: string;

  @ManyToOne(type => User)
  author: User;

  @Column({ type: 'int' })
  rank: number;

  @ManyToOne(
    type => Book,
    book => book.comments,
  )
  book: Book;
}
