import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Tag } from 'src/entity/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagService extends TypeOrmCrudService<Tag> {
  constructor(
    @InjectRepository(Tag) repo,
    private readonly repository: TagRepository,
  ) {
    super(repo);
  }
}
