import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsInt } from 'class-validator';
import { Order } from './order.entity';
import { Book } from './book.entity';

@Entity('order_item')
export class OrderItem {
  @IsInt()
  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal' })
  price: number;

  @ManyToOne(
    type => Order,
    order => order.orderItems,
    { primary: true },
  )
  order: Order;

  @ManyToOne(
    type => Book,
    book => book.orderItems,
    { primary: true },
  )
  book: Book;
}
