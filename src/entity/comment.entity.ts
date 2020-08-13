import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { User } from './user.entity';
import { Base } from './base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';
const { CREATE, UPDATE } = CrudValidationGroups;
@Entity('comments')
export class Comment extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'This is a comment' })
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString()
  @Column('text')
  comment: string;

  @ManyToOne(type => User)
  author: User;

  @ApiProperty({ example: 5 })
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsInt()
  @Column({ type: 'int' })
  rank: number;

  @ApiProperty({ example: 1 })
  @Column()
  bookId: number;

  @ManyToOne(
    type => Book,
    book => book.comments,
  )
  @JoinColumn({ name: 'bookId' })
  book: Book;
}
