import { Repository, EntityRepository } from 'typeorm';
import { Price } from '../../entity/price.entity';

@EntityRepository(Price)
export class PriceRepository extends Repository<Price> {}
