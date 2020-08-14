import { Repository, TreeRepository, Entity, EntityRepository } from 'typeorm';
import { Order } from '../../entity/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {}
