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
} from 'typeorm';
import { Book } from './book.entity';
import { TreeBase } from './tree.entity';

@Entity('categories')
@Tree('materialized-path')
export class Category extends TreeBase {
  @PrimaryGeneratedColumn()
  id: number;

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
}
