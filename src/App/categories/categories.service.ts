import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Category } from '../../entity/category.entity';
import { CategoryRepository } from './categories.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService extends TypeOrmCrudService<Category> {
  constructor(
    @InjectRepository(Category) repo,
    private readonly repository: CategoryRepository,
  ) {
    super(repo);
  }
}
