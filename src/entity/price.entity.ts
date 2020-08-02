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
  @Column({ type: 'int', nullable: false })
  format: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsDecimal()
  @Column({ type: 'decimal', nullable: false })
  price: number;

  @ManyToOne(
    type => Book,
    Book => Book.prices,
  )
  book: Book;
}
