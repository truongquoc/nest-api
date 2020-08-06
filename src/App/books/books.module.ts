import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../../entity/book.entity';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { AuthServices } from '../auth/auth.service';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { User } from 'src/common/decorators/user.decorator';
import { UserRepository } from '../users/user.repository';
import { UserService } from '../users/users.service';
import { Role } from 'src/entity/role.entity';
import { Price } from 'src/entity/price.entity';
import { Author } from 'src/entity/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Price, Author]), AuthModule],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
