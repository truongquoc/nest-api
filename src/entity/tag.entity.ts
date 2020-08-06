import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Base } from './base.entity';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Book } from './book.entity';
import { User } from './user.entity';
const { CREATE, UPDATE } = CrudValidationGroups;
@Entity('tags')
export class Tag extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', unique: true })
  slug: string;

  @ManyToMany(
    type => Book,
    Book => Book.tags,
  )
  @JoinTable({
    joinColumn: {
      name: 'tagId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'bookId',
      referencedColumnName: 'id',
    },
  })
  book: Book[];

  @ManyToOne(
    type => User,
    user => user.tags,
  )
  author: User;
}
