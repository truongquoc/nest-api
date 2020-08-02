import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Base } from './base.entity';
import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsDateString,
} from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotBlank } from '../Helper/validation/validation';
import { Category } from './category.entity';
import { Price } from './price.entity';
import { Tag } from './tag.entity';
const { CREATE, UPDATE } = CrudValidationGroups;
@Entity('books')
export class Book extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true, message: 'Book name required String type' })
  @Column({ type: 'text' })
  name: string;

  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  slug: string;

  @ManyToMany(
    type => Category,
    Category => Category.book,
  )
  @JoinTable({
    joinColumn: {
      name: 'bookId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'categoriesId',
      referencedColumnName: 'id',
    },
  })
  categories: Category[];

  @OneToMany(
    type => Price,
    Price => Price.book,
    { cascade: true, eager: true },
  )
  prices: Price[];

  @IsOptional({ groups: [CREATE, UPDATE] })
  @Column({ type: 'float', nullable: true })
  discount: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  description: string;

  @IsOptional({ groups: [UPDATE] })
  @IsBoolean({ always: true })
  @Column({ type: 'bool' })
  available: boolean;

  // @Column({type: 'array'})
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  dimension: string;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsDateString()
  @Column({ type: 'date' })
  publication: string;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  language: string;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  edition: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  isbn: string;

  @ManyToMany(
    type => Tag,
    Tag => Tag.book,
  )
  @JoinTable({
    joinColumn: {
      name: 'bookId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tagId',
      referencedColumnName: 'id',
    },
  })
  tags: Tag[];
}
