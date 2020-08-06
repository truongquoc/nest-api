import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Base } from './base.entity';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Book } from './book.entity';
const { CREATE, UPDATE } = CrudValidationGroups;
@Entity('authors')
export class Author extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'text' })
  name: string;

  @OneToMany(
    type => Book,
    Book => Book.author,
  )
  books: Book[];
}
