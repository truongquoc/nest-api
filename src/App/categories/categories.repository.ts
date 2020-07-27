import { Repository, TreeRepository, Entity, EntityRepository } from 'typeorm';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(Category)
export class CategoryRepository extends TreeRepository<Category> {}
