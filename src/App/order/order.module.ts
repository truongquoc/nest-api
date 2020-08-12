import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from 'src/entity/order.entity';
import { AuthModule } from '../auth/auth.module';
import { User } from 'src/entity/user.entity';
import { Book } from 'src/entity/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, Book]), AuthModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
