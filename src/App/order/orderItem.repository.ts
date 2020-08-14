import { Repository, TreeRepository, Entity, EntityRepository } from 'typeorm';
import { OrderItem } from '../../entity/order_item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(OrderItem)
export class OrderItemRepository extends Repository<OrderItem> {}
