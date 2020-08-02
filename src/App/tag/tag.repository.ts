import { Repository, TreeRepository, Entity, EntityRepository } from 'typeorm';
import { Category } from '../../entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/entity/tag.entity';

@EntityRepository(Category)
export class TagRepository extends Repository<Tag> {}
