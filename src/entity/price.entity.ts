import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDecimal,
} from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Book } from './book.entity';

const { CREATE, UPDATE } = CrudValidationGroups;
@Entity('price')
export class Price extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsInt()
  @Column({ type: 'text' })
  format: string;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsDecimal()
  @Column({ type: 'decimal' })
  price: number;

  @ManyToOne(
    type => Book,
    Book => Book.prices,
  )
  book: Book;
}
