import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TreeChildren,
  TreeParent,
  ManyToMany,
  JoinTable,
  Tree,
  PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { Book } from './book.entity';
import { TreeBase } from './tree.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { User } from './user.entity';

const { CREATE, UPDATE } = CrudValidationGroups;
@Entity('categories')
@Tree('materialized-path')
export class Category extends TreeBase {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', unique: true })
  slug: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;

  @ManyToMany(
    type => Book,
    Book => Book.categories,
  )
  @JoinTable({
    joinColumn: {
      name: 'categorieId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'bookId',
      referencedColumnName: 'id',
    },
  })
  book: Book[];
  // @ManyToOne(
  //   type => User,
  //   user => user.categories,
  // )
  // user: User;
}
