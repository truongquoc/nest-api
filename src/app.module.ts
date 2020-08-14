import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './App/users/users.module';
import { APP_FILTER } from '@nestjs/core';
import { BooksModule } from './App/books/books.module';
import { AuthModule } from './App/auth/auth.module';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './app.role';
import { MulterModule } from '@nestjs/platform-express';
import { CategoriesModule } from './App/categories/categories.module';
import { TagModule } from './App/tag/tag.module';
import { OrderModule } from './App/order/order.module';
//import { HttpErrorFilter } from './shared/http-error.filter';
import { CommentModule } from './App/comment/comment.module';
import { AddressModule } from './App/address/address.module';
@Module({
  imports: [
    AccessControlModule.forRoles(roles),
    UsersModule,
    BooksModule,
    AuthModule,
    CategoriesModule,
    TagModule,
    OrderModule,
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    CommentModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
