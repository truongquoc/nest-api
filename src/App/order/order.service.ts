import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Order } from 'src/entity/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService extends TypeOrmCrudService<Order> {
  constructor(
    @InjectRepository(Order) repo,
    private readonly repository: OrderRepository,
  ) {
    super(repo);
  }

  async createOrder(orderDto: Order, userId: string) {
      
  }
}
