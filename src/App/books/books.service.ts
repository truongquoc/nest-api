import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';

@Injectable()
export class BooksService extends TypeOrmCrudService<Book> {
  constructor(
    @InjectRepository(Book) repo,
    private readonly bookRepository: BookRepository,
  ) {
    super(repo);
  }
}
