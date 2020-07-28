import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Base } from '../../common/Base/base.entity';
import { IsOptional, IsNotEmpty, IsString } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotBlank } from 'src/Helper/validation/validation';
import { Category } from '../categories/category.entity';
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
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @IsNotBlank()
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
}
